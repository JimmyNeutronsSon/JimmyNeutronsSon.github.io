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

const tabsBar = document.getElementById("tabs-bar");
const btnNewTab = document.getElementById("btn-new-tab");

let tabs = [];
let activeTabId = null;

window.loadUrlInProxy = function(urlText) {
    address.value = urlText;
    form.dispatchEvent(new Event("submit", { cancelable: true }));
};

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

    let tab;
    if (!activeTabId) {
        tab = createTab();
    } else {
        tab = tabs.find(t => t.id === activeTabId);
        if (tab.frame) {
            tab.frame.frame.remove();
        }
    }

    const frame = scramjet.createFrame();
    frame.frame.id = "sj-frame-" + tab.id;
    frame.frame.classList.add("sj-frame");
    frame.frame.style.display = "block";
    emptyState.style.display = "none";

    document.querySelector(".browser-content").appendChild(frame.frame);
    frame.go(url);
    tab.frame = frame;
    tab.url = url;
    updateTabTitle(tab.id, "Loading...");

    frame.frame.addEventListener("load", () => {
        hideLoading();
        try {
            // Update address bar if possible
            const frameUrl = tab.frame.frame.contentWindow.location.href;
            if (frameUrl && frameUrl !== 'about:blank') {
                const decoded = scramjet.decodeUrl(frameUrl);
                if (decoded) {
                    address.value = decoded;
                    tab.url = decoded;
                }
            }
            updateTabTitle(tab.id, tab.frame.frame.contentWindow.document.title || tab.url);
        } catch (e) { 
            updateTabTitle(tab.id, tab.url);
        }
    });
});

function createTab() {
    const id = Date.now().toString();
    const tab = { id, title: "New Tab", frame: null, url: "" };
    tabs.push(tab);
    
    const tabEl = document.createElement("div");
    tabEl.className = "browser-tab";
    tabEl.id = "tab-" + id;
    tabEl.innerHTML = `
        <div class="tab-title">New Tab</div>
        <button class="tab-close">&times;</button>
    `;
    
    tabEl.onclick = (e) => {
        if (!e.target.classList.contains("tab-close")) {
            switchTab(id);
        }
    };
    
    tabEl.querySelector(".tab-close").onclick = (e) => {
        e.stopPropagation();
        closeTab(id);
    };
    
    tabsBar.insertBefore(tabEl, btnNewTab);
    switchTab(id);
    return tab;
}

function switchTab(id) {
    activeTabId = id;
    
    document.querySelectorAll(".browser-tab").forEach(t => t.classList.remove("active"));
    const activeTabEl = document.getElementById("tab-" + id);
    if (activeTabEl) activeTabEl.classList.add("active");
    
    const tab = tabs.find(t => t.id === id);
    
    // Hide all frames
    tabs.forEach(t => {
        if (t.frame) t.frame.frame.style.display = "none";
    });
    
    if (tab && tab.frame) {
        tab.frame.frame.style.display = "block";
        emptyState.style.display = "none";
        address.value = tab.url;
    } else {
        emptyState.style.display = "flex";
        address.value = "";
    }
}

function closeTab(id) {
    const tabIndex = tabs.findIndex(t => t.id === id);
    if (tabIndex === -1) return;
    
    const tab = tabs[tabIndex];
    if (tab.frame) tab.frame.frame.remove();
    
    document.getElementById("tab-" + id)?.remove();
    tabs.splice(tabIndex, 1);
    
    if (tabs.length === 0) {
        activeTabId = null;
        emptyState.style.display = "flex";
        address.value = "";
    } else if (activeTabId === id) {
        const nextTab = tabs[Math.max(0, tabIndex - 1)];
        switchTab(nextTab.id);
    }
}

function updateTabTitle(id, title) {
    const tab = tabs.find(t => t.id === id);
    if (tab) {
        tab.title = title || "New Tab";
        const tabEl = document.getElementById("tab-" + id);
        if (tabEl) {
            tabEl.querySelector(".tab-title").textContent = tab.title;
        }
    }
}

btnNewTab.addEventListener("click", () => {
    createTab();
});

// Initialize with one tab
document.addEventListener("DOMContentLoaded", () => {
    createTab();
});

btnBack.addEventListener("click", () => {
    const tab = tabs.find(t => t.id === activeTabId);
    if (tab && tab.frame && tab.frame.frame.contentWindow) {
        showLoading();
        tab.frame.frame.contentWindow.history.back();
    }
});

btnForward.addEventListener("click", () => {
    const tab = tabs.find(t => t.id === activeTabId);
    if (tab && tab.frame && tab.frame.frame.contentWindow) {
        showLoading();
        tab.frame.frame.contentWindow.history.forward();
    }
});

btnReload.addEventListener("click", () => {
    const tab = tabs.find(t => t.id === activeTabId);
    if (tab && tab.frame && tab.frame.frame.contentWindow) {
        showLoading();
        tab.frame.frame.contentWindow.location.reload();
    }
});