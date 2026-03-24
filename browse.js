"use strict";

const form = document.getElementById("sj-form");
const address = document.getElementById("sj-address");
const searchEngine = document.getElementById("sj-search-engine");
const error = document.getElementById("sj-error");
const errorCode = document.getElementById("sj-error-code");
const emptyState = document.getElementById("empty-state");
const loadingBar = document.getElementById("loading-bar");

const btnBack = document.getElementById("btn-back");
const btnForward = document.getElementById("btn-forward");
const btnReload = document.getElementById("btn-reload");

let activeFrame = null;

const { ScramjetController } = $scramjetLoadController();

const scramjet = new ScramjetController({
    files: {
        wasm: "/scram/scramjet.wasm.wasm",
        all: "/scram/scramjet.all.js",
        sync: "/scram/scramjet.sync.js",
    },
});

scramjet.init();

const connection = new BareMux.BareMuxConnection("/baremux/worker.js");

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

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    error.textContent = "";
    errorCode.textContent = "";

    try {
        await registerSW();
    } catch (err) {
        error.textContent = "Failed to register service worker.";
        errorCode.textContent = err.toString();
        throw err;
    }

    const url = search(address.value, searchEngine.value);

    let wispUrl =
        (location.protocol === "https:" ? "wss" : "ws") +
        "://" +
        location.host +
        "/wisp/";

    if ((await connection.getTransport()) !== "/libcurl/index.mjs") {
        await connection.setTransport("/libcurl/index.mjs", [{
            wisp: wispUrl,
            wasm: "/libcurl/libcurl.wasm" // Make sure this path points exactly to your libcurl.wasm file
        }]);
    }

    showLoading();

    if (activeFrame) {
        activeFrame.frame.remove();
    }

    const frame = scramjet.createFrame();
    frame.frame.id = "sj-frame";
    frame.frame.style.display = "block";
    emptyState.style.display = "none";

    document.querySelector(".browser-content").appendChild(frame.frame);
    frame.go(url);
    activeFrame = frame;

    frame.frame.addEventListener("load", () => {
        hideLoading();
        try {
            // Update address bar if possible
            const frameUrl = activeFrame.frame.contentWindow.location.href;
            if (frameUrl && frameUrl !== 'about:blank') {
                const decoded = scramjet.decodeUrl(frameUrl);
                if (decoded) address.value = decoded;
            }
        } catch (e) { }
    });
});

btnBack.addEventListener("click", () => {
    if (activeFrame && activeFrame.frame.contentWindow) {
        showLoading();
        activeFrame.frame.contentWindow.history.back();
    }
});

btnForward.addEventListener("click", () => {
    if (activeFrame && activeFrame.frame.contentWindow) {
        showLoading();
        activeFrame.frame.contentWindow.history.forward();
    }
});

btnReload.addEventListener("click", () => {
    if (activeFrame && activeFrame.frame.contentWindow) {
        showLoading();
        activeFrame.frame.contentWindow.location.reload();
    }
});
