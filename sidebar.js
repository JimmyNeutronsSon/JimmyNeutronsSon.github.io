window.initSidebar = function () {
  if (document.getElementById("glass-sidebar")) return;

  const sidebarCSS = `
    .sidebar-trigger {
      position: fixed !important;
      top: 50% !important;
      left: 0 !important;
      transform: translateY(-50%) !important;
      background: rgba(255, 255, 255, 0.2) !important;
      backdrop-filter: blur(24px);
      -webkit-backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-left: none;
      border-radius: 0 16px 16px 0;
      width: 44px;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      z-index: 2147483647 !important;
      box-shadow: 0 4px 24px rgba(10, 45, 110, 0.08) !important;
      color: #1E6CC7 !important;
      transition: all 0.3s ease;
    }
    .sidebar-trigger:hover { background: rgba(255,255,255,0.4) !important; width: 50px; }
    .glass-sidebar {
      position: fixed !important; top: 0; left: -320px; bottom: 0; width: 280px;
      background: rgba(255,255,255,0.2) !important;
      backdrop-filter: blur(32px); -webkit-backdrop-filter: blur(32px);
      border-right: 1px solid rgba(255,255,255,0.4);
      z-index: 2147483647 !important;
      transition: left 0.4s cubic-bezier(0.2,0.8,0.2,1);
      display: flex; flex-direction: column !important;
      font-family: 'Inter', sans-serif; overflow-y: auto; overflow-x: hidden;
    }
    .glass-sidebar.open { left: 0; box-shadow: 16px 0 48px rgba(10,45,110,0.2) !important; }
    .sidebar-header {
      padding: 24px; display: flex; justify-content: space-between; align-items: center;
      border-bottom: 1px solid rgba(255,255,255,0.3); flex-shrink: 0;
    }
    .sidebar-header .logo {
      font-size: 28px; font-weight: 800; letter-spacing: -1px; color: #0B1E3D;
      text-decoration: none; display: flex; align-items: baseline;
    }
    .sidebar-header .logo-square {
      display: inline-block; width: 8px; height: 8px; background-color: #3A8FE0; margin-left: 2px;
    }
    .sidebar-close { background: transparent; border: none; font-size: 28px; color: #8FA4C2; cursor: pointer; outline: none; }
    .sidebar-nav { padding: 32px 16px; display: flex; flex-direction: column; gap: 20px; flex: 1; overflow-y: auto; }
    .sidebar-link {
      display: flex; align-items: center; padding: 14px 16px; text-decoration: none;
      color: #163A6B; font-weight: 600; font-size: 16px; border-radius: 12px; transition: all 0.2s;
    }
    .sidebar-link:hover { background: rgba(255,255,255,0.3); color: #1E6CC7; transform: translateX(4px); }
    .sidebar-overlay {
      position: fixed !important; inset: 0; background: rgba(11,30,61,0.2) !important;
      backdrop-filter: blur(8px); z-index: 2147483646 !important;
      opacity: 0; pointer-events: none; transition: opacity 0.4s ease;
    }
    .sidebar-overlay.open { opacity: 1; pointer-events: auto; }
    @media (max-width: 1199px) and (min-width: 768px) {
      .glass-sidebar { width: 240px; left: -260px; }
      .glass-sidebar.open { left: 0; }
      .sidebar-trigger { width: 38px; height: 52px; }
      .sidebar-trigger:hover { width: 42px; }
      .sidebar-header { padding: 20px; flex-shrink: 0; }
      .sidebar-header .logo { font-size: 24px; }
      .sidebar-header .logo-square { width: 7px; height: 7px; }
      .sidebar-close { font-size: 24px; }
      .sidebar-nav { padding: 24px 14px; gap: 16px; flex: 1; overflow-y: auto; }
      .sidebar-link { padding: 12px 14px; font-size: 15px; border-radius: 10px; }
    }
    @media (max-width: 767px) {
      .glass-sidebar { width: 85%; max-width: 300px; left: -85%; padding-bottom: 20px; }
      .glass-sidebar.open { left: 0; }
      .sidebar-trigger { width: 32px; height: 44px; border-radius: 0 10px 10px 0; }
      .sidebar-trigger:hover { width: 36px; }
      .sidebar-trigger svg { width: 18px !important; height: 18px !important; }
      .sidebar-header { padding: 16px; flex-shrink: 0; }
      .sidebar-header .logo { font-size: 22px; }
      .sidebar-header .logo-square { width: 6px; height: 6px; }
      .sidebar-close { font-size: 22px; }
      .sidebar-nav { padding: 20px 12px; gap: 12px; flex: 1; overflow-y: auto; }
      .sidebar-link { padding: 10px 12px; font-size: 14px; border-radius: 8px; }
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
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", window.initSidebar);
} else {
  window.initSidebar();
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
