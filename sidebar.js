window.initSidebar = function () {
  if (document.getElementById("glass-sidebar")) return;

  const sidebarCSS = `
    /* ═══════════════════════════════════════════════════════════════════
       WELKIN SIDEBAR — GLASS + SHADER STYLES
       ───────────────────────────────────────────────────────────────────
       QUICK TWEAKS:
         Sidebar transparency  → change --sb-bg-opacity (0=invisible, 1=solid)
         Blur strength         → change --sb-blur
         Border glow colour    → change --sb-border-color
         Link hover colour     → change --sb-link-hover
         Ripple colour         → change --sb-ripple-color
         Shimmer speed         → change --sb-shimmer-dur
       ═══════════════════════════════════════════════════════════════════ */

    /* ── DESIGN TOKENS ───────────────────────────────────────────────── */
    #glass-sidebar, .sidebar-trigger {
      --sb-bg-opacity:    0.18;                        /* panel transparency */
      --sb-blur:          28px;                        /* frosted glass blur */
      --sb-saturate:      1.5;                         /* colour saturation boost */
      --sb-border-color:  rgba(108, 180, 240, 0.22);   /* panel border */
      --sb-link-color:    #c5d8f0;                     /* default link text */
      --sb-link-hover:    #ffffff;                     /* hovered link text */
      --sb-ripple-color:  rgba(108, 180, 240, 0.30);   /* click ripple */
      --sb-shimmer-dur:   4s;                          /* header shimmer sweep */
      --sb-link-dur:      0.22s;                       /* link transition speed */
    }

    /* ── SIDEBAR TRIGGER (the ▶ tab on the left edge) ────────────────── */
    .sidebar-trigger {
      position: fixed !important;
      top: 50% !important;
      left: 0 !important;
      transform: translateY(-50%) !important;

      /* Liquid glass — stronger blur + subtle tint */
      background: rgba(255, 255, 255, calc(var(--sb-bg-opacity) + 0.06)) !important;
      backdrop-filter: blur(var(--sb-blur)) saturate(var(--sb-saturate));
      -webkit-backdrop-filter: blur(var(--sb-blur)) saturate(var(--sb-saturate));

      border: 1px solid var(--sb-border-color);
      border-left: none;
      border-radius: 0 14px 14px 0;
      width: 44px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2147483647 !important;
      color: #6cb4f0 !important;
      transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);

      /* Top-edge glass highlight line */
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.25),
        inset 0 -1px 0 rgba(255,255,255,0.08),
        0 4px 24px rgba(10,45,110,0.14);

      /* Liquid glass SVG filter applied below in JS */
      filter: url(#sb-liquid-filter);
      overflow: hidden;
    }

    .sidebar-trigger:hover {
      width: 52px;
      background: rgba(255, 255, 255, calc(var(--sb-bg-opacity) + 0.18)) !important;
      box-shadow:
        inset 0 1px 0 rgba(255,255,255,0.35),
        inset 0 -1px 0 rgba(255,255,255,0.10),
        0 6px 28px rgba(10,45,110,0.22),
        0 0 0 1px rgba(108,180,240,0.18);
    }

    /* Gradient sweep inside the trigger on hover */
    .sidebar-trigger::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(108,180,240,0.15) 0%, transparent 60%);
      border-radius: inherit;
      opacity: 0;
      transition: opacity 0.25s;
      pointer-events: none;
    }
    .sidebar-trigger:hover::after { opacity: 1; }

    /* ── GLASS PANEL ──────────────────────────────────────────────────── */
    .glass-sidebar {
      position: fixed !important;
      top: 0; left: -320px; bottom: 0; width: 280px;

      /* True glass: see-through with blur */
      background: rgba(8, 24, 62, var(--sb-bg-opacity, 0.18)) !important;
      backdrop-filter: blur(var(--sb-blur)) saturate(var(--sb-saturate));
      -webkit-backdrop-filter: blur(var(--sb-blur)) saturate(var(--sb-saturate));

      /* Gradient border using a layered shadow trick */
      border-right: 1px solid var(--sb-border-color);

      /* Inset top highlight — gives the "glass edge" look */
      box-shadow:
        inset 1px 0 0 rgba(255,255,255,0.07),
        inset 0 1px 0 rgba(255,255,255,0.10);

      z-index: 2147483647 !important;
      transition: left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.4s;
      display: flex; flex-direction: column !important;
      font-family: 'Inter', sans-serif;
      overflow-y: auto; overflow-x: hidden;
    }

    .glass-sidebar.open {
      left: 0;
      box-shadow:
        inset 1px 0 0 rgba(255,255,255,0.07),
        inset 0 1px 0 rgba(255,255,255,0.10),
        16px 0 64px rgba(6, 18, 52, 0.55),
        0 0 0 1px rgba(108,180,240,0.08);
    }

    /* ── HEADER — shimmer sweep ───────────────────────────────────────── */
    .sidebar-header {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      /* Separator line with gradient fade */
      border-bottom: 1px solid rgba(108, 180, 240, 0.15);
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
    }

    /* Shimmer sweep across the header periodically.
       Duration: --sb-shimmer-dur  (set to 0s to disable) */
    .sidebar-header::after {
      content: '';
      position: absolute;
      top: 0; left: -80%; width: 50%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(108,180,240,0.10), transparent);
      animation: sbHeaderShimmer var(--sb-shimmer-dur, 4s) ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes sbHeaderShimmer {
      0%, 100% { left: -80%; opacity: 0; }
      40%       { opacity: 1; }
      60%       { left: 130%; opacity: 0; }
    }

    /* Logo */
    .sidebar-header .logo {
      font-size: 28px; font-weight: 800; letter-spacing: -1px;
      color: #e8f2ff;
      text-decoration: none; display: flex; align-items: baseline;
      text-shadow: 0 0 20px rgba(108,180,240,0.4);
    }
    .sidebar-header .logo-square {
      display: inline-block; width: 8px; height: 8px;
      background: linear-gradient(135deg, #3A8FE0, #6CB4F0);
      border-radius: 2px;
      margin-left: 3px;
      box-shadow: 0 0 8px rgba(108,180,240,0.6);
    }

    /* Close button */
    .sidebar-close {
      background: transparent; border: none;
      font-size: 22px; color: rgba(108,180,240,0.6);
      cursor: pointer; outline: none;
      transition: color 0.15s, transform 0.15s;
      border-radius: 6px; padding: 2px 6px;
    }
    .sidebar-close:hover {
      color: #fff;
      transform: rotate(90deg);
      background: rgba(108,180,240,0.08);
    }

    /* ── NAV LINKS ────────────────────────────────────────────────────── */
    .sidebar-nav {
      padding: 24px 12px;
      display: flex; flex-direction: column; gap: 4px;
      flex: 1; overflow-y: auto;
    }

    .sidebar-link {
      display: flex;
      align-items: center;
      padding: 15px 14px;
      text-decoration: none;
      color: var(--sb-link-color, #c5d8f0);
      font-weight: 500;
      font-size: 15px;
      border-radius: 10px;
      transition: all var(--sb-link-dur, 0.22s) cubic-bezier(0.4,0,0.2,1);
      position: relative;
      overflow: hidden;
      /* Gradient sweep background (hidden by default) */
      background: linear-gradient(90deg,
        rgba(58,143,224,0.12) 0%,
        rgba(108,180,240,0.06) 50%,
        transparent 100%);
      background-size: 200% 100%;
      background-position: 100% 0;   /* shifted off-screen right */
    }

    /* Reveal gradient on hover by sliding it in from the right */
    .sidebar-link:hover {
      color: var(--sb-link-hover, #ffffff);
      background-position: 0% 0;
      text-shadow: 0 0 12px rgba(108,180,240,0.4);
      transform: translateX(3px);
      /* Left-edge accent bar appears on hover */
      box-shadow: inset 2px 0 0 rgba(108,180,240,0.5);
    }

    /* Active (current page) link */
    .sidebar-link.active {
      color: #ffffff;
      background: rgba(58,143,224,0.18);
      background-size: 100% 100%;
      box-shadow:
        inset 2px 0 0 #3A8FE0,
        inset 0 1px 0 rgba(255,255,255,0.06);
    }

    /* Ripple on click */
    .sidebar-link .sb-ripple {
      position: absolute; border-radius: 50%; pointer-events: none;
      background: radial-gradient(circle, var(--sb-ripple-color, rgba(108,180,240,0.30)) 0%, transparent 70%);
      transform: scale(0);
      animation: sbRipple 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
    }
    @keyframes sbRipple {
      to { transform: scale(5); opacity: 0; }
    }

    /* ── OVERLAY ──────────────────────────────────────────────────────── */
    .sidebar-overlay {
      position: fixed !important; inset: 0;
      /* Match the aurora blur style in chat.html */
      background: rgba(6, 14, 38, 0.30) !important;
      backdrop-filter: blur(10px) brightness(0.8);
      -webkit-backdrop-filter: blur(10px) brightness(0.8);
      z-index: 2147483646 !important;
      opacity: 0; pointer-events: none;
      transition: opacity 0.35s ease;
    }
    .sidebar-overlay.open { opacity: 1; pointer-events: auto; }

    /* ── RESPONSIVE ───────────────────────────────────────────────────── */
    @media (max-width: 1199px) and (min-width: 768px) {
      .glass-sidebar { width: 240px; left: -260px; }
      .glass-sidebar.open { left: 0; }
      .sidebar-trigger { width: 38px; height: 52px; }
      .sidebar-trigger:hover { width: 44px; }
      .sidebar-header { padding: 20px; flex-shrink: 0; }
      .sidebar-header .logo { font-size: 24px; }
      .sidebar-header .logo-square { width: 7px; height: 7px; }
      .sidebar-close { font-size: 20px; }
      .sidebar-nav { padding: 20px 10px; gap: 3px; flex: 1; overflow-y: auto; }
      .sidebar-link { padding: 10px 12px; font-size: 14px; border-radius: 9px; }
    }

    @media (max-width: 767px) {
      .glass-sidebar { width: 85%; max-width: 300px; left: -85%; padding-bottom: 20px; }
      .glass-sidebar.open { left: 0; }
      .sidebar-trigger { width: 32px; height: 44px; border-radius: 0 10px 10px 0; }
      .sidebar-trigger:hover { width: 38px; }
      .sidebar-trigger svg { width: 18px !important; height: 18px !important; }
      .sidebar-header { padding: 16px; flex-shrink: 0; }
      .sidebar-header .logo { font-size: 22px; }
      .sidebar-header .logo-square { width: 6px; height: 6px; }
      .sidebar-close { font-size: 20px; }
      .sidebar-nav { padding: 16px 10px; gap: 3px; flex: 1; overflow-y: auto; }
      .sidebar-link { padding: 9px 12px; font-size: 14px; border-radius: 8px; }
    }
  `;

  const style = document.createElement("style");
  style.textContent = sidebarCSS;
  document.head.appendChild(style);

  const sidebarHTML = `
    <div id="sidebar-trigger" class="sidebar-trigger">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:24px;height:24px;">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    </div>
    <aside id="glass-sidebar" class="glass-sidebar">
      <div class="sidebar-header">
        <a href="/home.html" class="logo">Welkin<span class="logo-square"></span></a>
        <button id="sidebar-close" class="sidebar-close">&times;</button>
      </div>
      <nav class="sidebar-nav">
        <a href="/home.html" class="sidebar-link">Home</a>
        <a href="/browse.html" class="sidebar-link">Browse</a>
        <a href="/games_dashboard.html" class="sidebar-link">Games</a>
        <a href="/memusic-webplayer/dist/" class="sidebar-link" id="music-toggle">Music</a>
        <a href="/chat.html" class="sidebar-link">Chat</a>
        <a href="/Soundboard/Soundboard.html" class="sidebar-link">Soundboard</a>
        <a href="#" class="sidebar-link" id="yt-toggle">YouTube</a>
        <a href="/retro-bowl.html" class="sidebar-link">Retro Bowl</a>
        <a href="/movies.html" class="sidebar-link">Movies</a>
        <a href="/hacks.html" class="sidebar-link">Hacks</a>
        <a href="/mog.html" class="sidebar-link">MOG</a>
      </nav>
    </aside>
    <div id="sidebar-overlay" class="sidebar-overlay"></div>
  `;

  document.documentElement.insertAdjacentHTML("beforeend", sidebarHTML);

  const sidebar = document.getElementById("glass-sidebar");
  const trigger = document.getElementById("sidebar-trigger");
  const closeBtn = document.getElementById("sidebar-close");
  const overlay = document.getElementById("sidebar-overlay");

  const closeSidebar = () => {
    sidebar.classList.remove("open");
    overlay.classList.remove("open");
  };
  window.closeSidebar = closeSidebar;

  trigger.addEventListener("click", () => {
    sidebar.classList.add("open");
    overlay.classList.add("open");
  });
  closeBtn.addEventListener("click", closeSidebar);
  overlay.addEventListener("click", closeSidebar);

  const discoveryToggle = document.getElementById("discovery-toggle");
  if (discoveryToggle) {
    discoveryToggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.toggleDiscovery) window.toggleDiscovery();
      closeSidebar();
    });
  }
  const musicToggle = document.getElementById("music-toggle");
  if (musicToggle)
    musicToggle.addEventListener("click", () => {
      closeSidebar();
    });
  const ytToggle = document.getElementById("yt-toggle");
  if (ytToggle) {
    ytToggle.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.toggleYouTube) window.toggleYouTube();
      closeSidebar();
    });
  }

  // ── Alt+Q Shortcut for ClassLink ──────────────────────────────────────────
  document.addEventListener("keydown", (e) => {
    if (e.altKey && (e.key === "q" || e.key === "Q")) {
      e.preventDefault();
      window.top.location.replace("https://myapps.classlink.com/home");
    }
  });

  // ── SVG LIQUID GLASS FILTER for the trigger button ────────────────────────
  // Creates an feTurbulence + feDisplacementMap filter that gives the trigger
  // a subtle lens-distortion / liquid glass warp effect.
  // To remove: delete the filter() call from .sidebar-trigger in the CSS above.
  (function injectLiquidFilter() {
    if (document.getElementById("sb-liquid-svg")) return;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.id = "sb-liquid-svg";
    svg.setAttribute("style", "position:absolute;width:0;height:0;overflow:hidden");
    svg.innerHTML = `
      <defs>
        <filter id="sb-liquid-filter" x="-20%" y="-20%" width="140%" height="140%"
                color-interpolation-filters="linearRGB">
          <!-- feTurbulence generates the wavy noise field -->
          <!-- baseFrequency: lower = smoother waves. numOctaves: more = more detail -->
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.025"
            numOctaves="3"
            seed="7"
            result="noise">
            <!-- Animates the seed so the distortion slowly shifts over time -->
            <animate attributeName="seed" from="0" to="100" dur="18s" repeatCount="indefinite"/>
          </feTurbulence>
          <!-- feDisplacementMap uses the noise to displace pixels -->
          <!-- scale: how strong the distortion is. Raise for more warp. -->
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="6"
            xChannelSelector="R"
            yChannelSelector="G"
            result="distorted"/>
          <!-- feComposite clips the result back to the element shape -->
          <feComposite in="distorted" in2="SourceGraphic" operator="in"/>
        </filter>
      </defs>`;
    document.body.appendChild(svg);
  })();

  // ── ACTIVE LINK HIGHLIGHT ─────────────────────────────────────────────────
  // Marks the link that matches the current page with the .active class
  // so it gets the left-edge accent bar from the CSS above.
  (function markActiveLink() {
    const path = window.location.pathname;
    document.querySelectorAll(".sidebar-link").forEach((link) => {
      const href = link.getAttribute("href") || "";
      // Match if the href ends with the same filename as the current path,
      // or if it's the home link and we're at the root
      const isHome = (href.includes("home.html") || href === "/") &&
        (path === "/" || path.endsWith("home.html"));
      const isMatch = !isHome && href !== "#" && href !== "/" && path.endsWith(href.replace(/^\//, ""));
      if (isHome || isMatch) link.classList.add("active");
    });
  })();

  // ── RIPPLE EFFECT on link clicks ─────────────────────────────────────────
  // Adds a radial wave at the click position when any sidebar link is clicked.
  // Colour controlled by --sb-ripple-color CSS variable above.
  document.getElementById("glass-sidebar").addEventListener("click", (e) => {
    const link = e.target.closest(".sidebar-link");
    if (!link) return;
    const rect = link.getBoundingClientRect();
    const r = document.createElement("span");
    r.className = "sb-ripple";
    const size = Math.max(rect.width, rect.height);
    r.style.cssText = [
      `width:${size}px`,
      `height:${size}px`,
      `left:${e.clientX - rect.left - size / 2}px`,
      `top:${e.clientY - rect.top - size / 2}px`,
    ].join(";");
    link.appendChild(r);
    r.addEventListener("animationend", () => r.remove());
  });

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", window.initSidebar);
  } else {
    window.initSidebar();
  }
}

  // ── Online counter: single socket, every page ────────────────────────────────
  // One socket per page for the visitor counter. chat.html reuses this socket
  // (window._welkinCounterSocket) for its counter so it never opens a second
  // connection just for the count. The authenticated chat socket is separate.
  (function () {
    function updateCounter(data) {
      const el = document.getElementById("online-counter");
      if (el) {
        const count = typeof data === "object" ? data.count : data;
        el.textContent = "Currently Online: " + count;
        const tooltip = document.getElementById("online-tooltip");
        if (tooltip && typeof data === "object") {
          tooltip.textContent =
            data.members && data.members.length > 0
              ? "In chat: " + data.members.join(", ")
              : "No one in chat";
        }
      }
    }

    // ── Sitewide notification toast ──
    function showSitewideToast(msg) {
      let toast = document.getElementById("welkin-notif-toast");
      if (!toast) {
        const css = document.createElement("style");
        css.textContent = `
        #welkin-notif-toast {
          position: fixed; bottom: 24px; right: 24px; z-index: 2147483647;
          background: linear-gradient(135deg, #1E6CC7, #3A8FE0);
          color: #fff; padding: 12px 20px; border-radius: 12px;
          font-family: 'Outfit','Inter',sans-serif; font-weight: 600; font-size: 14px;
          box-shadow: 0 8px 32px rgba(10,45,110,.35);
          opacity: 0; transform: translateY(12px); transition: all .3s ease;
          pointer-events: none; max-width: 320px; cursor: pointer;
        }
        #welkin-notif-toast.show { opacity: 1; transform: translateY(0); pointer-events: auto; }
      `;
        document.head.appendChild(css);
        toast = document.createElement("div");
        toast.id = "welkin-notif-toast";
        document.body.appendChild(toast);
        toast.addEventListener("click", () => {
          window.location.href = "/chat.html";
        });
      }
      toast.textContent = msg;
      toast.classList.add("show");
      clearTimeout(toast._timer);
      toast._timer = setTimeout(() => toast.classList.remove("show"), 5000);
    }

    // ── Notification sound ──
    let notifAudio = null;
    function playSitewideNotif() {
      const isMuted = localStorage.getItem("welkin-notif-muted") === "true";
      if (isMuted) return;
      try {
        if (!notifAudio)
          notifAudio = new Audio("/dragon-studio-new-notification-3-398649.mp3");
        notifAudio.volume = 0.5;
        notifAudio.currentTime = 0;
        notifAudio.play().catch(() => { });
      } catch (e) { }
    }

    // ── Unread title badge ──
    let _swUnread = 0;
    const _origSiteTitle = document.title;
    function bumpSitewideUnread(msg) {
      _swUnread++;
      document.title = "(" + _swUnread + ") " + _origSiteTitle;
      playSitewideNotif();
      showSitewideToast(msg);
    }
    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        _swUnread = 0;
        document.title = _origSiteTitle;
      }
    });

    function connectCounter() {
      if (typeof io === "undefined") {
        setTimeout(connectCounter, 200);
        return;
      }

      const isChat =
        window.location.pathname.endsWith("/chat.html") ||
        window.location.pathname.endsWith("/chat");

      if (isChat) {
        // chat.html opens its own authenticated socket.
        // We hook into it once it's ready via the callback below.
        // chat.html must call window._welkinCounterReady(socket) after connectSocket().
        window._welkinCounterReady = function (sock) {
          sock.on("online-count", updateCounter);
        };
        return;
      }

      const socket = io(window.location.origin, { path: "/socket.io/" });
      window._welkinCounterSocket = socket;

      socket.on("online-count", updateCounter);
      socket.on("disconnect", () => updateCounter("—"));

      // ── Sitewide notifications for non-chat pages ──
      const chatToken = localStorage.getItem("welkin-chat-token");
      if (chatToken) {
        socket.on("connect", () => {
          socket.emit("notif:subscribe", { token: chatToken });
        });

        function updateChatBadge() {
          const chatLinks = document.querySelectorAll(
            '.sidebar-link[href="/chat.html"], .sidebar-link[href="/chat"]',
          );
          chatLinks.forEach((link) => {
            let dot = link.querySelector(".chat-unread-dot");
            if (!dot) {
              dot = document.createElement("span");
              dot.className = "chat-unread-dot";
              dot.style.cssText =
                "display:inline-block; width:8px; height:8px; background-color:#f04747; border-radius:50%; margin-left:8px; box-shadow:0 0 8px rgba(240,71,71,0.6);";
              link.appendChild(dot);
            }
          });
        }

        socket.on("dm:message", (msg) => {
          const myName = localStorage.getItem("welkin-chat-name");
          if (msg.from !== myName) {
            bumpSitewideUnread("📩 DM from " + msg.from);
            updateChatBadge();
          }
        });

        socket.on("friends:request", ({ from }) => {
          bumpSitewideUnread("👋 Friend request from " + from);
          updateChatBadge();
        });

        socket.on("friends:accepted", ({ from }) => {
          bumpSitewideUnread("✅ " + from + " accepted your request!");
          updateChatBadge();
        });

        socket.on("call:incoming", ({ from }) => {
          bumpSitewideUnread("📞 Incoming call from " + from);
          updateChatBadge();
        });

        socket.on("gc:message", (msg) => {
          const myName = localStorage.getItem("welkin-chat-name");
          if (msg.name !== myName) {
            bumpSitewideUnread("💬 " + msg.name + " in group chat");
            updateChatBadge();
          }
        });
      }
    }

    if (
      typeof io === "undefined" &&
      !document.querySelector('script[src*="socket.io"]')
    ) {
      const s = document.createElement("script");
      s.src = "https://cdn.socket.io/4.7.5/socket.io.min.js";
      s.onload = connectCounter;
      document.head.appendChild(s);
    } else {
      connectCounter();
    }
  })();