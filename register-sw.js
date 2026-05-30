"use strict";
const stockSW = "./sw.js";

const swAllowedHostnames = ["localhost", "127.0.0.1"];

async function registerSW() {
  const path = window.location.pathname;
  if (!path.endsWith("/browse.html") && !path.endsWith("/movies.html") && !path.endsWith("/mog.html")) {
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
  await navigator.serviceWorker.ready;
  if (!navigator.serviceWorker.controller) {
    await new Promise(resolve => {
      navigator.serviceWorker.addEventListener("controllerchange", resolve, { once: true });
    });
  }
}

// Expose globally for inline scripts
window.registerSW = registerSW;
