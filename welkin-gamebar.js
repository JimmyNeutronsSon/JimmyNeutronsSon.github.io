// Welkin Game Bar Bookmarklet Script
(function () {
  if (document.getElementById('welkin-gb-root')) return;

  const THEME = {
    bg: 'rgba(11, 30, 61, 0.15)',
    border: 'rgba(255, 255, 255, 0.15)',
    text: '#ffffff',
    primary: '#3b82f6',
    panelBg: 'rgba(15, 23, 42, 0.35)',
    blur: 'blur(30px)',
    glass: 'backdrop-filter: blur(30px) saturate(180%);'
  };

  const root = document.createElement('div');
  root.id = 'welkin-gb-root';
  root.style.cssText = `
    position: fixed; inset: 0; z-index: 2147483647; 
    pointer-events: none; font-family: 'Inter', system-ui, sans-serif;
    color: ${THEME.text};
  `;
  document.body.appendChild(root);

  const overlay = document.createElement('div');
  overlay.id = 'wg-overlay';
  overlay.style.cssText = `
    position: absolute; inset: 0; background: rgba(0, 0, 0, 0.3); 
    pointer-events: auto; backdrop-filter: blur(5px); transition: opacity 0.3s;
    z-index: -1;
  `;
  // Removed accidental close on click
  root.appendChild(overlay);

  const topBar = document.createElement('div');
  topBar.style.cssText = `
    position: absolute; top: 20px; left: 50%; transform: translateX(-50%);
    background: ${THEME.bg}; backdrop-filter: blur(20px);
    border: 1px solid ${THEME.border}; border-radius: 30px;
    padding: 8px 15px; display: flex; gap: 12px; pointer-events: auto;
    box-shadow: 0 10px 40px rgba(0,0,0,0.5); align-items: center;
    z-index: 1000;
  `;
  root.appendChild(topBar);

  const timeDisplay = document.createElement('span');
  timeDisplay.style.cssText = 'color: #fff; font-weight: 600; font-size: 14px; margin: 0 10px; text-shadow: 0 2px 4px rgba(0,0,0,0.5);';
  setInterval(() => {
    const d = new Date();
    timeDisplay.innerText = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }, 1000);
  topBar.appendChild(timeDisplay);

  const windows = [];
  let zIndexCounter = 100;

  function createWindow(id, title, icon, x, y, w, h, contentBuilder, isTemporary = false) {
    let existing = windows.find(win => win.id === id);
    if (existing) {
      if (isTemporary) {
        existing.el.remove();
        existing.toggle.remove();
        windows.splice(windows.indexOf(existing), 1);
      } else {
        if (existing.el.style.display === 'none') toggleWindow(id);
        return existing.el;
      }
    }

    const win = document.createElement('div');
    win.id = id;
    win.className = 'wg-window';
    win.style.cssText = `
      position: absolute; top: ${y}px; left: ${x}px; width: ${w}px; height: ${h}px;
      background: ${THEME.panelBg}; ${THEME.glass}
      border-radius: 18px; border: 1px solid ${THEME.border};
      display: flex; flex-direction: column; pointer-events: auto;
      box-shadow: 0 20px 60px rgba(0,0,0,0.7); overflow: hidden;
      resize: both; min-width: 300px; min-height: 250px;
      z-index: ${zIndexCounter++};
    `;

    const header = document.createElement('div');
    header.style.cssText = `
      height: 50px; background: rgba(255,255,255,0.08); border-bottom: 1px solid rgba(255,255,255,0.05);
      display: flex; align-items: center; justify-content: space-between; padding: 0 18px;
      cursor: move; flex-shrink: 0;
    `;
    header.innerHTML = `<div style="display:flex;align-items:center;gap:12px;pointer-events:none;">
      <span style="font-size:18px;">${icon}</span>
      <span style="font-weight:600; font-size:15px; letter-spacing:0.5px;">${title}</span>
    </div>`;

    const btnContainer = document.createElement('div');
    btnContainer.style.cssText = 'display:flex; align-items:center; gap:8px; margin-left:auto;';

    let isMaximized = false;
    let oldRect = {};

    const fullBtn = document.createElement('button');
    fullBtn.innerHTML = '⛶';
    fullBtn.title = 'Toggle Fullscreen';
    fullBtn.style.cssText = 'background:none; border:none; color:rgba(255,255,255,0.5); cursor:pointer; font-size:16px; padding:5px; transition:0.2s;';
    fullBtn.onmouseover = () => fullBtn.style.color = '#fff';
    fullBtn.onmouseout = () => fullBtn.style.color = 'rgba(255,255,255,0.5)';
    fullBtn.onclick = (e) => {
      e.stopPropagation();
      if (!isMaximized) {
        oldRect = { top: win.style.top, left: win.style.left, width: win.style.width, height: win.style.height };
        win.style.top = '0';
        win.style.left = '0';
        win.style.width = '100vw';
        win.style.height = '100vh';
        win.style.borderRadius = '0';
        isMaximized = true;
      } else {
        win.style.top = oldRect.top;
        win.style.left = oldRect.left;
        win.style.width = oldRect.width;
        win.style.height = oldRect.height;
        win.style.borderRadius = '18px';
        isMaximized = false;
      }
    };

    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '✕';
    closeBtn.style.cssText = 'background:none; border:none; color:rgba(255,255,255,0.5); cursor:pointer; font-size:18px; padding:5px; transition:0.2s;';
    closeBtn.onmouseover = () => closeBtn.style.color = '#ff4d4d';
    closeBtn.onmouseout = () => closeBtn.style.color = 'rgba(255,255,255,0.5)';
    closeBtn.onclick = (e) => {
      e.stopPropagation();
      if (isTemporary) {
        win.remove();
        toggle.remove();
        const idx = windows.findIndex(w => w.id === id);
        if (idx > -1) windows.splice(idx, 1);
        const iframe = win.querySelector('iframe');
        if (iframe) iframe.src = 'about:blank';
      } else {
        toggleWindow(id);
      }
    };
    
    btnContainer.appendChild(fullBtn);
    btnContainer.appendChild(closeBtn);
    header.appendChild(btnContainer);
    win.appendChild(header);

    const body = document.createElement('div');
    body.style.cssText = 'flex: 1; position: relative; overflow: auto; color: #fff;';
    contentBuilder(body);
    win.appendChild(body);

    root.appendChild(win);

    // Draggable Logic
    let isDragging = false, dragX, dragY, startX, startY;
    header.onmousedown = (e) => {
      if (e.target.tagName === 'BUTTON') return;
      isDragging = true;
      dragX = e.clientX; dragY = e.clientY;
      startX = win.offsetLeft; startY = win.offsetTop;
      win.style.zIndex = zIndexCounter++;
      const iframes = root.querySelectorAll('iframe');
      iframes.forEach(f => f.style.pointerEvents = 'none');
    };

    window.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      win.style.left = (startX + e.clientX - dragX) + 'px';
      win.style.top = (startY + e.clientY - dragY) + 'px';
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        const iframes = root.querySelectorAll('iframe');
        iframes.forEach(f => f.style.pointerEvents = 'auto');
      }
    });

    // Padding for native resize handle
    body.style.paddingBottom = '20px';

    const toggle = document.createElement('button');
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
    const w = windows.find(x => x.id === id);
    if (!w) return;
    if (w.el.style.display === 'none') {
      w.el.style.display = 'flex';
      w.el.style.zIndex = zIndexCounter++;
      w.toggle.style.background = 'rgba(59, 130, 246, 0.4)';
    } else {
      w.el.style.display = 'none';
      w.toggle.style.background = 'rgba(255,255,255,0.1)';
    }
  }

  window.launchWgGame = (url, title) => {
    const gameId = 'wg-game-' + title.replace(/\s+/g, '-').toLowerCase();
    const win = createWindow(gameId, title, '🕹️', 50, 50, 1100, 650, (container) => {
      container.style.padding = '0';
      container.style.background = '#000';
      container.innerHTML = `
        <div style="width:100%; height:100%; overflow:hidden; position:relative;">
          <iframe src="${url}" style="width:100%; height:calc(100% + 55px); border:none; margin-top:-55px; position:absolute; top:0; left:0;"></iframe>
        </div>
      `;
    }, true);
    win.style.display = 'flex';
  };

  const buildProxy = (container) => {
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    container.style.padding = '0';
    container.style.background = '#000';
    container.style.height = '100%';
    container.innerHTML = `
      <div style="padding:10px; background:rgba(255,255,255,0.03); display:flex; gap:10px; border-bottom:1px solid rgba(255,255,255,0.05); backdrop-filter:blur(15px);">
        <input id="proxy-url" type="text" value="https://welkin.blueshadows.cl/browse.html" placeholder="Enter URL..." 
          style="flex:1; background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#fff; padding:8px 16px; border-radius:20px; outline:none; font-size:12px; font-family:inherit; transition:0.3s; box-shadow:inset 0 2px 4px rgba(0,0,0,0.2);">
      </div>
      <iframe id="proxy-frame" src="https://welkin.blueshadows.cl/browse.html" style="flex:1; width:100%; border:none;"></iframe>
    `;
    const input = container.querySelector('#proxy-url');
    const iframe = container.querySelector('#proxy-frame');
    
    input.onfocus = () => { 
      input.style.background = 'rgba(255,255,255,0.1)'; 
      input.style.borderColor = 'rgba(255,255,255,0.2)';
      input.style.boxShadow = '0 0 15px rgba(59, 130, 246, 0.3)';
    };
    input.onblur = () => { 
      input.style.background = 'rgba(255,255,255,0.05)'; 
      input.style.borderColor = 'rgba(255,255,255,0.1)';
      input.style.boxShadow = 'inset 0 2px 4px rgba(0,0,0,0.2)';
    };

    input.onkeydown = (e) => {
      if (e.key === 'Enter') {
        let url = input.value.trim();
        if (url && !url.includes('://')) url = 'https://' + url;
        iframe.src = url;
      }
    };
  };

  const buildSoundboard = (container) => {
    container.style.padding = '18px';
    container.style.height = '100%';
    container.style.display = 'flex';
    container.style.flexDirection = 'column';
    
    container.innerHTML = `
      <div style="margin-bottom:15px; display:flex; gap:10px;">
        <input type="text" id="sb-search" placeholder="Search 2000+ sounds..." style="flex:1; padding:10px 18px; border-radius:25px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.4); color:#fff; outline:none; font-size:13px; font-family:inherit;">
        <button id="sb-stop" style="padding:0 20px; border-radius:25px; border:none; background:#ff4d4d; color:#fff; cursor:pointer; font-weight:bold; font-size:12px; transition:0.2s;">STOP</button>
      </div>
      <div id="sb-grid" style="flex:1; display:grid; grid-template-columns:repeat(auto-fill, minmax(110px, 1fr)); gap:12px; overflow-y:auto; padding-right:5px;">
        <div style="grid-column:1/-1; text-align:center; padding:40px; color:#aaa;">Fetching Sound Library...</div>
      </div>
    `;

    const grid = container.querySelector('#sb-grid');
    const search = container.querySelector('#sb-search');
    const stopBtn = container.querySelector('#sb-stop');
    let soundList = [];
    let playingAudios = [];

    const render = (q = '') => {
      const filtered = soundList.filter(s => s.name.toLowerCase().includes(q.toLowerCase()));
      grid.innerHTML = filtered.map(s => `
        <div class="sb-btn" style="background:${s.color || 'rgba(255,255,255,0.1)'}; padding:22px 15px; border-radius:20px; cursor:pointer; text-align:center; transition:all 0.1s ease; position:relative; overflow:hidden; border:2px solid rgba(255,255,255,0.1); box-shadow: 0 6px 0 rgba(0,0,0,0.3), 0 8px 15px rgba(0,0,0,0.4); display:flex; align-items:center; justify-content:center; min-height:80px;">
          <div style="font-size:12px; font-weight:800; color:#fff; text-shadow:0 2px 4px rgba(0,0,0,0.5); word-wrap:break-word; line-height:1.2; z-index:2;">${s.name}</div>
          <div style="position:absolute; inset:0; background:linear-gradient(rgba(255,255,255,0.15), transparent); pointer-events:none; z-index:1;"></div>
        </div>
      `).join('');

      container.querySelectorAll('.sb-btn').forEach((btn, i) => {
        const s = filtered[i];
        btn.onmousedown = () => {
          btn.style.transform = 'translateY(4px)';
          btn.style.boxShadow = '0 2px 0 rgba(0,0,0,0.3), 0 4px 10px rgba(0,0,0,0.4)';
        };
        btn.onmouseup = () => {
          btn.style.transform = 'translateY(-3px)';
          btn.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
        };
        btn.onclick = () => {
          const audio = new Audio('https://www.myinstants.com' + s.mp3);
          audio.play();
          playingAudios.push(audio);
        };
        btn.onmouseover = () => {
          btn.style.filter = 'brightness(1.3)';
          btn.style.transform = 'translateY(-3px)';
          btn.style.boxShadow = '0 8px 25px rgba(0,0,0,0.4)';
        };
        btn.onmouseout = () => {
          btn.style.filter = 'none';
          btn.style.transform = 'none';
          btn.style.boxShadow = '0 6px 0 rgba(0,0,0,0.3), 0 8px 15px rgba(0,0,0,0.4)';
        };
      });
    };

    fetch('https://cdn.jsdelivr.net/gh/genizy/soundboard@latest/sounds.js')
      .then(r => r.text())
      .then(txt => {
        // Robust parsing: look for the start of the array after 'export const sounds'
        const start = txt.indexOf('[', txt.indexOf('sounds'));
        const end = txt.lastIndexOf(']') + 1;
        const jsonStr = txt.substring(start, end);
        soundList = JSON.parse(jsonStr);
        render();
      });

    search.oninput = (e) => render(e.target.value);
    stopBtn.onclick = () => {
      playingAudios.forEach(a => { a.pause(); a.currentTime = 0; });
      playingAudios = [];
    };
    stopBtn.onmouseover = () => stopBtn.style.background = '#ff3333';
    stopBtn.onmouseout = () => stopBtn.style.background = '#ff4d4d';
  };

  const buildGames = (container) => {
    container.style.padding = '18px';
    container.innerHTML = `
      <div style="position:sticky; top:0; background:transparent; padding-bottom:15px; z-index:10;">
        <input type="text" id="wg-games-search" placeholder="Search 700+ games..." style="width:100%; padding:12px 18px; border-radius:25px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.4); color:#fff; outline:none; font-size:14px; box-sizing:border-box;">
      </div>
      <div id="wg-games-grid" style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:15px;">
        <div style="grid-column:1/-1; text-align:center; padding:40px; color:#aaa;">Fetching library...</div>
      </div>
    `;

    const grid = container.querySelector('#wg-games-grid');
    const search = container.querySelector('#wg-games-search');
    let gamesList = [];

    const render = (q = '') => {
      const filtered = gamesList.filter(g => g.title.toLowerCase().includes(q.toLowerCase()));
      grid.innerHTML = filtered.map(g => `
        <div class="wg-game-card" onclick="window.launchWgGame('${g.url}', '${g.title.replace(/'/g, "\\'")}')" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.05); border-radius:15px; padding:10px; cursor:pointer; transition:0.3s; text-align:center;">
          <div style="width:100%; aspect-ratio:16/9; border-radius:10px; background:#111 url('${g.img}') center/cover; margin-bottom:10px; box-shadow:0 5px 15px rgba(0,0,0,0.4);"></div>
          <div style="font-size:13px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; padding:0 5px;">${g.title}</div>
        </div>
      `).join('');

      container.querySelectorAll('.wg-game-card').forEach(c => {
        c.onmouseover = () => { c.style.background = 'rgba(255,255,255,0.15)'; c.style.transform = 'translateY(-5px)'; };
        c.onmouseout = () => { c.style.background = 'rgba(255,255,255,0.05)'; c.style.transform = 'none'; };
      });
    };

    fetch('https://raw.githubusercontent.com/WanoCapy/ChickenKingsVault/main/games.js')
      .then(r => r.text())
      .then(txt => {
        const match = txt.match(/const games =`([\s\S]*?)`/);
        if (match) {
          const parser = new DOMParser();
          const doc = parser.parseFromString(match[1], 'text/html');
          gamesList = Array.from(doc.querySelectorAll('a')).map(a => ({
            title: a.querySelector('div')?.innerText || 'Unknown',
            url: 'https://raw.githack.com/WanoCapy/ChickenKingsVault/main/' + a.getAttribute('href'),
            img: 'https://raw.githack.com/WanoCapy/ChickenKingsVault/main/' + a.querySelector('img')?.getAttribute('src')
          }));
          render();
        }
      });

    search.oninput = (e) => render(e.target.value);
  };

  const buildAudio = (container) => {
    container.style.height = '100%';
    container.style.display = 'flex';
    container.innerHTML = `
      <div style="width:320px; background:rgba(0,0,0,0.2); border-right:1px solid rgba(255,255,255,0.05); padding:25px; display:flex; flex-direction:column; align-items:center; text-align:center;">
        <div id="m-art" style="width:220px; height:220px; border-radius:20px; background:linear-gradient(45deg, #1e293b, #334155); margin-bottom:25px; box-shadow:0 15px 35px rgba(0,0,0,0.5); background-size:cover; background-position:center; transition:0.5s;"></div>
        <div id="m-title" style="font-size:20px; font-weight:bold; width:100%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">Not Playing</div>
        <div id="m-artist" style="font-size:14px; color:#aaa; margin-top:5px; margin-bottom:30px;">Search to begin</div>
        <div style="display:flex; gap:25px; align-items:center;">
          <button id="m-prev" style="background:none; border:none; color:#fff; cursor:pointer; font-size:24px;">⏮</button>
          <button id="m-play" style="width:64px; height:64px; border-radius:50%; background:${THEME.primary}; border:none; color:#fff; cursor:pointer; font-size:28px; box-shadow:0 8px 20px rgba(59,130,246,0.4);">▶</button>
          <button id="m-next" style="background:none; border:none; color:#fff; cursor:pointer; font-size:24px;">⏭</button>
        </div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column;">
        <div style="display:flex; border-bottom:1px solid rgba(255,255,255,0.05);">
          <div id="t-search" style="flex:1; padding:15px; text-align:center; cursor:pointer; font-weight:bold; border-bottom:2px solid #3b82f6;">Discovery</div>
          <div id="t-queue" style="flex:1; padding:15px; text-align:center; cursor:pointer; font-weight:bold; color:#aaa;">Queue</div>
        </div>
        <div style="flex:1; padding:20px; overflow-y:auto;" id="m-content">
          <input type="text" id="m-input" placeholder="Search songs, albums..." style="width:100%; padding:12px 18px; border-radius:20px; border:1px solid rgba(255,255,255,0.1); background:rgba(0,0,0,0.3); color:#fff; outline:none; margin-bottom:20px;">
          <div id="m-results"></div>
        </div>
      </div>
      <audio id="m-player" style="display:none;" crossorigin="anonymous"></audio>
    `;

    const player = container.querySelector('#m-player');
    const playBtn = container.querySelector('#m-play');
    const titleEl = container.querySelector('#m-title');
    const artistEl = container.querySelector('#m-artist');
    const artEl = container.querySelector('#m-art');
    const input = container.querySelector('#m-input');
    const results = container.querySelector('#m-results');

    let queue = [];
    let curIdx = 0;

    const playSong = (song) => {
      titleEl.innerText = song.name;
      artistEl.innerText = Array.isArray(song.primaryArtists) ? song.primaryArtists.map(a => a.name).join(', ') : (typeof song.primaryArtists === 'object' ? song.primaryArtists.name : (song.primaryArtists || song.artist));
      artEl.style.backgroundImage = `url('${song.image[2].link}')`;
      player.src = song.downloadUrl[4].link;
      player.play();
      playBtn.innerText = '⏸';
    };

    const search = async (q) => {
      results.innerHTML = '<div style="color:#aaa;text-align:center;padding:20px;">Searching...</div>';
      try {
        const [songsRes, albumsRes] = await Promise.all([
          fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/songs?query=${encodeURIComponent(q)}&limit=15`).then(r => r.json()),
          fetch(`https://jiosaavn-api-privatecvc2.vercel.app/search/albums?query=${encodeURIComponent(q)}&limit=5`).then(r => r.json())
        ]);

        results.innerHTML = '';

        if (albumsRes.data?.results?.length) {
          results.innerHTML += '<div style="font-size:12px; color:#3b82f6; font-weight:bold; margin-bottom:10px; text-transform:uppercase;">Albums</div>';
          albumsRes.data.results.forEach(al => {
            const div = document.createElement('div');
            div.style.cssText = 'display:flex; align-items:center; gap:12px; padding:10px; cursor:pointer; border-radius:10px; margin-bottom:8px; background:rgba(255,255,255,0.03);';
            div.innerHTML = `<img src="${al.image[1].link}" style="width:45px; height:45px; border-radius:8px;"> <div><div style="font-weight:600;">${al.name}</div><div style="font-size:11px; color:#aaa;">${Array.isArray(al.primaryArtists) ? al.primaryArtists.map(a => a.name).join(', ') : (typeof al.primaryArtists === 'object' ? al.primaryArtists.name : al.primaryArtists)}</div></div>`;
            div.onclick = async () => {
              results.innerHTML = '<div style="color:#aaa;text-align:center;padding:20px;">Loading album...</div>';
              const alData = await fetch(`https://jiosaavn-api-privatecvc2.vercel.app/albums?id=${al.id}`).then(r => r.json());
              queue = alData.data.songs; curIdx = 0;
              playSong(queue[0]);
              search(q);
            };
            results.appendChild(div);
          });
        }

        if (songsRes.data?.results?.length) {
          results.innerHTML += '<div style="font-size:12px; color:#3b82f6; font-weight:bold; margin:15px 0 10px; text-transform:uppercase;">Songs</div>';
          songsRes.data.results.forEach((s, i) => {
            const div = document.createElement('div');
            div.style.cssText = 'display:flex; align-items:center; gap:12px; padding:10px; cursor:pointer; border-radius:10px; margin-bottom:8px; background:rgba(255,255,255,0.03);';
            div.innerHTML = `<img src="${s.image[1].link}" style="width:45px; height:45px; border-radius:8px;"> <div style="flex:1; overflow:hidden;"><div style="font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${s.name}</div><div style="font-size:11px; color:#aaa;">${Array.isArray(s.primaryArtists) ? s.primaryArtists.map(a => a.name).join(', ') : (typeof s.primaryArtists === 'object' ? s.primaryArtists.name : s.primaryArtists)}</div></div>`;
            div.onclick = () => { queue = [s]; curIdx = 0; playSong(s); };
            results.appendChild(div);
          });
        }
      } catch (e) { results.innerHTML = 'Error searching.'; }
    };

    input.onkeydown = (e) => { if (e.key === 'Enter') search(input.value); };
    playBtn.onclick = () => { if (player.paused) { player.play(); playBtn.innerText = '⏸'; } else { player.pause(); playBtn.innerText = '▶'; } };
    container.querySelector('#m-next').onclick = () => { if (queue.length > curIdx + 1) playSong(queue[++curIdx]); };
    container.querySelector('#m-prev').onclick = () => { if (curIdx > 0) playSong(queue[--curIdx]); };
  };

  createWindow('wg-music', 'Welkin Music', '🎵', 50, 100, 850, 500, buildAudio);
  createWindow('wg-proxy', 'Proxy', '🌐', 50, 620, 800, 500, buildProxy);
  createWindow('wg-sb', 'Soundboard', '🔊', 350, 620, 450, 400, buildSoundboard);
  createWindow('wg-games', 'Games Library', '🎮', 400, 100, 1000, 500, buildGames);

  // Close Bar Button (Permanent Removal)
  const closeBar = document.createElement('button');
  closeBar.innerHTML = '✕';
  closeBar.title = 'Close Welkin Overlay';
  closeBar.style.cssText = `
    background: none; border: none; color: #fff; cursor: pointer; 
    font-size: 20px; padding: 5px 15px; border-left: 1px solid rgba(255,255,255,0.1); margin-left: 5px;
    transition: color 0.2s;
  `;
  closeBar.onmouseover = () => closeBar.style.color = '#ff4d4d';
  closeBar.onmouseout = () => closeBar.style.color = '#fff';
  closeBar.onclick = () => {
    document.removeEventListener('keydown', globalHotkeyHandler);
    root.remove();
  };
  topBar.appendChild(closeBar);

  windows.forEach(w => w.el.style.display = 'none');
  // Auto-open disabled as requested

  // Hiding Logic
  window.toggleWelkinBar = () => {
    if (root.style.display === 'none') {
      root.style.display = 'block';
    } else {
      root.style.display = 'none';
    }
  };

  const globalHotkeyHandler = (e) => {
    // Alt + ` to toggle visibility
    if (e.altKey && e.code === 'Backquote') {
      e.preventDefault();
      window.toggleWelkinBar();
    }
    // Escape now hides instead of closing
    if (e.key === 'Escape' && root.style.display !== 'none') {
      window.toggleWelkinBar();
    }
  };
  document.addEventListener('keydown', globalHotkeyHandler);

  // Add Hotkey Indicator to Top Bar
  const hotkeyHint = document.createElement('div');
  hotkeyHint.innerText = 'Alt+`';
  hotkeyHint.style.cssText = `
    font-size: 10px; color: rgba(255,255,255,0.4); font-weight: bold;
    padding: 4px 8px; border: 1px solid rgba(255,255,255,0.1);
    border-radius: 6px; background: rgba(0,0,0,0.2); margin-left: 5px;
    cursor: help;
  `;
  hotkeyHint.title = 'Press Alt+` to hide/show the Game Bar';
  topBar.insertBefore(hotkeyHint, closeBar);

})();
