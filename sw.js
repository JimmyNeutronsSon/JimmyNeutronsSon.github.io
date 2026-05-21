importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

let configErrorLogged = false;
const SCRAMJET_WASM_PATH = "/scram/scramjet.wasm.wasm";

const BYPASS_HOSTS = ["api.themoviedb.org", "image.tmdb.org"];

const BYPASS_PATHS = [
  "/api/",
  "/proxy",
  "/socket.io/",
  "/baremux/",
  "/scram/",
  "/libcurl/",
  "/assets/",
  "/lib/",
];

// Detect Render deployment — Render sets RENDER env var,
// but in the SW context we check the hostname instead.
// On Render, WebSocket upgrades don't work the same way as locally,
// so we need to ensure the wisp transport is configured correctly.
function isRenderDeployment() {
  return self.location.hostname !== "localhost" &&
    self.location.hostname !== "127.0.0.1";
}

async function handleRequest(event) {
  const url = new URL(event.request.url);

  if (BYPASS_HOSTS.some((h) => url.hostname.includes(h))) {
    return fetch(event.request);
  }
  const isScramjetWasm = url.pathname === SCRAMJET_WASM_PATH;

  if (!isScramjetWasm && BYPASS_PATHS.some((p) => url.pathname.startsWith(p))) {
    return fetch(event.request);
  }
  if (
    url.origin === self.location.origin &&
    !url.pathname.startsWith("/scramjet/") &&
    !isScramjetWasm
  ) {
    return fetch(event.request);
  }
  if (url.pathname.endsWith(".obj") || url.pathname.includes("3d-cloud.js")) {
    return fetch(event.request);
  }

  try {
    await scramjet.loadConfig();
  } catch (e) {
    if (!configErrorLogged) {
      console.error("Scram config load error, providing default config:", e);
      configErrorLogged = true;
    }
  }

  // Ensure config exists with correct transport
  if (!scramjet.config) {
    // On Render (non-localhost), use libcurl transport which works over HTTP
    // instead of epoxy/bare which requires raw WebSocket upgrades
    const useLibcurl = isRenderDeployment();
    scramjet.config = {
      prefix: "/scramjet/",
      codec: "plain",
      files: {
        wasm: SCRAMJET_WASM_PATH,
        all: "/scram/scramjet.all.js",
        sync: "/scram/scramjet.sync.js",
      },
      transports: useLibcurl
        ? ["/libcurl/index.js"]  // libcurl works on Render (HTTP/2 based)
        : ["/baremux/index.js"], // bare/epoxy for local dev
    };
  }

  if (scramjet.route(event)) {
    try {
      const res = await scramjet.fetch(event);
      if (!res) {
        console.warn("Scram fetch returned null, falling back");
        return fetch(event.request);
      }
      const headers = new Headers(res.headers);
      headers.set("Cross-Origin-Embedder-Policy", "require-corp");
      headers.set("Cross-Origin-Resource-Policy", "cross-origin");
      return new Response(res.body, {
        status: res.status,
        statusText: res.statusText,
        headers: headers,
      });
    } catch (err) {
      // "Invalid URL scheme: None" means epoxy/bare WebSocket transport failed.
      // This happens on Render because WebSocket upgrades are proxied differently.
      // Fall back gracefully instead of showing a broken page.
      if (err.message && err.message.includes("Invalid URL scheme")) {
        console.warn("Transport error (likely Render WebSocket proxy issue), falling back:", err.message);
        // Return a helpful error page instead of a crash
        return new Response(
          `<!DOCTYPE html>
          <html><head><title>Proxy Error</title>
          <style>body{font-family:sans-serif;background:#0b1e3d;color:#c5d8f0;display:flex;align-items:center;justify-content:center;height:100vh;margin:0;flex-direction:column;gap:12px;}
          h2{color:#6cb4f0;}a{color:#3a8fe0;}</style></head>
          <body><h2>☁️ Proxy Transport Error</h2>
          <p>The WebSocket transport failed on this deployment.</p>
          <p>Try clearing site data: <strong>F12 → Application → Storage → Clear site data</strong></p>
          <p>Then reload the browse page.</p>
          <a href="/home.html">← Back to Welkin</a></body></html>`,
          { status: 502, headers: { "Content-Type": "text/html" } }
        );
      }
      console.error("Scram fetch error:", err);
      return new Response("Proxy request failed. Please reload and try again.", {
        status: 502,
        statusText: "Proxy Error",
        headers: { "Content-Type": "text/plain" },
      });
    }
  }

  // Not routed by scram, fallback to network.
  try {
    return await fetch(event.request);
  } catch (err) {
    console.error("Network fetch failed:", err);
    return new Response("Network request failed.", {
      status: 502,
      statusText: "Network Error",
      headers: { "Content-Type": "text/plain" },
    });
  }
}

self.addEventListener("fetch", (e) => {
  e.respondWith(handleRequest(e));
});

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);