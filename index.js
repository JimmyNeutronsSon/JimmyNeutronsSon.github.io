import { createServer } from "node:http";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "url";
import { hostname } from "node:os";
import { server as wisp, logging } from "@mercuryworkshop/wisp-js/server";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";

import { scramjetPath } from "@mercuryworkshop/scramjet/path";
import { libcurlPath } from "@mercuryworkshop/libcurl-transport";
import { baremuxPath } from "@mercuryworkshop/bare-mux/node";

const publicPath = fileURLToPath(new URL("../", import.meta.url));

/** TMDB "API Read Access Token" (JWT) uses Bearer; v3 API Key uses ?api_key= */
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

/** `aud` from JWT payload (same as v3 API Key on the dashboard) */
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

/**
 * Some `.env` lines accidentally append the v3 API Key after the JWT signature
 * (duplicate of `aud`). That breaks Bearer auth → 401. Strip that suffix.
 */
function normalizeTmdbJwt(token) {
	const trimmed = token.trim();
	const parts = trimmed.split(".");
	if (parts.length !== 3 || !parts[0].startsWith("eyJ")) return trimmed;
	const aud = tmdbJwtAud(trimmed);
	let sig = parts[2];
	if (aud && sig.endsWith(aud)) sig = sig.slice(0, -aud.length);
	return `${parts[0]}.${parts[1]}.${sig}`;
}

/** Optional project-root `.env` (TMDB_API_KEY=...) without extra dependencies */
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

/**
 * COOP + COEP (cross-origin isolation) is required for the in-browser proxy
 * stack on browse.html (e.g. SharedArrayBuffer / WASM). Applying it site-wide
 * breaks normal pages: cross-origin images (TMDB), iframes (Vidking), etc.
 * respond with ERR_BLOCKED_BY_RESPONSE under require-corp.
 */
function needsCrossOriginIsolation(urlPath) {
	const path = urlPath.split("?")[0];
	return path === "/browse.html";
}

// Wisp Configuration: Refer to the documentation at https://www.npmjs.com/package/@mercuryworkshop/wisp-js

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
				else socket.end();
			});
	},
});

function applyTmdbQuery(u, query) {
	for (const [k, v] of Object.entries(query || {})) {
		if (k === "api_key" || v === undefined || v === "") continue;
		u.searchParams.set(k, String(v));
	}
}

// ── TMDB API proxy (key stays on server) — see https://developer.themoviedb.org/reference/getting-started
async function tmdbForward(relPath, query, reply) {
	const raw = process.env.TMDB_API_KEY?.trim();
	if (!raw) {
		return reply.code(503).send({
			ok: false,
			error:
				"TMDB_API_KEY is not set. Add it to a .env file in the project root or your environment. Get a key at https://developer.themoviedb.org/",
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

/** Same-origin TMDB images (avoids COEP / CORP issues with image.tmdb.org) */
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
	if (!TMDB_IMG_SIZES.has(String(size))) {
		return reply.code(400).send("Invalid size");
	}
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

fastify.get("/api/tmdb/tv/:id/season/:season_number", (req, reply) => {
	if (!/^\d+$/.test(req.params.id) || !/^\d+$/.test(req.params.season_number))
		return reply.code(400).send({ ok: false, error: "Invalid parameters" });
	return tmdbForward(`/tv/${req.params.id}/season/${req.params.season_number}`, req.query, reply);
});

fastify.register(fastifyStatic, {
	root: publicPath,
	decorateReply: true,
});

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

// ── Music Proxy Route ───────────────────────────
// To bypass COEP/CORS specifically for Saavn resources
fastify.get("/proxy", async (request, reply) => {
  const url = request.query.url;
  if (!url) return reply.code(400).send("No URL provided");
  
  try {
    const res = await fetch(url);
    const contentType = res.headers.get("content-type");
    const data = await res.arrayBuffer();
    
    reply.type(contentType)
         .header("Access-Control-Allow-Origin", "*")
         .header("Cross-Origin-Resource-Policy", "cross-origin")
         .send(Buffer.from(data));
  } catch (err) {
    reply.code(500).send("Proxy error");
  }
});

fastify.setNotFoundHandler((res, reply) => {
	return reply.code(404).type("text/html").sendFile("404.html");
});

fastify.server.on("listening", () => {
	const address = fastify.server.address();

	if (!process.env.TMDB_API_KEY) {
		console.warn(
			"TMDB_API_KEY is not set — add it to .env (project root). Movies API: https://developer.themoviedb.org/",
		);
	}

	// by default we are listening on 0.0.0.0 (every interface)
	// we just need to list a few
	console.log("Listening on:");
	console.log(`\thttp://localhost:${address.port}`);
	console.log(`\thttp://${hostname()}:${address.port}`);
	console.log(
		`\thttp://${
			address.family === "IPv6" ? `[${address.address}]` : address.address
		}:${address.port}`
	);
});

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

function shutdown() {
	console.log("SIGTERM signal received: closing HTTP server");
	fastify.close();
	process.exit(0);
}

const envPort = parseInt(process.env.PORT || "", 10);
const startPort =
	Number.isFinite(envPort) && envPort > 0 ? envPort : 5000;
const PORT_ATTEMPTS = 20;

async function startServer() {
	let lastErr;
	for (let i = 0; i < PORT_ATTEMPTS; i++) {
		const port = startPort + i;
		try {
			await fastify.listen({ port, host: "0.0.0.0" });
			if (i > 0) {
				console.warn(
					`Port ${startPort} was in use (EADDRINUSE). Listening on ${port} instead.`,
				);
				console.warn(`Open: http://localhost:${port}/movies.html`);
			}
			return;
		} catch (err) {
			lastErr = err;
			if (err && err.code === "EADDRINUSE") continue;
			throw err;
		}
	}
	console.error(
		"Could not bind after",
		PORT_ATTEMPTS,
		"attempts starting at",
		startPort,
	);
	throw lastErr;
}

startServer().catch((err) => {
	console.error(err);
	process.exit(1);
});
