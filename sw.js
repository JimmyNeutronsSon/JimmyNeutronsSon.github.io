importScripts("/scram/scramjet.all.js");

const { ScramjetServiceWorker } = $scramjetLoadWorker();
const scramjet = new ScramjetServiceWorker();

const BYPASS_HOSTS = [
	"vidking.net",
	"www.vidking.net",
	"videasy.net",
	"db.videasy.net",
	"api.videasy.net",
	"player.videasy.net",
	"users.videasy.net",
	"api.themoviedb.org",
	"image.tmdb.org",
];

const BYPASS_PATHS = [
	"/proxy",
	"/baremux",
	"/libcurl",
	"/scram",
];

async function handleRequest(event) {
	const url = new URL(event.request.url);

	if (BYPASS_HOSTS.some(h => url.hostname.includes(h))) {
		return fetch(event.request);
	}
	if (BYPASS_PATHS.some(p => url.pathname.startsWith(p))) {
		return fetch(event.request);
	}
	if (url.pathname.endsWith(".obj") || url.pathname.includes("3d-cloud.js")) {
		return fetch(event.request);
	}

	await scramjet.loadConfig();
	if (scramjet.route(event)) {
		return scramjet.fetch(event);
	}

	try {
		return await fetch(event.request);
	} catch (err) {
		console.error("SW fetch failure:", err, event.request.url);
		return new Response("Offline/Error", { status: 503 });
	}
}

self.addEventListener("fetch", (event) => {
	event.respondWith(handleRequest(event));
});