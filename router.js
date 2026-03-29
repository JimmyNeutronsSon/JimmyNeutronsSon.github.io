// Welkin SPA Router
(function () {
  const routes = {
    "/index.html": "/index.html",
    "/": "/index.html",
    "/browse.html": "/browse.html",
    "/games.html": "/games.html",
    "/movies.html": "/movies.html",
    "/retro-bowl.html": "/retro-bowl.html",
    "/Soundboard/Soundboard.html": "/Soundboard/Soundboard.html"
  };

  console.log('Router initialized with routes:', Object.keys(routes));
  let currentPage = null;

  async function loadPage(url, pushState = true) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const html = await response.text();
      
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Update document title
      document.title = doc.title;
      
      // Get the main content element from the fetched page.
      // Different pages have different structures, so we'll try to identify
      // the main content area.
      let mainContent;
      
      // For home page (index.html), we want the hero and footer
      if (url === '/index.html' || url === '/') {
        // Use the body's innerHTML but remove scripts we don't want
        mainContent = doc.body.innerHTML;
      } else {
        // For other pages, use body content
        mainContent = doc.body.innerHTML;
      }
      
      // Replace main content area
      const contentEl = document.getElementById('spa-content');
      if (contentEl) {
        // Clear and set new content
        contentEl.innerHTML = mainContent;
      }
      
      // Reinitialize page-specific features if needed
      if (url === '/browse.html' && typeof window.initBrowse === 'function') {
        window.initBrowse();
      } else if (url === '/games.html' && typeof window.initGames === 'function') {
        window.initGames();
      } else if (url === '/movies.html' && typeof window.initMovies === 'function') {
        window.initMovies();
      }
      
      // Close sidebar if open
      const sidebar = document.getElementById('glass-sidebar');
      const overlay = document.getElementById('sidebar-overlay');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
        if (overlay) overlay.classList.remove('open');
      }
      
      if (pushState) {
        history.pushState({ url }, '', url);
      }
      
      currentPage = url;
      console.log('Loaded page:', url);
    } catch (error) {
      console.error('Failed to load page:', error);
      window.location.href = url;
    }
  }

      // Get body content
      const bodyContent = doc.body.innerHTML;

      // Replace main content area
      const contentEl = document.getElementById("spa-content");
      if (contentEl) {
        contentEl.innerHTML = bodyContent;
      } else {
        document.body.innerHTML = bodyContent;
      }

      // Re-execute scripts from the loaded page (excluding persistent ones)
      const scripts = [];
      doc.body.querySelectorAll("script").forEach((script) => {
        if (script.src) {
          if (
            !script.src.includes("music.js") &&
            !script.src.includes("sidebar.js") &&
            !script.src.includes("main.js") &&
            !script.src.includes("3d-cloud.js") &&
            !script.src.includes("router.js")
          ) {
            scripts.push(script.src);
          }
        } else if (script.textContent.trim()) {
          scripts.push({ inline: script.textContent });
        }
      });

      scripts.forEach((src) => {
        if (typeof src === "string") {
          const script = document.createElement("script");
          script.src = src;
          document.body.appendChild(script);
        } else if (src.inline) {
          try {
            eval(src.inline);
          } catch (e) {
            console.error("Inline script error:", e);
          }
        }
      });

      // Append and execute scripts
      scripts.forEach((src) => {
        if (typeof src === "string") {
          const script = document.createElement("script");
          script.src = src;
          document.body.appendChild(script);
        } else if (src.inline) {
          try {
            eval(src.inline);
          } catch (e) {
            console.error("Inline script error:", e);
          }
        }
      });

      if (pushState) {
        history.pushState({ url }, "", url);
      }

      currentPage = url;

      // Close sidebar if open
      const sidebar = document.getElementById("glass-sidebar");
      const overlay = document.getElementById("sidebar-overlay");
      if (sidebar && sidebar.classList.contains("open")) {
        sidebar.classList.remove("open");
        if (overlay) overlay.classList.remove("open");
      }

      // Reinitialize sidebar if needed (it might have been removed)
      if (
        typeof window.initSidebar === "function" &&
        !document.getElementById("glass-sidebar")
      ) {
        window.initSidebar();
      }
    } catch (error) {
      console.error("Failed to load page:", error);
      window.location.href = url;
    }
  }

  function handleLinkClick(e) {
    const link = e.target.closest('a');
    if (!link) return;
    
    let href = link.getAttribute('href');
    console.log('Link clicked:', href);
    
    if (!href || href.startsWith('http') || link.getAttribute('target') === '_blank' || href.startsWith('#')) {
      return;
    }
    
    // Normalize to absolute path
    if (!href.startsWith('/')) {
      href = '/' + href;
    }
    
    console.log('Normalized href:', href, 'Routes match:', routes[href]);
    
    // Check if it's an internal page link
    if (routes[href]) {
      console.log('SPA navigating to:', href);
      e.preventDefault();
      if (window.saveMusicState) {
        window.saveMusicState();
      }
      loadPage(routes[href]);
    }
  }

    // Check if it's an internal page link
    if (routes[href]) {
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

  // Expose loadPage globally for sidebar etc
  window.loadPage = loadPage;
  window.SPA_ROUTES = routes;

  console.log("SPA Router initialized");
})();
