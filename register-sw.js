"use strict";
const stockSW = "./sw.js";

const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
  const path = window.location.pathname;
  if (!path.endsWith("/browse.html") && !path.endsWith("/movies.html")) {
    return;
  }

  if (!navigator.serviceWorker) {
    if (
      location.protocol !== "https:" &&
      !swAllowedHostnames.includes(location.hostname)
    )
      throw new Error("Service workers cannot be registered without https.");

    throw new Error("Your browser doesn't support service workers.");
  }

  await navigator.serviceWorker.register(stockSW);
}

// Expose globally for inline scripts
window.registerSW = registerSW;
