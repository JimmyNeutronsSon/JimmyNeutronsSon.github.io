importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

let configErrorLogged = false;

const BYPASS_HOSTS = [
  "videasy.net",
  "db.videasy.net",
  "api.videasy.net",
  "player.videasy.net",
  "users.videasy.net",
  "api.themoviedb.org",
  "image.tmdb.org",
];

const BYPASS_PATHS = ["/proxy", "/baremux/", "/scram/", "/libcurl/"];

async function handleRequest(event) {
  const url = new URL(event.request.url);

  if (BYPASS_HOSTS.some((h) => url.hostname.includes(h))) {
    return fetch(event.request);
  }
  if (BYPASS_PATHS.some((p) => url.pathname.startsWith(p))) {
    return fetch(event.request);
  }
  if (url.pathname.endsWith(".obj") || url.pathname.includes("3d-cloud.js")) {
    return fetch(event.request);
  }

  try {
    await scramjet.loadConfig();
  } catch (e) {
    if (!configErrorLogged) {
      console.error("Scram config load error, bypassing proxy:", e);
      configErrorLogged = true;
    }
    return fetch(event.request);
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
      return fetch(event.request);
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