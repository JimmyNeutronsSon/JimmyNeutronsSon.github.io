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

  // Ensure config exists
  if (!scramjet.config) {
    scramjet.config = {
      prefix: "/scramjet/",
      codec: "plain",
      files: {
        wasm: SCRAMJET_WASM_PATH,
        all: "/scram/scramjet.all.js",
        sync: "/scram/scramjet.sync.js",
      },
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
      console.error("Scram fetch error:", err);
      return new Response("Proxy request failed. Please reload and try again.", {
        status: 502,
        statusText: "Proxy Error",
        headers: { "Content-Type": "text/plain" },
      });
    }
  }

  // Not routed by scram, fallback to network
  return fetch(event.request);
}

self.addEventListener("fetch", (e) => {
  e.respondWith(handleRequest(e));
});

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);
