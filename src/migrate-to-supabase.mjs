/**
 * migrate-to-supabase.mjs
 * ───────────────────────
 * One-time script: reads your local JSON files and uploads everything to
 * Supabase. Run this ONCE from your local machine before deploying the
 * updated server. Your existing data will be preserved.
 *
 * Usage:
 *   SUPABASE_URL=https://xxxx.supabase.co \
 *   SUPABASE_KEY=your_service_role_key \
 *   node migrate-to-supabase.mjs
 *
 * The script is idempotent — running it twice won't duplicate data.
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
// JSON files live one directory up from src/
const ROOT = join(__dirname, "..");

const SUPABASE_URL = process.env.SUPABASE_URL?.replace(/\/$/, "");
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error("❌  Set SUPABASE_URL and SUPABASE_KEY before running.");
  process.exit(1);
}

function readJson(file, fallback) {
  const path = join(ROOT, file);
  if (!existsSync(path)) {
    console.log(`  (${file} not found — skipping)`);
    return fallback;
  }
  return JSON.parse(readFileSync(path, "utf8"));
}

async function sb(path, opts = {}) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/${path}`, {
    ...opts,
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      Prefer: opts.prefer || "resolution=merge-duplicates,return=minimal",
      ...(opts.headers || {}),
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${path} → ${res.status}: ${text}`);
  return text ? JSON.parse(text) : null;
}

async function main() {
  console.log("🚀  Welkin → Supabase migration\n");

  // ── 1. Chat messages ──────────────────────────────────────────────────────
  const chatHistory = readJson("chat-history.json", []);
  if (chatHistory.length) {
    console.log(`📨  Migrating ${chatHistory.length} chat messages…`);
    // Insert in batches of 50 to stay under payload limits
    for (let i = 0; i < chatHistory.length; i += 50) {
      const batch = chatHistory.slice(i, i + 50).map((data) => ({ data }));
      await sb("chat_messages", {
        method: "POST",
        body: JSON.stringify(batch),
      });
      process.stdout.write(
        `    ${Math.min(i + 50, chatHistory.length)}/${chatHistory.length}\r`,
      );
    }
    console.log(`    ✓ ${chatHistory.length} messages uploaded`);
  } else {
    console.log("📨  No chat messages to migrate.");
  }

  // ── 2. Users ──────────────────────────────────────────────────────────────
  const users = readJson("chat-users.json", {});
  const userEntries = Object.entries(users);
  if (userEntries.length) {
    console.log(`\n👤  Migrating ${userEntries.length} users…`);
    const rows = userEntries.map(([username, data]) => ({ username, data }));
    await sb("chat_users", { method: "POST", body: JSON.stringify(rows) });
    console.log(`    ✓ ${userEntries.length} users uploaded`);
  } else {
    console.log("\n👤  No users to migrate.");
  }

  // ── 3. DM threads ─────────────────────────────────────────────────────────
  const dms = readJson("chat-dms.json", {});
  const dmEntries = Object.entries(dms);
  if (dmEntries.length) {
    console.log(`\n💬  Migrating ${dmEntries.length} DM threads…`);
    const rows = dmEntries.map(([pair_key, messages]) => ({
      pair_key,
      messages,
    }));
    for (let i = 0; i < rows.length; i += 20) {
      await sb("chat_dms", {
        method: "POST",
        body: JSON.stringify(rows.slice(i, i + 20)),
      });
    }
    console.log(`    ✓ ${dmEntries.length} DM threads uploaded`);
  } else {
    console.log("\n💬  No DM threads to migrate.");
  }

  console.log("\n✅  Migration complete! You can now deploy to Render.");
}

main().catch((e) => {
  console.error("❌ ", e.message);
  process.exit(1);
});
