// Welkin SPA Router
(function () {
  const routes = {
    "/index.html": "/index.html",
    "/": "/index.html",
    "/browse.html": "/browse.html",
    "/games.html": "/games.html",
    "/movies.html": "/movies.html",
    "/retro-bowl.html": "/retro-bowl.html",
    "/Soundboard/Soundboard.html": "/Soundboard/Soundboard.html",
  };

  console.log("Router initialized with routes:", Object.keys(routes));
  let currentPage = null;

  async function loadPage(url, pushState = true) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();

      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Update document title
      document.title = doc.title;

      // Get body content
      const bodyContent = doc.body.innerHTML;

      // Replace main content area
      const contentEl = document.getElementById("spa-content");
      if (contentEl) {
        contentEl.innerHTML = bodyContent;
      } else {
        document.body.innerHTML = bodyContent;
      }

      // Close sidebar if open
      const sidebar = document.getElementById("glass-sidebar");
      const overlay = document.getElementById("sidebar-overlay");
      if (sidebar && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        if (overlay) overlay.classList.remove("open");
      }

      if (pushState) {
        history.pushState({ url }, "", url);
      }

      currentPage = url;
      console.log("Loaded page:", url);
    } catch (error) {
      console.error("Failed to load page:", error);
      window.location.href = url;
    }
  }

  function handleLinkClick(e) {
    const link = e.target.closest("a");
    if (!link) return;

    let href = link.getAttribute("href");
    console.log("Link clicked:", href);

    if (
      !href ||
      href.startsWith("http") ||
      link.getAttribute("target") === "_blank" ||
      href.startsWith("#")
    ) {
      return;
    }

    // Normalize to absolute path
    if (!href.startsWith("/")) {
      href = "/" + href;
    }

    console.log("Normalized href:", href, "Routes match:", routes[href]);

    // Check if it's an internal page link
    if (routes[href]) {
      console.log("SPA navigating to:", href);
      e.preventDefault();
      if (window.saveMusicState) {
        window.saveMusicState();
      }
      loadPage(routes[href]);
    }
  }

  function handlePopState(e) {
    if (e.state && e.state.url) {
      loadPage(e.state.url, false);
    }
  }

  // Initialize
  document.addEventListener("click", handleLinkClick);
  window.addEventListener("popstate", handlePopState);

  // Expose loadPage globally
  window.loadPage = loadPage;
  window.SPA_ROUTES = routes;

  console.log("SPA Router initialized");
})();
