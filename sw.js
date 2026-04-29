/* Service Worker - minimal version */

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (event) =>
  event.waitUntil(self.clients.claim()),
);

// Simple fetch handler - no proxying needed
self.addEventListener("fetch", (e) => {
  // Let browser handle all requests normally
  e.respondWith(fetch(e.request));
});
