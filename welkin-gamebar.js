// Welkin Game Bar Bookmarklet Script
(function () {
  if (document.getElementById("welkin-gb-root")) return;

  const THEME = {
    bg: "rgba(11, 30, 61, 0.15)",
    border: "rgba(255, 255, 255, 0.15)",
    text: "#ffffff",
    primary: "#3b82f6",
    panelBg: "rgba(15, 23, 42, 0.35)",
    blur: "blur(30px)",
    glass: "backdrop-filter: blur(30px) saturate(180%);",
  };

  const wrapUrl = (url) => {
    if (!url) return "";
    const proxyBase = "https://welkin.blueshadows.cl/proxy";
    return `${proxyBase}?url=${encodeURIComponent(url)}`;
  };

  const root = document.createElement("div");
  root.id = "welkin-gb-root";
  root.style.cssText = `
    position: fixed; inset: 0; z-index: 2147483647; 
    pointer-events: none; font-family: 'Inter', system-ui, sans-serif;
    color: ${THEME.text};
  `;
  document.body.appendChild(root);

  const overlay = document.createElement("div");
  overlay.id = "wg-overlay";
  overlay.style.cssText = `
    position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); 
    pointer-events: auto; backdrop-filter: blur(5px); transition: opacity 0.3s;
    z-index: -1;
  `;
  // Removed accidental close on click
  root.appendChild(overlay);

  const topBar = document.createElement("div");
  topBar.style.cssText = `
    position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
    background: ${THEME.bg}; backdrop-filter: blur(20px);
    border: 1px solid ${THEME.border}; border-radius: 30px;
    padding: 8px 15px; display: flex; gap: 12px; pointer-events: auto;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5); align-items: center;
    z-index: 1000;
  `;
  root.appendChild(topBar);

  const timeDisplay = document.createElement("span");
  timeDisplay.style.cssText =
    "color: #fff; font-weight: 600; font-size: 14px; margin: 0 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);";
  setInterval(() => {
    const d = new Date();
    timeDisplay.innerText = d.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, 1000);
  topBar.appendChild(timeDisplay);

  const windows = [];
  let zIndexCounter = 100;

  function createWindow(
    id,
    title,
    icon,
    x,
    y,
    w,
    h,
    contentBuilder,
    isTemporary = false,
  ) {
    let existing = windows.find((win) => win.id === id);
    if (existing) {
      if (isTemporary) {
        existing.el.remove();
        existing.toggle.remove();
        windows.splice(windows.indexOf(existing), 1);
      } else {
        if (existing.el.style.display === "none") toggleWindow(id);
        return existing.el;
      }
    }

    const win = document.createElement("div");
    win.id = id;
    win.className = "wg-window";
    win.style.cssText = `
      position: absolute; top: ${y}px; left: ${x}px; width: ${w}px; height: ${h}px;
      background: ${THEME.panelBg}; ${THEME.glass}
      border-radius: 18px; border: 1px solid ${THEME.border};
      display: flex; flex-direction: column; pointer-events: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7); overflow: hidden;
      resize: both; min-width: 300px; min-height: 250px;
      z-index: ${zIndexCounter++};
    `;

    const header = document.createElement("div");
    header.style.cssText = `
      height: 50px; background: rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.05);
      display: flex; align-items: center; justify-content: space-between; padding: 0 18px;
      cursor: move; flex-shrink: 0;
    `;
    header.innerHTML = `<div style="display:flex;align-items:center;gap:12px;pointer-events:none;">
      <span style="font-size:18px;">${icon}</span>
      <span style="font-weight:600; font-size:15px; letter-spacing:0.5px;">${title}</span>
    </div>`;

    const btnContainer = document.createElement("div");
    btnContainer.style.cssText =
      "display:flex; align-items:center; gap:8px; margin-left:auto;";

    let isMaximized = false;
    let oldRect = {};

    const fullBtn = document.createElement("button");
    fullBtn.innerHTML = "⛶";
    fullBtn.title = "Toggle Fullscreen";
    fullBtn.style.cssText =
      "background:none; border:none; color:rgba(255,255,255,0.5); cursor:pointer; font-size:16px; padding:5px; transition:0.2s;";
    fullBtn.onmouseover = () => (fullBtn.style.color = "#fff");
    fullBtn.onmouseout = () => (fullBtn.style.color = "rgba(255,255,255,0.5)");
    fullBtn.onclick = (e) => {
      e.stopPropagation();
      if (!document.fullscreenElement) {
        const req = win.requestFullscreen || win.webkitRequestFullscreen || win.mozRequestFullScreen || win.msRequestFullscreen;
        if (req) req.call(win);
      } else {
        const exit = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen;
        if (exit) exit.call(document);
      }
    };

    const closeBtn = document.createElement("button");
    closeBtn.innerHTML = "✕";
    closeBtn.style.cssText =
      "background:none; border:none; color:rgba(255,255,255,0.5); cursor:pointer; font-size:18px; padding:5px; transition:0.2s;";
    closeBtn.onmouseover = () => (closeBtn.style.color = "#ff4d4d");
    closeBtn.onmouseout = () =>
      (closeBtn.style.color = "rgba(255,255,255,0.5)");
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      if (isTemporary) {
        const iframe = win.querySelector("iframe");
        if (iframe) iframe.src = "about:blank";
        win.remove();
        toggle.remove();
        const idx = windows.findIndex((w) => w.id === id);
        if (idx > -1) windows.splice(idx, 1);
      } else {
        win.style.display = "none";
        toggle.style.background = "rgba(255,255,255,0.1)";
      }
    };

    const minBtn = document.createElement("button");
    minBtn.innerHTML = "─";
    minBtn.title = "Minimize";
    minBtn.style.cssText =
      "background:none; border:none; color:rgba(255,255,255,0.5); cursor:pointer; font-size:16px; padding:5px; transition:0.2s;";
    minBtn.onmouseover = () => (minBtn.style.color = "#fff");
    minBtn.onmouseout = () => (minBtn.style.color = "rgba(255,255,255,0.5)");
    minBtn.onclick = (e) => {
      e.stopPropagation();
      win.style.display = "none";
      toggle.style.background = "rgba(255,255,255,0.1)";
    };

    btnContainer.appendChild(fullBtn);
    btnContainer.appendChild(minBtn);
    btnContainer.appendChild(closeBtn);
    header.appendChild(btnContainer);
    win.appendChild(header);

    const body = document.createElement("div");
    body.style.cssText =
      "flex: 1; position: relative; overflow: auto; color: #fff;";
    contentBuilder(body);
    win.appendChild(body);

    root.appendChild(win);

    // Draggable Logic
    let isDragging = false,
      dragX,
      dragY,
      startX,
      startY;
    header.onmousedown = (e) => {
      if (e.target.tagName === "BUTTON") return;
      isDragging = true;
      dragX = e.clientX;
      dragY = e.clientY;
      startX = win.offsetLeft;
      startY = win.offsetTop;
      win.style.zIndex = zIndexCounter++;
      const iframes = root.querySelectorAll("iframe");
      iframes.forEach((f) => (f.style.pointerEvents = "none"));
    };

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      win.style.left = startX + e.clientX - dragX + "px";
      win.style.top = startY + e.clientY - dragY + "px";
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        const iframes = root.querySelectorAll("iframe");
        iframes.forEach((f) => (f.style.pointerEvents = "auto"));
      }
    });

    // Padding for native resize handle
    body.style.paddingBottom = "20px";

    const toggle = document.createElement("button");
    toggle.innerHTML = `<span style="font-size:18px;">${icon}</span>`;
    toggle.style.cssText = `
      background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.05); color: #fff; cursor: pointer; 
      width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; 
      justify-content: center; transition: all 0.3s;
    `;
    toggle.onclick = () => toggleWindow(id);
    topBar.appendChild(toggle);

    windows.push({ id, el: win, toggle, isTemporary });
    return win;
  }

  function toggleWindow(id) {
    const w = windows.find((x) => x.id === id);
    if (!w) return;
    if (w.el.style.display === "none") {
      w.el.style.display = "flex";
      w.el.style.zIndex = zIndexCounter++;
      w.toggle.style.background = "rgba(59, 130, 246, 0.4)";
    } else {
      w.el.style.display = "none";
      w.toggle.style.background = "rgba(255,255,255,0.1)";
    }
  }

  const fetchAndBlob = async (url) => {
    const proxyBase = "https://welkin.blueshadows.cl/proxy";
    const res = await fetch(`${proxyBase}?url=${encodeURIComponent(url)}`);
    let html = await res.text();

    // Detect thin wrapper pages (just an iframe pointing to the real game)
    const iframeMatch = html.match(/<iframe[^>]+src=["']([^"'#][^"']*)["']/i);
    const bodyText =
      (html.match(/<body[^>]*>([\s\S]*?)<\/body>/i) || [])[1] || html;
    const stripped = bodyText
      .replace(/<(script|iframe|style)[\s\S]*?<\/\1>/gi, "")
      .replace(/<[^>]+>/g, "")
      .trim();
    if (iframeMatch && stripped.length < 50) {
      const innerSrc = iframeMatch[1];
      // Resolve innerSrc against the existing <base> tag if present, otherwise against url
      const baseMatch = html.match(/<base[^>]+href=["']([^"']+)["']/i);
      const baseHref = baseMatch
        ? baseMatch[1]
        : url.substring(0, url.lastIndexOf("/") + 1);
      const innerUrl =
        innerSrc.startsWith("http://") || innerSrc.startsWith("https://")
          ? innerSrc
          : baseHref + innerSrc;
      return fetchAndBlob(innerUrl);
    }

    // Strip existing base tags and rewrite all URLs through proxy
    const baseUrl = url.substring(0, url.lastIndexOf("/") + 1);
    html = html.replace(/<base[^>]*>/gi, "");

    const proxyify = (path) => {
      if (!path) return null;
      if (
        path.startsWith("data:") ||
        path.startsWith("blob:") ||
        path.startsWith("javascript:") ||
        path.startsWith("#") ||
        path.startsWith("mailto:")
      )
        return null;
      let abs;
      if (path.startsWith("http://") || path.startsWith("https://")) abs = path;
      else if (path.startsWith("//")) abs = "https:" + path;
      else abs = baseUrl + path;
      return `${proxyBase}?url=${encodeURIComponent(abs)}`;
    };

    html = html
      .replace(/(src|href|action)="([^"]+)"/g, (m, a, p) => {
        const r = proxyify(p);
        return r ? `${a}="${r}"` : m;
      })
      .replace(/(src|href|action)='([^']+)'/g, (m, a, p) => {
        const r = proxyify(p);
        return r ? `${a}='${r}'` : m;
      })
      .replace(/url\(['"]?([^'")]+)['"]?\)/g, (m, p) => {
        const r = proxyify(p);
        return r ? `url('${r}')` : m;
      });

    // Force text/html so the iframe renders instead of showing source
    const blob = new Blob([html], { type: "text/html" });
    return URL.createObjectURL(blob);
  };

  const launchWgGame = async (url, title) => {
    const gameId = "wg-game-" + title.replace(/\s+/g, "-").toLowerCase();
    const win = createWindow(
      gameId,
      title,
      "🕹️",
      50,
      50,
      1100,
      650,
      (container) => {
        container.style.padding = "0";
        container.style.background = "#000";
        container.innerHTML = `
      <div style="width:100%; height:100%; overflow:hidden; position:relative;">
        <div id="game-loader-msg" style="position:absolute; inset:0; display:flex; align-items:center; justify-content:center; background:#000; color:#fff; z-index:1;">Loading Game...</div>
        <iframe id="${gameId}-frame" style="width:100%; height:100%; border:none; position:absolute; top:0; left:0; z-index:2;"></iframe>
      </div>
    `;

        const frame = container.querySelector(`#${gameId}-frame`);
        const msg = container.querySelector("#game-loader-msg");

        if (url.toLowerCase().endsWith(".svg")) {
          // Load SVG directly in iframe as-is, same as opening in browser
          frame.src = url;
          frame.onload = () => { msg.style.display = "none"; };
          frame.onerror = () => { msg.innerText = "Failed to load game."; };
        } else {
          frame.src = wrapUrl(url);
          frame.onload = () => { msg.style.display = "none"; };
          frame.onerror = () => { msg.innerText = "Failed to load game."; };
        }
      },
      true,
    );
    win.style.display = "flex";
  };
  // launchWgGame is now called directly via addEventListener, no global needed

  const buildProxy = (container) => {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.padding = "0";
    container.style.background = "#000";
    container.style.height = "100%";
    container.innerHTML = `
      <div style="padding:10px; background:rgba(255,255,255,0.03); display:flex; gap:10px; border-bottom:1px solid rgba(255,255,255,0.05); backdrop-filter:blur(15px);">
        <input id="proxy-url" type="text" value="https://welkin.blueshadows.cl/browse.html" placeholder="Enter URL..." 
          style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px 16px; border-radius:20px; outline:none; font-size:12px; font-family:inherit; transition:0.3s; box-shadow:inset 0 2px 4px rgba(0,0,0,0.2);">
      </div>
      <iframe id="proxy-frame" src="https://welkin.blueshadows.cl/browse.html" style="flex:1; width:100%; border:none;"></iframe>
    `;
    const input = container.querySelector("#proxy-url");
    const iframe = container.querySelector("#proxy-frame");

    input.onfocus = () => {
      input.style.background = "rgba(255,255,255,0.1)";
      input.style.borderColor = "rgba(255,255,255,0.2)";
      input.style.boxShadow = "0 0 15px rgba(59, 130, 246, 0.3)";
    };
    input.onblur = () => {
      input.style.background = "rgba(255,255,255,0.05)";
      input.style.borderColor = "rgba(255,255,255,0.1)";
      input.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
    };

    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        let url = input.value.trim();
        if (url && !url.includes("://")) url = "https://" + url;
        iframe.src = url;
      }
    };
  };

  const buildSoundboard = (container) => {
    container.style.padding = "18px";
    container.style.height = "100%";
    container.style.display = "flex";
    container.style.flexDirection = "column";

    container.innerHTML = `
      <div style="margin-bottom:15px; display:flex; gap:10px;">
        <input type="text" id="sb-search" placeholder="Search 2000+ sounds..." style="flex:1; padding:10px 18px; border-radius:25px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.4); color:#fff; outline:none; font-size:13px; font-family:inherit;">
        <button id="sb-stop" style="padding:0 20px; border-radius:25px; border:none; background:#ff4d4d; color:#fff; cursor:pointer; font-weight:bold; font-size:12px; transition:0.2s;">STOP</button>
      </div>
      <div id="sb-grid" style="flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(110px, 1fr)); gap:12px; overflow-y:auto; padding-right:5px;">
        <div style="grid-column:1/-1; text-align:center; padding:40px; color:#aaa;">Fetching Sound Library...</div>
      </div>
    `;

    const grid = container.querySelector("#sb-grid");
    const search = container.querySelector("#sb-search");
    const stopBtn = container.querySelector("#sb-stop");
    let soundList = [];
    let playingAudios = [];

    const render = (q = "") => {
      const filtered = soundList.filter((s) =>
        s.name.toLowerCase().includes(q.toLowerCase()),
      );
      grid.innerHTML = filtered
        .map(
          (s) => `
        <div class="sb-btn" style="background:${s.color || "rgba(255,255,255,0.1)"}; padding:22px 15px; border-radius:20px; cursor:pointer; text-align:center; transition:all 0.1s ease; position:relative; overflow:hidden; border:2px solid rgba(255,255,255,0.1); box-shadow: 0 6px 0 rgba(0,0,0,0.3), 0 8px 15px rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center; min-height:80px;">
          <div style="font-size:12px; font-weight:800; color:#fff; text-shadow:0 2px 4px rgba(2, 31, 70, 0.5); word-wrap:break-word; line-height:1.2; z-index:2;">${s.name}</div>
          <div style="position:absolute; inset:0; background:linear-gradient(rgba(255, 255, 255, 0.15), transparent); pointer-events:none; z-index:1;"></div>
        </div>
      `,
        )
        .join("");

      container.querySelectorAll(".sb-btn").forEach((btn, i) => {
        const s = filtered[i];
        btn.onmousedown = () => {
          btn.style.transform = "translateY(4px)";
          btn.style.boxShadow =
            "0 2px 0 rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.4)";
        };
        btn.onmouseup = () => {
          btn.style.transform = "translateY(-3px)";
          btn.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
        };
        btn.onclick = () => {
          const audio = new Audio(
            wrapUrl("https://www.myinstants.com" + s.mp3),
          );
          audio.play();
          playingAudios.push(audio);
        };
        btn.onmouseover = () => {
          btn.style.filter = "brightness(1.3)";
          btn.style.transform = "translateY(-3px)";
          btn.style.boxShadow = "0 8px 25px rgba(0,0,0,0.4)";
        };
        btn.onmouseout = () => {
          btn.style.filter = "none";
          btn.style.transform = "none";
          btn.style.boxShadow =
            "0 6px 0 rgba(0,0,0,0.3), 0 8px 15px rgba(0,0,0,0.4)";
        };
      });
    };

    fetch(
      wrapUrl("https://cdn.jsdelivr.net/gh/genizy/soundboard@latest/sounds.js"),
    )
      .then((r) => r.text())
      .then((txt) => {
        // Robust parsing: look for the start of the array after 'export const sounds'
        const start = txt.indexOf("[", txt.indexOf("sounds"));
        const end = txt.lastIndexOf("]") + 1;
        const jsonStr = txt.substring(start, end);
        soundList = JSON.parse(jsonStr);
        render();
      });

    search.oninput = (e) => render(e.target.value);
    stopBtn.onclick = () => {
      playingAudios.forEach((a) => {
        a.pause();
        a.currentTime = 0;
      });
      playingAudios = [];
    };
    stopBtn.onmouseover = () => (stopBtn.style.background = "#ff3333");
    stopBtn.onmouseout = () => (stopBtn.style.background = "#ff4d4d");
  };

  const buildGames = (container) => {
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.padding = "0";
    container.style.background = "#000";
    container.style.height = "100%";
    container.innerHTML = `
      <div style="padding:0px; background:rgba(255,255,255,0.03); display:flex; gap:0px; border-bottom:0px solid rgba(255,255,255,0.05); backdrop-filter:blur(15px);">
        <input id="proxy-url" type="text" value="https://welkin.blueshadows.cl/gfb.html" placeholder="Enter URL..." 
          style="flex:1; background:rgba(255,255,255,0.05); border:0px solid rgba(255,255,255,0.1); color:#fff; padding:0px 0px; border-radius:0px; outline:none; font-size:0px; font-family:inherit; transition:0.3s; box-shadow:inset 0 0px 0px rgba(0,0,0,0.2);">
      </div>
      <iframe id="proxy-frame" src="https://welkin.blueshadows.cl/gfb.html" style="flex:1; width:100%; border:none;"></iframe>
    `;
    const input = container.querySelector("#proxy-url");
    const iframe = container.querySelector("#proxy-frame");

    input.onfocus = () => {
      input.style.background = "rgba(255,255,255,0.1)";
      input.style.borderColor = "rgba(255,255,255,0.2)";
      input.style.boxShadow = "0 0 15px rgba(59, 130, 246, 0.3)";
    };
    input.onblur = () => {
      input.style.background = "rgba(255,255,255,0.05)";
      input.style.borderColor = "rgba(255,255,255,0.1)";
      input.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
    };

    input.onkeydown = (e) => {
      if (e.key === "Enter") {
        let url = input.value.trim();
        if (url && !url.includes("://")) url = "https://" + url;
        iframe.src = url;
      }
    };
  };

  const buildAudio = (container) => {
    container.style.height = "100%";
    container.style.background = "#0B1E3D";
    container.innerHTML = `
      <iframe src="/memusic-webplayer/dist/index.html?no_sidebar=true" style="width:100%; height:100%; border:none;"></iframe>
    `;
  };

  createWindow("wg-music", "Welkin Music", "🎵", 50, 100, 850, 500, buildAudio);
  createWindow(
    "wg-proxy",
    "Proxy",
    "🌐",
    Math.max(0, (window.innerWidth - 800) / 2),
    Math.max(0, (window.innerHeight - 500) / 2),
    800,
    500,
    buildProxy,
  );
  createWindow(
    "wg-sb",
    "Soundboard",
    "🔊",
    Math.max(0, (window.innerWidth - 450) / 2),
    Math.max(0, (window.innerHeight - 400) / 2),
    450,
    400,
    buildSoundboard,
  );
  createWindow(
    "wg-games",
    "Games Library",
    "🎮",
    400,
    100,
    1000,
    500,
    buildGames,
  );

  // Close Bar Button (Permanent Removal)
  const closeBar = document.createElement("button");
  closeBar.innerHTML = "✕";
  closeBar.title = "Close Welkin Overlay";
  closeBar.style.cssText = `
    background: none; border: none; color: #fff; cursor: pointer; 
    font-size: 20px; padding: 5px 15px; border-left: 1px solid rgba(255,255,255,0.1); margin-left: 5px;
    transition: color 0.2s;
  `;
  closeBar.onmouseover = () => (closeBar.style.color = "#ff4d4d");
  closeBar.onmouseout = () => (closeBar.style.color = "#fff");
  closeBar.onclick = () => {
    document.removeEventListener("keydown", globalHotkeyHandler);
    root.remove();
  };
  topBar.appendChild(closeBar);

  windows.forEach((w) => (w.el.style.display = "none"));
  // Auto-open disabled as requested

  // Hiding Logic
  window.toggleWelkinBar = () => {
    if (root.style.display === "none") {
      root.style.display = "block";
    } else {
      root.style.display = "none";
    }
  };

  const globalHotkeyHandler = (e) => {
    // Alt + ` to toggle visibility
    if (e.altKey && e.code === "Backquote") {
      e.preventDefault();
      window.toggleWelkinBar();
    }
    // Escape now hides instead of closing
    if (e.key === "Escape" && root.style.display !== "none") {
      window.toggleWelkinBar();
    }
  };
  document.addEventListener("keydown", globalHotkeyHandler);

  // Add Hotkey Indicator to Top Bar
  const hotkeyHint = document.createElement("div");
  hotkeyHint.innerText = "Alt+`";
  hotkeyHint.style.cssText = `
    font-size: 10px; color: rgba(255,255,255,0.4); font-weight: bold;
    padding: 4px 8px; border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; background: rgba(0,0,0,0.2); margin-left: 5px;
    cursor: help;
  `;
  hotkeyHint.title = "Press Alt+` to hide/show the Game Bar";
  topBar.insertBefore(hotkeyHint, closeBar);
})();
