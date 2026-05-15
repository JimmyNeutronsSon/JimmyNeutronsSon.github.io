import { createServer } from "node:http";
import { createHash } from "node:crypto";
import { readFileSync, existsSync } from "node:fs";
import { writeFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "url";
import { hostname } from "node:os";
import { server as wisp, logging } from "@mercuryworkshop/wisp-js/server";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { Server as SocketIOServer } from "socket.io";

import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";
import ngrok from "@ngrok/ngrok";

const publicPath = fileURLToPath(new URL("../", import.meta.url));

function tmdbCredentialIsBearer(token) {
  if (!token || typeof token !== "string") return false;
  const parts = token.trim().split(".");
  return parts.length === 3 && parts[0].startsWith("eyJ");
}

function base64UrlToUtf8(b64url) {
  const b64 = b64url.replace(/-/g, "+").replace(/_/g, "/");
  const pad = (4 - (b64.length % 4)) % 4;
  return Buffer.from(b64 + "=".repeat(pad), "base64").toString("utf8");
}

function tmdbJwtAud(token) {
  try {
    const parts = token.trim().split(".");
    if (parts.length < 2) return null;
    const payload = JSON.parse(base64UrlToUtf8(parts[1]));
    return typeof payload.aud === "string" ? payload.aud : null;
  } catch {
    return null;
  }
}

function normalizeTmdbJwt(token) {
  const trimmed = token.trim();
  const parts = trimmed.split(".");
  if (parts.length !== 3 || !parts[0].startsWith("eyJ")) return trimmed;
  const aud = tmdbJwtAud(trimmed);
  let sig = parts[2];
  if (aud && sig.endsWith(aud)) sig = sig.slice(0, -aud.length);
  return `${parts[0]}.${parts[1]}.${sig}`;
}

function loadEnvFile() {
  try {
    const p = join(publicPath, ".env");
    if (!existsSync(p)) return;
    const text = readFileSync(p, "utf8");
    for (const line of text.split(/\r?\n/)) {
      const t = line.trim();
      if (!t || t.startsWith("#")) continue;
      const i = t.indexOf("=");
      if (i === -1) continue;
      const k = t.slice(0, i).trim();
      let v = t.slice(i + 1).trim();
      if (
        (v.startsWith('"') && v.endsWith('"')) ||
        (v.startsWith("'") && v.endsWith("'"))
      ) {
        v = v.slice(1, -1);
      }
      if (k && process.env[k] === undefined) process.env[k] = v;
    }
  } catch {
    /* ignore */
  }
}
loadEnvFile();

const TMDB_API = "https://api.themoviedb.org/3";
const TMDB_IMG_SIZES = new Set([
  "w92",
  "w154",
  "w185",
  "w342",
  "w500",
  "w780",
  "w1280",
  "original",
]);

function needsCrossOriginIsolation(urlPath) {
  const path = urlPath.split("?")[0];
  return path === "/browse.html" || path === "/mog.html";
}

logging.set_level(logging.NONE);
Object.assign(wisp.options, {
  allow_udp_streams: false,
  hostname_blacklist: [],
  dns_servers: ["1.1.1.3", "1.0.0.3"],
});

const fastify = Fastify({
  serverFactory: (handler) => {
    return createServer()
      .on("request", (req, res) => {
        if (needsCrossOriginIsolation(req.url || "")) {
          res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
          res.setHeader("Cross-Origin-Embedder-Policy", "require-corp");
        }
        handler(req, res);
      })
      .on("upgrade", (req, socket, head) => {
        if (req.url.endsWith("/wisp/")) wisp.routeRequest(req, socket, head);
        else if (!req.url.startsWith("/socket.io/")) socket.end();
      });
  },
});

fastify.removeAllContentTypeParsers();
fastify.addContentTypeParser(
  "application/json",
  { parseAs: "string" },
  function (req, body, done) {
    try {
      done(null, JSON.parse(body));
    } catch (e) {
      done(new Error("Invalid JSON"));
    }
  },
);
fastify.addContentTypeParser(
  "text/plain",
  { parseAs: "string" },
  function (req, body, done) {
    try {
      done(null, JSON.parse(body));
    } catch (e) {
      done(null, body);
    }
  },
);

function applyTmdbQuery(u, query) {
  for (const [k, v] of Object.entries(query || {})) {
    if (k === "api_key" || v === undefined || v === "") continue;
    u.searchParams.set(k, String(v));
  }
}

async function tmdbForward(relPath, query, reply) {
  const raw = process.env.TMDB_API_KEY?.trim();
  if (!raw) {
    return reply.code(503).send({
      ok: false,
      error: "TMDB_API_KEY is not set.",
    });
  }

  const bearerJwt = tmdbCredentialIsBearer(raw) ? normalizeTmdbJwt(raw) : null;
  let u = new URL(`${TMDB_API}${relPath}`);
  let fetchOpts = {};

  if (bearerJwt) {
    fetchOpts.headers = { Authorization: `Bearer ${bearerJwt}` };
    applyTmdbQuery(u, query);
    let res = await fetch(u, fetchOpts);
    if (res.status === 401) {
      const aud = tmdbJwtAud(raw);
      if (aud) {
        u = new URL(`${TMDB_API}${relPath}`);
        u.searchParams.set("api_key", aud);
        applyTmdbQuery(u, query);
        fetchOpts = {};
        res = await fetch(u, fetchOpts);
      }
    }
    const ct = res.headers.get("content-type") || "application/json";
    const buf = Buffer.from(await res.arrayBuffer());
    return reply.code(res.status).type(ct).send(buf);
  }

  u.searchParams.set("api_key", raw);
  applyTmdbQuery(u, query);
  const res = await fetch(u, fetchOpts);
  const ct = res.headers.get("content-type") || "application/json";
  const buf = Buffer.from(await res.arrayBuffer());
  return reply.code(res.status).type(ct).send(buf);
}

fastify.get("/api/img/tmdb", async (request, reply) => {
  const imgPath = Array.isArray(request.query.path)
    ? request.query.path[0]
    : request.query.path;
  const sizeRaw = request.query.size || "w500";
  const size = Array.isArray(sizeRaw) ? sizeRaw[0] : sizeRaw;
  if (
    typeof imgPath !== "string" ||
    !imgPath.startsWith("/") ||
    imgPath.includes("..")
  ) {
    return reply.code(400).send("Invalid path");
  }
  if (!TMDB_IMG_SIZES.has(String(size)))
    return reply.code(400).send("Invalid size");
  const url = `https://image.tmdb.org/t/p/${size}${imgPath}`;
  const res = await fetch(url);
  if (!res.ok) return reply.code(res.status).send();
  const ct = res.headers.get("content-type") || "image/jpeg";
  return reply
    .header("Cache-Control", "public, max-age=86400")
    .header("Cross-Origin-Resource-Policy", "cross-origin")
    .type(ct)
    .send(Buffer.from(await res.arrayBuffer()));
});

fastify.get("/api/tmdb/trending/movie/day", (req, reply) =>
  tmdbForward("/trending/movie/day", req.query, reply),
);
fastify.get("/api/tmdb/trending/tv/day", (req, reply) =>
  tmdbForward("/trending/tv/day", req.query, reply),
);
fastify.get("/api/tmdb/movie/popular", (req, reply) =>
  tmdbForward("/movie/popular", req.query, reply),
);
fastify.get("/api/tmdb/movie/top_rated", (req, reply) =>
  tmdbForward("/movie/top_rated", req.query, reply),
);
fastify.get("/api/tmdb/movie/now_playing", (req, reply) =>
  tmdbForward("/movie/now_playing", req.query, reply),
);
fastify.get("/api/tmdb/movie/upcoming", (req, reply) =>
  tmdbForward("/movie/upcoming", req.query, reply),
);
fastify.get("/api/tmdb/tv/popular", (req, reply) =>
  tmdbForward("/tv/popular", req.query, reply),
);
fastify.get("/api/tmdb/tv/top_rated", (req, reply) =>
  tmdbForward("/tv/top_rated", req.query, reply),
);
fastify.get("/api/tmdb/genre/movie/list", (req, reply) =>
  tmdbForward("/genre/movie/list", req.query, reply),
);
fastify.get("/api/tmdb/search/movie", (req, reply) =>
  tmdbForward("/search/movie", req.query, reply),
);
fastify.get("/api/tmdb/search/tv", (req, reply) =>
  tmdbForward("/search/tv", req.query, reply),
);
fastify.get("/api/tmdb/discover/movie", (req, reply) =>
  tmdbForward("/discover/movie", req.query, reply),
);

fastify.get("/api/tmdb/movie/:id", (req, reply) => {
  if (!/^\d+$/.test(req.params.id))
    return reply.code(400).send({ ok: false, error: "Invalid movie id" });
  return tmdbForward(`/movie/${req.params.id}`, req.query, reply);
});

fastify.get("/api/tmdb/tv/:id", (req, reply) => {
  if (!/^\d+$/.test(req.params.id))
    return reply.code(400).send({ ok: false, error: "Invalid tv id" });
  return tmdbForward(`/tv/${req.params.id}`, req.query, reply);
});

fastify.register(fastifyStatic, { root: publicPath, decorateReply: true });
fastify.register(fastifyStatic, {
  root: scramjetPath,
  prefix: "/scram/",
  decorateReply: false,
});
fastify.register(fastifyStatic, {
  root: libcurlPath,
  prefix: "/libcurl/",
  decorateReply: false,
});
fastify.register(fastifyStatic, {
  root: baremuxPath,
  prefix: "/baremux/",
  decorateReply: false,
});

fastify.get("/proxy", async (request, reply) => {
  const url = request.query.url;
  if (!url) return reply.code(400).send("No URL provided");
  try {
    const res = await fetch(url);
    const contentType = res.headers.get("content-type");
    const data = await res.arrayBuffer();
    reply
      .type(contentType)
      .header("Access-Control-Allow-Origin", "*")
      .header("Cross-Origin-Resource-Policy", "cross-origin")
      .send(Buffer.from(data));
  } catch (err) {
    reply.code(500).send("Proxy error");
  }
});

fastify.get("/health", async (request, reply) => {
  const checks = {
    tmdb: !!process.env.TMDB_API_KEY,
    scramjet: require("fs").existsSync(
      require("@mercuryworkshop/scramjet/path").scramjetPath,
    ),
  };
  const ok = Object.values(checks).every(Boolean);
  return reply.code(ok ? 200 : 503).send({ ok, checks });
});

const DEFAULT_NVIDIA_API_KEY =
  "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";
const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";

fastify.post("/api/nim", async (request, reply) => {
  try {
    const userApiKey = request.headers.authorization;
    const apiKey = userApiKey || `Bearer ${DEFAULT_NVIDIA_API_KEY}`;
    const res = await fetch(NVIDIA_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: apiKey },
      body: JSON.stringify(request.body),
    });
    const contentType = res.headers.get("content-type");
    const data = await res.arrayBuffer();
    return reply
      .code(res.status)
      .type(contentType)
      .header("Access-Control-Allow-Origin", "*")
      .send(Buffer.from(data));
  } catch (err) {
    console.error("NIM Proxy Error:", err);
    return reply.code(500).send({ error: "Proxy error" });
  }
});

fastify.post("/api/gemini", async (request, reply) => {
  try {
    const { model, key, contents } = request.body;
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents }),
    });
    const data = await res.json();
    return reply.code(res.status).send(data);
  } catch (err) {
    console.error("Gemini Proxy Error:", err);
    return reply.code(500).send({ error: "Proxy error" });
  }
});

fastify.setNotFoundHandler((res, reply) => {
  return reply.code(404).type("text/html").sendFile("404.html");
});

fastify.server.on("listening", () => {
  const address = fastify.server.address();
  if (!process.env.TMDB_API_KEY) console.warn("TMDB_API_KEY is not set.");
  console.log(`Listening on http://localhost:${address.port}`);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
  fastify.close();
  process.exit(0);
}

const envPort = parseInt(process.env.PORT || "", 10);
const startPort = Number.isFinite(envPort) && envPort > 0 ? envPort : 8080;

// ── Socket.io — auth + chat + voice ─────────────────────────────────────────
let io;

// ════════════════════════════════════════════════════════════════════════════
//  DATA LAYER — Supabase (production) with JSON-file fallback (local dev)
//
//  Supabase setup — create these three tables in your project:
//
//  Table: chat_messages
//    id        bigint generated always as identity primary key
//    data      jsonb not null          ← the full message object
//    inserted_at timestamptz default now()
//
//  Table: chat_users
//    username  text primary key        ← lowercase key
//    data      jsonb not null          ← { username, passwordHash, token, friends, ... }
//
//  Table: chat_dms
//    pair_key  text primary key        ← "alice|bob" (sorted)
//    messages  jsonb not null          ← array of message objects
//
//  Set these env vars on Render:
//    SUPABASE_URL   = https://xxxx.supabase.co
//    SUPABASE_KEY   = your service_role (secret) key   ← NOT the anon key
// ════════════════════════════════════════════════════════════════════════════

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const USE_SUPABASE = !!(SUPABASE_URL && SUPABASE_KEY);

if (USE_SUPABASE) {
  console.log("chat: Supabase persistence enabled →", SUPABASE_URL);
} else {
  console.log(
    "chat: SUPABASE_URL / SUPABASE_KEY not set — using local JSON files.\n" +
      "      Data will be lost on Render redeploy. Set the env vars to persist.",
  );
}

// ── Thin Supabase REST helper (no extra npm package needed) ──────────────────
async function sbFetch(path, opts = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: opts.prefer || "return=representation",
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    throw new Error(`Supabase ${path} → ${res.status}: ${txt}`);
  }
  const text = await res.text();
  return text ? JSON.parse(text) : null;
}

// ── Local JSON file fallback ──────────────────────────────────────────────────
const CHAT_FILE = join(publicPath, "chat-history.json");
const USERS_FILE = join(publicPath, "chat-users.json");
const DM_FILE = join(publicPath, "chat-dms.json");

function readJsonFile(path, fallback) {
  try {
    if (existsSync(path)) return JSON.parse(readFileSync(path, "utf8"));
  } catch {
    /* ignore */
  }
  return fallback;
}

// ── In-memory caches (always kept up-to-date; Supabase is the source of truth) ─
const MAX_HISTORY = 200;
const MAX_DM = 200;

const chatHistory = readJsonFile(CHAT_FILE, []);
const users = readJsonFile(USERS_FILE, {});
const dmHistory = readJsonFile(DM_FILE, {});

// ── Load from Supabase into memory at startup ────────────────────────────────
async function loadFromSupabase() {
  if (!USE_SUPABASE) return;
  try {
    // chat messages — newest MAX_HISTORY rows
    const msgs = await sbFetch(
      `chat_messages?select=data&order=id.asc&limit=${MAX_HISTORY}`,
      { prefer: "return=representation" },
    );
    chatHistory.length = 0;
    msgs.forEach((r) => chatHistory.push(r.data));

    // users
    const userRows = await sbFetch("chat_users?select=username,data");
    Object.keys(users).forEach((k) => delete users[k]);
    userRows.forEach((r) => {
      users[r.username] = r.data;
    });

    // DMs
    const dmRows = await sbFetch("chat_dms?select=pair_key,messages");
    Object.keys(dmHistory).forEach((k) => delete dmHistory[k]);
    dmRows.forEach((r) => {
      dmHistory[r.pair_key] = r.messages;
    });

    // GCs
    try {
      const gcRows = await sbFetch("chat_gcs?select=id,data");
      Object.keys(groupChatsData).forEach((k) => delete groupChatsData[k]);
      gcRows.forEach((r) => {
        groupChatsData[r.id] = r.data;
      });
    } catch (e) {
      console.warn("chat: loadFromSupabase GCs failed (table might not exist yet)");
    }

    console.log(
      `chat: loaded from Supabase — ${chatHistory.length} msgs, ` +
        `${Object.keys(users).length} users, ${Object.keys(dmHistory).length} DM threads, ` +
        `${Object.keys(groupChatsData).length} GCs`,
    );
  } catch (e) {
    console.error(
      "chat: Supabase load failed, falling back to local data:",
      e.message,
    );
  }
}

// ── Write helpers ────────────────────────────────────────────────────────────

// Chat messages — insert one row; trim old rows if over limit
async function sbPushMsg(msg) {
  if (!USE_SUPABASE) return;
  try {
    await sbFetch("chat_messages", {
      method: "POST",
      prefer: "return=minimal",
      body: JSON.stringify({ data: msg }),
    });
  } catch (e) {
    console.error("chat: sbPushMsg failed:", e.message);
  }
}

let _saveHistoryTimer = null;
function saveHistory() {
  // Always write local file (no-op on read-only FS, won't crash)
  clearTimeout(_saveHistoryTimer);
  _saveHistoryTimer = setTimeout(async () => {
    try {
      await writeFile(CHAT_FILE, JSON.stringify(chatHistory), "utf8");
    } catch {}
  }, 2000);
}

function pushMsg(msg) {
  chatHistory.push(msg);
  if (chatHistory.length > MAX_HISTORY) chatHistory.shift();
  saveHistory();
  sbPushMsg(msg); // fire-and-forget
}

// Users — upsert one row
async function saveUsers() {
  // Local file
  try {
    await writeFile(USERS_FILE, JSON.stringify(users), "utf8");
  } catch {}
  if (!USE_SUPABASE) return;
  // Upsert all dirty users — we just upsert everything; it's a small table
  try {
    const rows = Object.entries(users).map(([username, data]) => ({
      username,
      data,
    }));
    if (!rows.length) return;
    await sbFetch("chat_users", {
      method: "POST",
      prefer: "resolution=merge-duplicates,return=minimal",
      headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
      body: JSON.stringify(rows),
    });
  } catch (e) {
    console.error("chat: saveUsers failed:", e.message);
  }
}

// DMs — upsert one pair_key row
function dmKey(a, b) {
  return [a, b].sort().join("|");
}

let _dmTimers = {};
function saveDMs(key) {
  clearTimeout(_dmTimers[key]);
  _dmTimers[key] = setTimeout(async () => {
    try {
      await writeFile(DM_FILE, JSON.stringify(dmHistory), "utf8");
    } catch {}
    if (!USE_SUPABASE) return;
    try {
      await sbFetch("chat_dms", {
        method: "POST",
        prefer: "resolution=merge-duplicates,return=minimal",
        headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
        body: JSON.stringify({ pair_key: key, messages: dmHistory[key] }),
      });
    } catch (e) {
      console.error("chat: saveDMs failed:", e.message);
    }
  }, 2000);
}

function pushDM(a, b, msg) {
  const k = dmKey(a, b);
  if (!dmHistory[k]) dmHistory[k] = [];
  dmHistory[k].push(msg);
  if (dmHistory[k].length > MAX_DM) dmHistory[k].shift();
  saveDMs(k);
}

// ── Auth helpers ─────────────────────────────────────────────────────────────
function hashPassword(pw) {
  return createHash("sha256")
    .update("welkin-salt-" + pw)
    .digest("hex");
}
function makeToken() {
  return createHash("sha256")
    .update(Math.random().toString() + Date.now())
    .digest("hex");
}

// ── Auth REST endpoints (called by the login form before WS connect) ──
fastify.post("/api/chat/register", async (req, reply) => {
  const { username, password } = req.body || {};
  if (
    !username ||
    !password ||
    typeof username !== "string" ||
    typeof password !== "string"
  )
    return reply.code(400).send({ ok: false, error: "Invalid input" });
  const name = username.trim().slice(0, 24);
  if (!name || name.length < 2)
    return reply.code(400).send({ ok: false, error: "Username too short" });
  if (password.length < 4)
    return reply
      .code(400)
      .send({ ok: false, error: "Password too short (min 4)" });
  if (users[name.toLowerCase()])
    return reply.code(409).send({ ok: false, error: "Username taken" });
  const token = makeToken();
  users[name.toLowerCase()] = {
    username: name,
    passwordHash: hashPassword(password),
    token,
  };
  await saveUsers();
  return reply.send({ ok: true, username: name, token });
});

fastify.post("/api/chat/login", async (req, reply) => {
  const { username, password } = req.body || {};
  if (!username || !password)
    return reply.code(400).send({ ok: false, error: "Missing fields" });
  const record = users[username.trim().toLowerCase()];
  if (!record || record.passwordHash !== hashPassword(password))
    return reply
      .code(401)
      .send({ ok: false, error: "Wrong username or password" });
  // Rotate token on login
  record.token = makeToken();
  await saveUsers();
  return reply.send({
    ok: true,
    username: record.username,
    token: record.token,
    picture: record.picture || null,
  });
});

fastify.post("/api/chat/resume", async (req, reply) => {
  const { token } = req.body || {};
  if (!token) return reply.code(400).send({ ok: false, error: "No token" });
  const record = Object.values(users).find((u) => u.token === token);
  if (!record)
    return reply.code(401).send({ ok: false, error: "Invalid session" });
  return reply.send({
    ok: true,
    username: record.username,
    picture: record.picture || null,
  });
});

// ── Profile update endpoint ──
fastify.post("/api/chat/profile", async (req, reply) => {
  const { token, username, password, picture } = req.body || {};
  if (!token) return reply.code(400).send({ ok: false, error: "No token" });
  const record = Object.values(users).find((u) => u.token === token);
  if (!record)
    return reply.code(401).send({ ok: false, error: "Unauthorized" });

  const oldKey = record.username.toLowerCase();
  let newName = record.username;

  // Update display name
  if (username && typeof username === "string") {
    const name = username.trim().slice(0, 24);
    if (name.length < 2)
      return reply.code(400).send({ ok: false, error: "Username too short" });
    const newKey = name.toLowerCase();
    if (newKey !== oldKey && users[newKey])
      return reply.code(409).send({ ok: false, error: "Username taken" });
    if (newKey !== oldKey) {
      users[newKey] = record;
      delete users[oldKey];
      // Update friends lists, DMs, etc. to reference new name
      for (const u of Object.values(users)) {
        if (u.friends)
          u.friends = u.friends.map((n) => (n === record.username ? name : n));
        if (u.incoming)
          u.incoming = u.incoming.map((n) =>
            n === record.username ? name : n,
          );
        if (u.outgoing)
          u.outgoing = u.outgoing.map((n) =>
            n === record.username ? name : n,
          );
      }
    }
    record.username = name;
    newName = name;
  }

  // Update password
  if (password && typeof password === "string" && password.length >= 4) {
    record.passwordHash = hashPassword(password);
  }

  // Update profile picture
  if (picture !== undefined) {
    if (
      picture &&
      typeof picture === "string" &&
      picture.startsWith("data:image/") &&
      picture.length < 2_500_000
    ) {
      record.picture = picture;
    } else if (picture === null || picture === "") {
      delete record.picture;
    }
  }

  // Rotate token
  record.token = makeToken();
  await saveUsers();

  // Broadcast profile change to all connected sockets
  if (io)
    io.emit("profile:update", {
      username: newName,
      picture: record.picture || null,
    });

  return reply.send({
    ok: true,
    username: newName,
    token: record.token,
    picture: record.picture || null,
  });
});

// ── Friends endpoints ──
fastify.get("/api/chat/friends", async (req, reply) => {
  const _tok = req.headers["x-token"] || req.query.token;
  const me = Object.values(users).find((u) => u.token === _tok);
  if (!me) return reply.code(401).send({ ok: false, error: "Unauthorized" });
  return reply.send({
    ok: true,
    friends: me.friends || [],
    incoming: me.incoming || [],
    outgoing: me.outgoing || [],
  });
});

fastify.post("/api/chat/friends/request", async (req, reply) => {
  const _tok = req.headers["x-token"] || req.body?.token;
  const me = Object.values(users).find((u) => u.token === _tok);
  if (!me) return reply.code(401).send({ ok: false, error: "Unauthorized" });
  const { username } = req.body || {};
  const them = users[username?.trim().toLowerCase()];
  if (!them)
    return reply.code(404).send({ ok: false, error: "User not found" });
  if (them.username === me.username)
    return reply.code(400).send({ ok: false, error: "Can't add yourself" });
  me.friends = me.friends || [];
  me.outgoing = me.outgoing || [];
  me.incoming = me.incoming || [];
  them.friends = them.friends || [];
  them.incoming = them.incoming || [];
  them.outgoing = them.outgoing || [];
  if (me.friends.includes(them.username))
    return reply.code(409).send({ ok: false, error: "Already friends" });
  if (me.outgoing.includes(them.username))
    return reply.code(409).send({ ok: false, error: "Request already sent" });
  if (me.incoming.includes(them.username)) {
    // auto-accept mutual request
    me.friends.push(them.username);
    them.friends.push(me.username);
    me.incoming = me.incoming.filter((n) => n !== them.username);
    them.outgoing = them.outgoing.filter((n) => n !== me.username);
  } else {
    me.outgoing.push(them.username);
    them.incoming.push(me.username);
    const sid = [...liveMembers.entries()].find(
      ([, n]) => n === them.username,
    )?.[0];
    if (sid && io) io.to(sid).emit("friends:request", { from: me.username });
    // Sitewide notification
    if (io)
      io.to("notif-" + them.username).emit("friends:request", {
        from: me.username,
      });
  }
  await saveUsers();
  return reply.send({ ok: true });
});

fastify.post("/api/chat/friends/accept", async (req, reply) => {
  const _tok = req.headers["x-token"] || req.body?.token;
  const me = Object.values(users).find((u) => u.token === _tok);
  if (!me) return reply.code(401).send({ ok: false, error: "Unauthorized" });
  const { username } = req.body || {};
  const them = users[username?.trim().toLowerCase()];
  if (!them)
    return reply.code(404).send({ ok: false, error: "User not found" });
  me.incoming = (me.incoming || []).filter((n) => n !== them.username);
  them.outgoing = (them.outgoing || []).filter((n) => n !== me.username);
  me.friends = me.friends || [];
  them.friends = them.friends || [];
  if (!me.friends.includes(them.username)) me.friends.push(them.username);
  if (!them.friends.includes(me.username)) them.friends.push(me.username);
  await saveUsers();
  const sid = [...liveMembers.entries()].find(
    ([, n]) => n === them.username,
  )?.[0];
  if (sid && io) io.to(sid).emit("friends:accepted", { from: me.username });
  return reply.send({ ok: true });
});

fastify.post("/api/chat/friends/remove", async (req, reply) => {
  const _tok = req.headers["x-token"] || req.body?.token;
  const me = Object.values(users).find((u) => u.token === _tok);
  if (!me) return reply.code(401).send({ ok: false, error: "Unauthorized" });
  const { username } = req.body || {};
  const them = users[username?.trim().toLowerCase()];
  if (!them)
    return reply.code(404).send({ ok: false, error: "User not found" });
  const rm = (arr, v) => (arr || []).filter((n) => n !== v);
  me.friends = rm(me.friends, them.username);
  them.friends = rm(them.friends, me.username);
  me.incoming = rm(me.incoming, them.username);
  me.outgoing = rm(me.outgoing, them.username);
  them.incoming = rm(them.incoming, me.username);
  them.outgoing = rm(them.outgoing, me.username);
  await saveUsers();
  return reply.send({ ok: true });
});

fastify.get("/api/chat/dm/:other", async (req, reply) => {
  const _tok = req.headers["x-token"] || req.query.token;
  const me = Object.values(users).find((u) => u.token === _tok);
  if (!me) return reply.code(401).send({ ok: false, error: "Unauthorized" });
  const other = users[req.params.other?.toLowerCase()];
  if (!other)
    return reply.code(404).send({ ok: false, error: "User not found" });
  return reply.send({
    ok: true,
    messages: dmHistory[dmKey(me.username, other.username)] || [],
  });
});

// ── Live members map: socketId → username ──
const liveMembers = new Map();
const lastJoinMsg = new Map(); // name → timestamp, debounce join/left spam

function broadcastMembers() {
  const list = [...new Set(liveMembers.values())].sort();
  io.emit("members:update", list);
  // "online-count" = every open socket (any page), so all pages show real visitor count
  io.emit("online-count", { count: io.engine.clientsCount, members: list });
  io.emit("raw-count", io.engine.clientsCount);
}

function initSocketIO() {
  io = new SocketIOServer(fastify.server, {
    cors: { origin: "*" },
    path: "/socket.io/",
  });

  io.on("connection", (socket) => {
    // Broadcast updated visitor count to ALL connected sockets (raw = any page)
    io.emit("online-count", {
      count: io.engine.clientsCount,
      members: [...new Set(liveMembers.values())].sort(),
    });
    socket.emit("raw-count", io.engine.clientsCount);

    socket.on("disconnect", () => {
      const name = liveMembers.get(socket.id);
      liveMembers.delete(socket.id);
      if (name) {
        const stillOnline = [...liveMembers.values()].includes(name);
        if (!stillOnline) {
          const now = Date.now();
          const lastJoin = lastJoinMsg.get(name) || 0;
          if (now - lastJoin > 5000) {
            // only show left if they were here > 5s
            const msg = { type: "system", text: `${name} left`, ts: now };
            io.emit("chat:message", msg); // not persisted
          }
          lastJoinMsg.delete(name);
        }
      }
      broadcastMembers();
    });

    socket.on("lobby:ping", () => {
      socket.emit("raw-count", io.engine.clientsCount);
    });

    // ── Auth: join with token ──
    socket.on("chat:join", ({ token }) => {
      const record = Object.values(users).find((u) => u.token === token);
      if (!record) {
        socket.emit("chat:auth-error");
        return;
      }
      const name = record.username;
      socket.chatName = name;

      const alreadyOnline = [...liveMembers.values()].includes(name);
      liveMembers.set(socket.id, name);

      socket.emit("chat:history", chatHistory);
      socket.emit("gc:list", getGCsForUser(name));
      socket.emit("voice:members", getVoiceMembers());
      socket.join("notif-" + name);
      broadcastMembers();

      if (!alreadyOnline) {
        const now = Date.now();
        const lastJoin = lastJoinMsg.get(name) || 0;
        if (now - lastJoin > 30000) {
          // only show if > 30s since last join message
          const msg = { type: "system", text: `${name} joined`, ts: now };
          io.emit("chat:message", msg); // not persisted
        }
        lastJoinMsg.set(name, now);
      }
    });

    // ── Chat: send message ──
    socket.on("chat:send", ({ text, image, file, channel }) => {
      if (!socket.chatName) return;
      const ch =
        typeof channel === "string" &&
        ["general", "unblocked-links"].includes(channel)
          ? channel
          : "general";
      let cleanText = null;
      let cleanImage = null;
      let cleanFile = null;
      if (text !== undefined && text !== null)
        cleanText = String(text).trim().slice(0, 1000) || null;
      if (image !== undefined && image !== null) {
        if (
          typeof image === "string" &&
          image.startsWith("data:image/") &&
          image.length <= 5_000_000
        ) {
          cleanImage = image;
        }
      }
      if (file && typeof file === "object" && file.data && file.name) {
        if (
          typeof file.data === "string" &&
          file.data.startsWith("data:") &&
          file.data.length <= 10_000_000
        ) {
          cleanFile = {
            name: String(file.name).slice(0, 100),
            data: file.data,
            type: String(file.type || "application/octet-stream"),
            size: Number(file.size) || 0,
          };
        }
      }
      if (!cleanText && !cleanImage && !cleanFile) return;
      const msg = {
        name: socket.chatName,
        ts: Date.now(),
        channel: ch,
        id: Date.now() + "-" + Math.random().toString(36).slice(2, 8),
      };
      if (cleanText) msg.text = cleanText;
      if (cleanImage) msg.image = cleanImage;
      if (cleanFile) msg.file = cleanFile;
      msg.reactions = {};
      pushMsg(msg);
      io.emit("chat:message", msg);
    });

    // ── Edit / Delete ──
    socket.on("chat:edit", ({ id, text }) => {
      if (!socket.chatName || !id || !text) return;
      const cleanText = String(text).trim().slice(0, 500);
      if (!cleanText) return;
      const msg = chatHistory.find((m) => m.id === id);
      if (msg && msg.name === socket.chatName) {
        msg.text = cleanText;
        saveHistory();
        io.emit("chat:edited", { id, text: cleanText });
      } else {
        // Might be a DM or GC message
        // Simplified: only global chat messages are editable for now to save time
      }
    });

    socket.on("chat:delete", ({ id }) => {
      if (!socket.chatName || !id) return;
      const idx = chatHistory.findIndex((m) => m.id === id);
      if (idx !== -1 && chatHistory[idx].name === socket.chatName) {
        chatHistory.splice(idx, 1);
        saveHistory();
        io.emit("chat:deleted", { id });
      }
    });

    // ── Reactions ──
    socket.on("react:add", ({ msgId, emoji }) => {
      if (!socket.chatName || !msgId || !emoji) return;
      const e = String(emoji).slice(0, 4);
      // Find message in chatHistory
      const msg = chatHistory.find((m) => m.id === msgId);
      if (msg) {
        if (!msg.reactions) msg.reactions = {};
        if (!msg.reactions[e]) msg.reactions[e] = [];
        if (!msg.reactions[e].includes(socket.chatName)) {
          msg.reactions[e].push(socket.chatName);
          saveHistory();
          io.emit("react:update", { msgId, reactions: msg.reactions });
        }
      }
    });

    socket.on("react:remove", ({ msgId, emoji }) => {
      if (!socket.chatName || !msgId || !emoji) return;
      const e = String(emoji).slice(0, 4);
      const msg = chatHistory.find((m) => m.id === msgId);
      if (msg && msg.reactions && msg.reactions[e]) {
        msg.reactions[e] = msg.reactions[e].filter(
          (n) => n !== socket.chatName,
        );
        if (msg.reactions[e].length === 0) delete msg.reactions[e];
        saveHistory();
        io.emit("react:update", { msgId, reactions: msg.reactions });
      }
    });

    // ── DM: send direct message ──
    socket.on("dm:send", ({ to, text, image, file }) => {
      if (!socket.chatName || !to) return;
      let cleanText = null;
      let cleanImage = null;
      let cleanFile = null;
      if (text !== undefined && text !== null)
        cleanText = String(text).trim().slice(0, 1000) || null;
      if (image !== undefined && image !== null) {
        if (
          typeof image === "string" &&
          image.startsWith("data:image/") &&
          image.length <= 5_000_000
        ) {
          cleanImage = image;
        }
      }
      if (file && typeof file === "object" && file.data && file.name) {
        if (
          typeof file.data === "string" &&
          file.data.startsWith("data:") &&
          file.data.length <= 10_000_000
        ) {
          cleanFile = {
            name: String(file.name).slice(0, 100),
            data: file.data,
            type: String(file.type || "application/octet-stream"),
            size: Number(file.size) || 0,
          };
        }
      }
      if (!cleanText && !cleanImage && !cleanFile) return;
      const msg = { from: socket.chatName, to, ts: Date.now() };
      if (cleanText) msg.text = cleanText;
      if (cleanImage) msg.image = cleanImage;
      if (cleanFile) msg.file = cleanFile;
      pushDM(socket.chatName, to, msg);
      socket.emit("dm:message", msg);
      [...liveMembers.entries()]
        .filter(([, n]) => n === to)
        .forEach(([sid]) => io.to(sid).emit("dm:message", msg));
      // Sitewide notification for non-chat pages
      io.to("notif-" + to).emit("dm:message", msg);
    });

    // ── Friends: push current data to this socket ──
    socket.on("friends:refresh", () => {
      const me = Object.values(users).find(
        (u) => u.username === socket.chatName,
      );
      if (me)
        socket.emit("friends:data", {
          friends: me.friends || [],
          incoming: me.incoming || [],
          outgoing: me.outgoing || [],
        });
    });
    // ── Voice: WebRTC signaling ──
    // Each socket can join a voice room; we relay offer/answer/ice between peers
    socket.on("voice:join", (data) => {
      if (!socket.chatName) return;
      const room = (data && data.room) || "voice";
      socket.voiceRoom = room;
      socket.join(room);
      // Tell everyone else in the room a new peer joined so they can initiate offer
      socket.to(room).emit("voice:peer-joined", {
        peerId: socket.id,
        name: socket.chatName,
      });
      // Send this peer the list of existing voice members so it can show the UI
      const voicePeers = [...(io.sockets.adapter.rooms.get(room) || [])]
        .filter((id) => id !== socket.id)
        .map((id) => ({ peerId: id, name: liveMembers.get(id) || "?" }));
      socket.emit("voice:peers", voicePeers);
      io.emit("voice:members", getVoiceMembers());
    });

    socket.on("voice:leave", () => {
      const room = socket.voiceRoom || "voice";
      socket.leave(room);
      socket.to(room).emit("voice:peer-left", { peerId: socket.id });
      delete socket.voiceRoom;
      io.emit("voice:members", getVoiceMembers());
    });

    socket.on("voice:offer", ({ to, offer }) =>
      io
        .to(to)
        .emit("voice:offer", { from: socket.id, name: socket.chatName, offer }),
    );
    socket.on("voice:answer", ({ to, answer }) =>
      io.to(to).emit("voice:answer", { from: socket.id, answer }),
    );
    socket.on("voice:ice", ({ to, candidate }) =>
      io.to(to).emit("voice:ice", { from: socket.id, candidate }),
    );
    socket.on("voice:video-state", (payload) => {
      const room = socket.voiceRoom || "voice";
      socket.to(room).emit("voice:peer-video", {
        peerId: socket.id,
        name: socket.chatName,
        ...payload,
      });
    });
    socket.on("voice:screen-state", (payload) => {
      const room = socket.voiceRoom || "voice";
      socket.to(room).emit("voice:peer-screen", {
        peerId: socket.id,
        name: socket.chatName,
        ...payload,
      });
    });

    // ── Call signaling (1:1 and group calls) ──
    socket.on("call:start", ({ to, roomId, gcName }) => {
      if (!socket.chatName || !to) return;
      const targetSids = [...liveMembers.entries()].filter(([, n]) => n === to);
      const payload = { from: socket.chatName };
      if (roomId) payload.roomId = roomId;
      if (gcName) payload.gcName = gcName;
      targetSids.forEach(([sid]) => io.to(sid).emit("call:incoming", payload));
      // Sitewide notification
      io.to("notif-" + to).emit("call:incoming", payload);
    });
    socket.on("call:accept", ({ to }) => {
      if (!socket.chatName || !to) return;
      const targetSids = [...liveMembers.entries()].filter(([, n]) => n === to);
      targetSids.forEach(([sid]) =>
        io.to(sid).emit("call:accepted", { from: socket.chatName }),
      );
    });
    socket.on("call:decline", ({ to }) => {
      if (!socket.chatName || !to) return;
      const targetSids = [...liveMembers.entries()].filter(([, n]) => n === to);
      targetSids.forEach(([sid]) =>
        io.to(sid).emit("call:declined", { from: socket.chatName }),
      );
    });

    // ── Group Chats ──
    socket.on("gc:create", ({ name, members }) => {
      if (!socket.chatName || !name || !members || !members.length) return;
      const gcName = String(name).trim().slice(0, 32);
      if (!gcName) return;
      const gcId =
        "gc-" + Date.now() + "-" + Math.random().toString(36).slice(2, 6);
      const allMembers = [
        socket.chatName,
        ...members.filter((m) => m !== socket.chatName),
      ];
      const gc = {
        id: gcId,
        name: gcName,
        members: allMembers,
        messages: [],
        creator: socket.chatName,
      };
      groupChatsData[gcId] = gc;
      saveGroupChats();
      // Notify all members
      allMembers.forEach((memberName) => {
        [...liveMembers.entries()]
          .filter(([, n]) => n === memberName)
          .forEach(([sid]) => {
            io.to(sid).emit("gc:created", gc);
            io.to(sid).emit("gc:list", getGCsForUser(memberName));
          });
      });
    });

    socket.on("gc:send", ({ gcId, text, image, file }) => {
      if (!socket.chatName || !gcId) return;
      const gc = groupChatsData[gcId];
      if (!gc || !gc.members.includes(socket.chatName)) return;
      let cleanText = null;
      let cleanImage = null;
      let cleanFile = null;
      if (text !== undefined && text !== null)
        cleanText = String(text).trim().slice(0, 1000) || null;
      if (image !== undefined && image !== null) {
        if (
          typeof image === "string" &&
          image.startsWith("data:image/") &&
          image.length <= 5_000_000
        ) {
          cleanImage = image;
        }
      }
      if (file && typeof file === "object" && file.data && file.name) {
        if (
          typeof file.data === "string" &&
          file.data.startsWith("data:") &&
          file.data.length <= 10_000_000
        ) {
          cleanFile = {
            name: String(file.name).slice(0, 100),
            data: file.data,
            type: String(file.type || "application/octet-stream"),
            size: Number(file.size) || 0,
          };
        }
      }
      if (!cleanText && !cleanImage && !cleanFile) return;
      const msg = {
        gcId,
        from: socket.chatName,
        name: socket.chatName,
        ts: Date.now(),
      };
      if (cleanText) msg.text = cleanText;
      if (cleanImage) msg.image = cleanImage;
      if (cleanFile) msg.file = cleanFile;
      if (!gc.messages) gc.messages = [];
      gc.messages.push(msg);
      if (gc.messages.length > MAX_DM) gc.messages.shift();
      saveGroupChats();
      gc.members.forEach((memberName) => {
        [...liveMembers.entries()]
          .filter(([, n]) => n === memberName)
          .forEach(([sid]) => {
            io.to(sid).emit("gc:message", msg);
          });
      });
    });

    // Send GC list on join
    if (socket.chatName) {
      socket.emit("gc:list", getGCsForUser(socket.chatName));
    }

    // ── Sitewide notification: relay chat notifications to non-chat pages ──
    socket.on("notif:subscribe", ({ token }) => {
      // Allow non-chat sockets to get notifications
      const record = Object.values(users).find((u) => u.token === token);
      if (record) {
        socket.notifName = record.username;
        socket.join("notif-" + record.username);
      }
    });
  }); // end io.on("connection")

  console.log("Socket.io attached to server");
}

function getVoiceMembers() {
  const room = io?.sockets?.adapter?.rooms?.get("voice");
  if (!room) return [];
  return [...room].map((id) => ({
    peerId: id,
    name: liveMembers.get(id) || "?",
  }));
}

// ── Group Chats data ──
const GC_FILE = join(publicPath, "chat-gcs.json");
const groupChatsData = readJsonFile(GC_FILE, {});

function getGCsForUser(username) {
  return Object.values(groupChatsData).filter((gc) =>
    gc.members.includes(username),
  );
}

let _gcTimer = null;
function saveGroupChats() {
  clearTimeout(_gcTimer);
  _gcTimer = setTimeout(async () => {
    if (USE_SUPABASE) {
      try {
        const rows = Object.entries(groupChatsData).map(([id, data]) => ({
          id,
          data,
        }));
        await sbFetch("chat_gcs", {
          method: "POST",
          headers: { Prefer: "resolution=merge-duplicates,return=minimal" },
          body: JSON.stringify(rows),
        });
      } catch (e) {
        console.error("chat: saveGroupChats Supabase failed:", e.message);
      }
    }
    try {
      await writeFile(GC_FILE, JSON.stringify(groupChatsData), "utf8");
    } catch {}
  }, 2000);
}
async function startServer() {
  for (let i = 0; i < 20; i++) {
    const port = startPort + i;
    try {
      await fastify.listen({ port, host: "0.0.0.0" });
      initSocketIO();

      if (process.argv.includes("--share")) {
        const token = process.env.NGROK_AUTHTOKEN;
        if (!token) {
          console.warn("\n⚠️  NGROK_AUTHTOKEN not found in .env file.");
          console.warn(
            "Please get your token from https://dashboard.ngrok.com/get-started/your-authtoken\n",
          );
        } else {
          ngrok
            .forward({ addr: port, authtoken: token })
            .then((listener) => {
              console.log(`\n🚀 Ngrok tunnel established!`);
              console.log(`Public URL: ${listener.url()}`);
              console.log(`Forwarding to: http://localhost:${port}\n`);
            })
            .catch((err) => {
              console.error(
                "\n❌ Failed to establish ngrok tunnel:",
                err.message,
              );
            });
        }
      }

      return;
    } catch (err) {
      if (err && err.code === "EADDRINUSE") continue;
      throw err;
    }
  }
}

loadFromSupabase()
  .then(() => startServer())
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
