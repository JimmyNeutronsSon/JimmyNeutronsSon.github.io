window.initSidebar = function () {
  if (document.getElementById('glass-sidebar')) return;

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
    .sidebar-trigger:hover {
      background: rgba(255, 255, 255, 0.4) !important;
      width: 50px;
    }
    .glass-sidebar {
      position: fixed !important;
      top: 0;
      left: -320px;
      bottom: 0;
      width: 280px;
      background: rgba(255, 255, 255, 0.2) !important;
      backdrop-filter: blur(32px);
      -webkit-backdrop-filter: blur(32px);
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      z-index: 2147483647 !important;
      transition: left 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      display: flex;
      flex-direction: column !important;
      font-family: 'Inter', sans-serif;
    }
    .glass-sidebar.open {
      left: 0;
      box-shadow: 16px 0 48px rgba(10, 45, 110, 0.2) !important;
    }
    .sidebar-header {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.3);
    }
    /* Updated Title Font per Image */
    .sidebar-header .logo {
      font-size: 28px;
      font-weight: 800; /* Extra Bold */
      letter-spacing: -1px; /* Tighter tracking like image */
      color: #0B1E3D;
      text-decoration: none;
      display: flex;
      align-items: baseline;
    }
    /* Blue Square instead of Dot */
    .sidebar-header .logo-square {
      display: inline-block;
      width: 8px;
      height: 8px;
      background-color: #3A8FE0;
      margin-left: 2px;
    }
    .sidebar-close {
      background: transparent;
      border: none;
      font-size: 28px;
      color: #8FA4C2;
      cursor: pointer;
      outline: none;
    }
    .sidebar-nav {
      padding: 32px 16px;
      display: flex;
      flex-direction: column;
      gap: 20px; /* Large spacing preserved */
    }
    .sidebar-link {
      display: flex;
      align-items: center;
      padding: 14px 16px;
      text-decoration: none;
      color: #163A6B;
      font-weight: 600;
      font-size: 16px;
      border-radius: 12px;
      transition: all 0.2s;
    }
    .sidebar-link:hover {
      background: rgba(255, 255, 255, 0.3);
      color: #1E6CC7;
      transform: translateX(4px);
    }
    .sidebar-overlay {
      position: fixed !important;
      inset: 0;
      background: rgba(11, 30, 61, 0.2) !important;
      backdrop-filter: blur(8px);
      z-index: 2147483646 !important;
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.4s ease;
    }
    .sidebar-overlay.open {
      opacity: 1;
      pointer-events: auto;
    }
    `;
  const style = document.createElement('style');
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
          <a href="/index.html" class="logo">Welkin<span class="logo-square"></span></a>
          <button id="sidebar-close" class="sidebar-close">&times;</button>
        </div>
        <nav class="sidebar-nav">
          <a href="/index.html" class="sidebar-link">Home</a>
          <a href="/browse.html" class="sidebar-link">Browse</a>
          <a href="/games.html" class="sidebar-link">Games</a>
          <a href="/retro-bowl.html" class="sidebar-link">Retro Bowl</a>
          <a href="/movies.html" class="sidebar-link">Movies</a>
          <a href="/Soundboard/Soundboard.html" class="sidebar-link">Soundboard</a>
          <a href="#" class="sidebar-link" id="music-toggle">Music</a>
        </nav>
        <div id="sidebar-music-widget" class="sidebar-music-widget" style="display:none;"></div>
      </aside>
      <div id="sidebar-overlay" class="sidebar-overlay"></div>
    `;

  document.documentElement.insertAdjacentHTML('beforeend', sidebarHTML);

  const sidebar = document.getElementById('glass-sidebar');
  const trigger = document.getElementById('sidebar-trigger');
  const closeBtn = document.getElementById('sidebar-close');
  const overlay = document.getElementById('sidebar-overlay');
  const musicToggle = document.getElementById('music-toggle');

  const closeSidebar = () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  };

  trigger.addEventListener('click', () => {
    sidebar.classList.add('open');
    overlay.classList.add('open');
  });
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);

  if (musicToggle) {
    musicToggle.addEventListener('click', (e) => {
      e.preventDefault();
      if (window.toggleMusic) window.toggleMusic();
      closeSidebar();
    });
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', window.initSidebar);
} else {
  window.initSidebar();
}

document.addEventListener('click', (e) => {
  const link = e.target.closest('a');
  if (!link || link.id === 'music-toggle') return;
  const href = link.getAttribute('href');
  if (!href || href.startsWith('http') || link.getAttribute('target') === '_blank' || href.startsWith('#')) return;

  e.preventDefault();
  document.body.classList.remove('page-transition-enter');
  document.body.classList.add('page-transition-exit');

  setTimeout(() => {
    window.location.href = href;
  }, 700);
});
