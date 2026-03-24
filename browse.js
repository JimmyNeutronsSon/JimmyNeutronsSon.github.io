"use strict";

const form = document.getElementById("sj-form");
const address = document.getElementById("sj-address");
const searchEngine = document.getElementById("sj-search-engine");
const error = document.getElementById("sj-error");
const emptyState = document.getElementById("empty-state");
const loadingBar = document.getElementById("loading-bar");

const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");
const btnReload = document.getElementById("btn-reload");

let activeFrame = null;

// Initialize Scramjet
const { ScramjetController } = $scramjetLoadController();
const scramjet = new ScramjetController({
    files: {
        wasm: "/scram/scramjet.wasm.wasm",
        all: "/scram/scramjet.all.js",
        sync: "/scram/scramjet.sync.js",
    },
});
scramjet.init();

// Initialize Bare-Mux
const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

// --- HELPER FUNCTIONS ---

async function registerSW() {
    if (!("serviceWorker" in navigator)) {
        throw new Error("Your browser does not support service workers.");
    }
    // Register the worker with the correct scope
    await navigator.serviceWorker.register("/sw.js", {
        scope: "/scramjet/",
    });
}

function showLoading() {
    loadingBar.style.opacity = '1';
    loadingBar.style.width = '20%';
    setTimeout(() => { loadingBar.style.width = '70%'; }, 300);
}

function hideLoading() {
    loadingBar.style.width = '100%';
    setTimeout(() => {
        loadingBar.style.opacity = '0';
        setTimeout(() => { loadingBar.style.width = '0%'; }, 200);
    }, 300);
}

// --- MAIN LOGIC ---

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    error.textContent = ""; // Clear previous errors

    try {
        showLoading();

        // 1. Ensure Service Worker is registered
        await registerSW();

        // 2. Configure Transport
        // NOTE: If localhost gives you 404s, use the public WISP server below for testing
        let wispUrl = (location.protocol === "https:" ? "wss" : "ws") + "://" + location.host + "/wisp/";

        // Uncomment the line below if you are testing locally without a WISP server running
        // wispUrl = "wss://wisp.mercurywork.shop/"; 

        if ((await connection.getTransport()) !== "/libcurl/index.mjs") {
            await connection.setTransport("/libcurl/index.mjs", [{
                wisp: wispUrl,
                wasm: "/libcurl/libcurl.wasm"
            }]);
        }

        // 3. Navigate
        const url = search(address.value, searchEngine.value);

        if (activeFrame) activeFrame.frame.remove();

        const frame = scramjet.createFrame();
        frame.frame.id = "sj-frame";
        frame.frame.style.display = "block";
        emptyState.style.display = "none";

        document.querySelector(".browser-content").appendChild(frame.frame);

        frame.go(url);
        activeFrame = frame;

        frame.frame.addEventListener("load", () => {
            hideLoading();
        });

    } catch (err) {
        hideLoading();
        console.error("Proxy Error:", err);
        error.textContent = "Error: " + err.message;
    }
});

// Navigation button logic...
btnBack.addEventListener("click", () => activeFrame?.frame.contentWindow.history.back());
btnForward.addEventListener("click", () => activeFrame?.frame.contentWindow.history.forward());
btnReload.addEventListener("click", () => activeFrame?.frame.contentWindow.location.reload());