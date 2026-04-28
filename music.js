// Welkin Music Player Essentials
(function () {
  const MUSIC_API = "https://jiosaavn-api-privatecvc2.vercel.app";
  let currentSongs = [];
  let currentIndex = -1;
  let repeatMode = 0; // 0: None, 1: Repeat All, 2: Repeat One
  let audio = new Audio();
  audio.crossOrigin = "anonymous";

  function formatTime(seconds) {
    const min = Math.floor(seconds / 60) || 0;
    const sec = Math.floor(seconds % 60) || 0;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  }

  function cleanHtml(str) {
    if (!str) return "";
    const div = document.createElement("div");
    div.innerHTML = str;
    return div.textContent || div.innerText || "";
  }

  window.scrollMusicSection = (btn, direction) => {
    const wrapper = btn.closest(".music-scroll-wrapper");
    const container = wrapper.querySelector(".scroll-container");
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  function saveMusicState() {
    if (!audio.src) return;
    const state = {
      v: 2,
      currentIndex: currentIndex,
      repeatMode: repeatMode,
      currentTime: audio.currentTime,
      paused: audio.paused,
      src: audio.src,
      songs: currentSongs.map((s) => ({
        name: s.name || s._raw?.name,
        artist: s.primaryArtists || s._raw?.primaryArtists || s.artist,
        image: s.image || s._raw?.image,
        downloadUrl: s.downloadUrl || s._raw?.downloadUrl,
        _raw: s._raw || s,
      })),
    };
    sessionStorage.setItem("welkin_music_state", JSON.stringify(state));
  }

  window.saveMusicState = saveMusicState;

  function wrapUrl(url) {
    if (!url) return "";
    let proxyBase = "/proxy";
    // If the user is running on port 5500 (Live Server), but the backend is on 8080
    if (window.location.port === "5500") {
      proxyBase = "http://localhost:8080/proxy";
    }
    return `${proxyBase}?url=${encodeURIComponent(url)}`;
  }

  function restoreMusicState() {
    const saved = sessionStorage.getItem("welkin_music_state");
    if (!saved) return;
    try {
      const state = JSON.parse(saved);
      if (!state.v || state.v !== 2) {
        console.log("Skipping old music state format");
        return;
      }
      if (state.songs && state.songs.length > 0 && state.src) {
        currentSongs = state.songs;
        currentIndex = state.currentIndex || 0;
        repeatMode = state.repeatMode || 0;

        // Update UI immediately
        updatePlayerUI();
        if (window.__updateRepeatUI) window.__updateRepeatUI();

        // Set source and restore playback
        audio.src = state.src;

        const restore = () => {
          audio.currentTime = state.currentTime || 0;
          if (!state.paused) {
            audio
              .play()
              .then(() => {
                updatePlayIconOnRestore();
              })
              .catch(() => {});
          }
          // Also update progress display
          const progressCurrent = document.getElementById("progress-current");
          const timeCurrent = document.getElementById("time-current");
          const timeTotal = document.getElementById("time-total");
          if (progressCurrent && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressCurrent.style.width = `${progress}%`;
          }
          if (timeCurrent)
            timeCurrent.textContent = formatTime(audio.currentTime);
          if (timeTotal)
            timeTotal.textContent = formatTime(audio.duration || 0);

          // Update sidebar widget progress
          const swProgressFillEl = document.getElementById("sw-progress-fill");
          const swTimeEl = document.getElementById("sw-time-el");
          const swTimeTotalEl = document.getElementById("sw-time-total-el");
          if (swProgressFillEl && audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            swProgressFillEl.style.width = `${progress}%`;
          }
          if (swTimeEl) swTimeEl.textContent = formatTime(audio.currentTime);
          if (swTimeTotalEl) {
            const rem = audio.duration - audio.currentTime;
            swTimeTotalEl.textContent = "-" + formatTime(rem > 0 ? rem : 0);
          }
        };

        if (audio.readyState >= 1) {
          restore();
        } else {
          audio.addEventListener("loadedmetadata", restore, { once: true });
        }
      }
    } catch (e) {
      console.error("Music restore error:", e);
    }
  }

  function updatePlayIconOnRestore() {
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const swPlayIconEl = document.getElementById("sw-play-icon");
    const swPauseIconEl = document.getElementById("sw-pause-icon");
    if (playIcon) playIcon.style.display = "none";
    if (pauseIcon) pauseIcon.style.display = "block";
    if (swPlayIconEl) swPlayIconEl.style.display = "none";
    if (swPauseIconEl) swPauseIconEl.style.display = "block";
  }

  function updatePlayerUI() {
    const song = currentSongs[currentIndex];
    if (!song) return;

    const name = cleanHtml(song.name || song._raw?.name || song.title);
    const artist = cleanHtml(
      song.primaryArtists || song._raw?.primaryArtists || song.artist,
    );

    const currentTitle = document.getElementById("current-title");
    const currentArtist = document.getElementById("current-artist");
    const swTitleEl = document.getElementById("sw-title");
    const swArtistEl = document.getElementById("sw-artist");

    if (currentTitle) currentTitle.textContent = name;
    if (currentArtist) currentArtist.textContent = artist;
    if (swTitleEl) swTitleEl.textContent = name;
    if (swArtistEl)
      swArtistEl.innerHTML =
        artist +
        ' <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--text-muted)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>';

    const imgObjs = song.image || song._raw?.image;
    const currentCover = document.getElementById("current-cover");
    if (imgObjs && imgObjs.length > 0 && currentCover) {
      let link = imgObjs[2]?.link || imgObjs[1]?.link || imgObjs[0]?.link;
      currentCover.innerHTML = `<img src="${wrapUrl(link)}" alt="" crossorigin="anonymous">`;
    }
  }

  let playlists = JSON.parse(localStorage.getItem("welkin_playlists")) || [
    {
      id: "default1",
      name: "Big TV",
      desc: "Enjoy vivid emotions with this stunning music album. Each track is a story.",
      image: "",
      songs: [],
    },
  ];

  function savePlaylists() {
    localStorage.setItem("welkin_playlists", JSON.stringify(playlists));
  }

  const playerHTML = `
        <div id="music-overlay" class="music-player-overlay">
            <div class="music-player-card">
                <div class="music-close-btn" id="music-close">&times;</div>
                <div class="music-left">
                    <div class="music-cover-large" id="current-cover">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>
                    </div>
                    <div class="music-song-title" id="current-title">Not Playing</div>
                    <div class="music-song-artist" id="current-artist">Search for a song</div>
                    
                    <div class="music-controls">
                        <div class="music-btn" id="music-prev"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></div>
                        <div class="music-btn music-btn-play" id="music-play-pause">
                            <svg id="play-icon" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                            <svg id="pause-icon" style="display:none" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                        </div>
                        <div class="music-btn" id="music-next"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg></div>
                        <div class="music-btn" id="music-repeat" title="Repeat"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" id="repeat-icon-svg"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path><text x="12" y="15" font-size="8" fill="currentColor" id="repeat-one-text" style="display:none">1</text></svg></div>
                        <div class="music-btn" id="music-download" title="Download"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg></div>
                    </div>

                    <div class="music-progress-container">
                        <div class="music-progress-bar" id="progress-bar">
                            <div class="music-progress-current" id="progress-current"></div>
                        </div>
                        <div class="music-time">
                            <span id="time-current">0:00</span>
                            <span id="time-total">0:00</span>
                        </div>
                    </div>
                </div>

                <div class="music-right">
                    <div class="music-tabs">
                        <button class="music-tab active" id="tab-search">Search</button>
                        <button class="music-tab" id="tab-playlists">Playlists</button>
                    </div>
                    
                    <div id="view-search" class="music-view active">
                        <div class="music-search-container">
                            <svg class="music-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            <input type="text" class="music-search-input" id="music-search" placeholder="Search for songs, artists...">
                        </div>
                        <div class="music-results" id="music-results-list"></div>
                    </div>

                    <div id="view-playlists" class="music-view">
                        <div id="playlists-list-container">
                            <button id="create-playlist-btn" class="music-create-btn">+ New Playlist</button>
                            <div class="music-results" id="playlists-list"></div>
                        </div>
                        <div id="playlist-detail-container" style="display:none">
                            <button id="back-to-playlists" class="music-back-btn">&larr; Back</button>
                            <div id="playlist-detail-content" class="music-results"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

  const sidebarWidgetHTML = `
        <div class="sidebar-widget-inner" id="sidebar-widget-inner">
            <div class="sw-details">
                <div class="sw-title" id="sw-title">Welkin Music</div>
                <div class="sw-artist" id="sw-artist">Select a song <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg></div>
            </div>
            
            <div class="sw-controls">
                <button class="sw-btn" id="sw-prev"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line></svg></button>
                <button class="sw-btn sw-play" id="sw-playpause">
                    <svg id="sw-play-icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                    <svg id="sw-pause-icon" style="display:none" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>
                </button>
                <button class="sw-btn" id="sw-next"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line></svg></button>
            </div>
            
            <div class="sw-progress-wrap">
                <span class="sw-time" id="sw-time-el">0:00</span>
                <div class="sw-progress" id="sw-progress-bg">
                    <div class="sw-progress-fill" id="sw-progress-fill"></div>
                </div>
                <span class="sw-time" id="sw-time-total-el">-0:00</span>
            </div>
            
            <div class="sw-right-controls">
                <button class="sw-btn" id="sw-repeat" style="margin-right:4px; opacity:0.5;" title="Repeat"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 1l4 4-4 4"></path><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><path d="M7 23l-4-4 4-4"></path><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg></button>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                <input type="range" class="sw-vol" id="sw-vol" min="0" max="1" step="0.01" value="1">
                <button class="sw-expand" id="sw-expand"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"></path></svg></button>
            </div>
        </div>
    `;

  function initSidebarWidget() {
    const swContainer = document.getElementById("sidebar-music-widget");
    if (swContainer && !swContainer.querySelector(".sidebar-widget-inner")) {
      swContainer.innerHTML = sidebarWidgetHTML;
      swContainer.style.display = "block";
      attachSidebarWidgetListeners();
    }
  }

  const observer = new MutationObserver(() => {
    initSidebarWidget();
  });
  if (document.documentElement) {
    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
    initSidebarWidget();
  }

  function attachSidebarWidgetListeners() {
    const musicToggle = document.getElementById("music-toggle");
    if (musicToggle) {
      musicToggle.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.toggleMusic) window.toggleMusic();
        if (window.closeSidebar) window.closeSidebar();
      });
    }

    const swExpand = document.getElementById("sw-expand");
    if (swExpand) {
      swExpand.onclick = () => {
        if (window.closeSidebar) window.closeSidebar();
        document.getElementById("music-overlay")?.classList.add("open");
      };
    }

    const swPlayPause = document.getElementById("sw-playpause");
    const swNext = document.getElementById("sw-next");
    const swPrev = document.getElementById("sw-prev");
    const swVol = document.getElementById("sw-vol");
    const swProgressBg = document.getElementById("sw-progress-bg");

    if (swPlayPause) {
      swPlayPause.onclick = () => {
        if (!audio.src) return;
        if (audio.paused) {
          audio.play();
          window.__updateSwPlayIcon(true);
        } else {
          audio.pause();
          window.__updateSwPlayIcon(false);
        }
      };
    }
    if (swNext) {
      swNext.onclick = () => {
        if (currentIndex < currentSongs.length - 1) {
          window.__playSong(currentIndex + 1);
        }
      };
    }
    if (swPrev) {
      swPrev.onclick = () => {
        if (currentIndex > 0) {
          window.__playSong(currentIndex - 1);
        }
      };
    }

    if (swVol) {
      swVol.oninput = (e) => {
        audio.volume = e.target.value;
      };
    }

    if (swProgressBg) {
      swProgressBg.onclick = (e) => {
        const width = swProgressBg.clientWidth;
        const clickX = e.offsetX;
        if (audio.duration)
          audio.currentTime = (clickX / width) * audio.duration;
      };
    }

    const swRepeat = document.getElementById("sw-repeat");
    if (swRepeat) {
      swRepeat.onclick = () => window.__toggleRepeat();
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.body.insertAdjacentHTML("beforeend", playerHTML);
    setTimeout(restoreMusicState, 100);

    const overlay = document.getElementById("music-overlay");
    const searchInput = document.getElementById("music-search");
    const resultsList = document.getElementById("music-results-list");
    const playPauseBtn = document.getElementById("music-play-pause");
    const playIcon = document.getElementById("play-icon");
    const pauseIcon = document.getElementById("pause-icon");
    const nextBtn = document.getElementById("music-next");
    const prevBtn = document.getElementById("music-prev");
    const progressBar = document.getElementById("progress-bar");
    const progressCurrent = document.getElementById("progress-current");
    const timeCurrent = document.getElementById("time-current");
    const timeTotal = document.getElementById("time-total");
    const currentCover = document.getElementById("current-cover");
    const currentTitle = document.getElementById("current-title");
    const currentArtist = document.getElementById("current-artist");

    const tabSearch = document.getElementById("tab-search");
    const tabPlaylists = document.getElementById("tab-playlists");
    const viewSearch = document.getElementById("view-search");
    const viewPlaylists = document.getElementById("view-playlists");

    tabSearch.onclick = () => {
      tabSearch.classList.add("active");
      tabPlaylists.classList.remove("active");
      viewSearch.classList.add("active");
      viewPlaylists.classList.remove("active");
    };
    tabPlaylists.onclick = () => {
      tabPlaylists.classList.add("active");
      tabSearch.classList.remove("active");
      viewPlaylists.classList.add("active");
      viewSearch.classList.remove("active");
      renderPlaylistsList();
    };

    const plListC = document.getElementById("playlists-list-container");
    const plDetailC = document.getElementById("playlist-detail-container");
    const plList = document.getElementById("playlists-list");
    const plDetailContent = document.getElementById("playlist-detail-content");

    document.getElementById("back-to-playlists").onclick = () => {
      plDetailC.style.display = "none";
      plListC.style.display = "block";
      renderPlaylistsList();
    };

    document.getElementById("create-playlist-btn").onclick = () => {
      const name = prompt("Enter playlist name:");
      if (name && name.trim()) {
        playlists.push({
          id: "pl_" + Date.now(),
          name: name.trim(),
          desc: "Created by you",
          image: "",
          songs: [],
        });
        savePlaylists();
        renderPlaylistsList();
      }
    };

    function renderPlaylistsList() {
      plList.innerHTML = "";
      if (playlists.length === 0) {
        plList.innerHTML =
          '<div style="color:var(--text-muted); text-align:center; padding:20px;">No playlists yet</div>';
        return;
      }
      playlists.forEach((pl) => {
        const item = document.createElement("div");
        item.className = "music-item";
        const img = pl.image
          ? wrapUrl(pl.image)
          : "https://placehold.co/50x50/1e6cc7/ffffff?text=PL";
        item.innerHTML = `
                    <img class="music-item-img" src="${img}" alt="" crossorigin="anonymous">
                    <div class="music-item-info">
                        <div class="music-item-title">${cleanHtml(pl.name)}</div>
                        <div class="music-item-subtitle">${pl.songs.length} songs</div>
                    </div>
                `;
        item.onclick = () => showPlaylistDetail(pl);
        plList.appendChild(item);
      });
    }

    function showPlaylistDetail(pl) {
      plListC.style.display = "none";
      plDetailC.style.display = "block";
      let html = `<div class="pl-title" style="font-size:18px; font-weight:600; margin-bottom:16px;">${cleanHtml(pl.name)}</div>`;
      if (pl.songs.length === 0) {
        html +=
          '<div style="color:var(--text-muted); text-align:center; padding:20px;">Empty Playlist</div>';
      } else {
        pl.songs.forEach((s, idx) => {
          html += `
                        <div class="pl-track" data-idx="${idx}">
                            <img class="pl-track-img" src="${wrapUrl(s.cover)}" crossorigin="anonymous">
                            <div class="pl-track-info">
                                <div class="pl-track-name">${cleanHtml(s.name)}</div>
                                <div class="pl-track-artist">${cleanHtml(s.artist)}</div>
                            </div>
                            <div class="pl-track-dur">${cleanHtml(s.duration)}</div>
                            <div class="pl-track-rm" data-idx="${idx}">&times;</div>
                        </div>
                    `;
        });
      }
      plDetailContent.innerHTML = html;

      plDetailContent.querySelectorAll(".pl-track-rm").forEach((rm) => {
        rm.onclick = (e) => {
          e.stopPropagation();
          const i = parseInt(rm.getAttribute("data-idx"));
          pl.songs.splice(i, 1);
          savePlaylists();
          showPlaylistDetail(pl);
        };
      });

      plDetailContent.querySelectorAll(".pl-track").forEach((tr) => {
        tr.onclick = (e) => {
          if (e.target.classList.contains("pl-track-rm")) return;
          const idx = parseInt(tr.getAttribute("data-idx"));
          currentSongs = pl.songs.map((s) => s._raw || s);
          if (currentSongs[idx]) {
            playSong(idx);
          } else {
            currentSongs = pl.songs;
            playSong(idx);
          }
        };
      });
    }

    window.toggleMusic = function () {
      overlay.classList.add("open");
    };

    document.addEventListener("click", (e) => {
      if (e.target.id === "music-close" || e.target === overlay) {
        overlay.classList.remove("open");
      }
    });

    let searchTimeout;

    window.triggerMusicSearch = (query) => {
      searchInput.value = query;
      searchInput.dispatchEvent(new Event("input"));
    };

    // Scroll indicator removed - now using native scrollbar

    window.openArtistProfile = async (artistName) => {
      clearTimeout(searchTimeout);
      resultsList.innerHTML =
        '<div style="text-align:center; padding: 20px; opacity: 0.5;">Loading profile...</div>';
      try {
        const searchRes = await fetch(
          wrapUrl(
            `${MUSIC_API}/search/artists?query=${encodeURIComponent(artistName)}`,
          ),
        ).then((r) => r.json());
        const artistId = searchRes?.data?.results?.[0]?.id;
        if (!artistId) throw new Error("Artist not found");

        const [infoRes, songsRes, albumsRes] = await Promise.all([
          fetch(wrapUrl(`${MUSIC_API}/artists?id=${artistId}`)).then((r) =>
            r.json(),
          ),
          fetch(wrapUrl(`${MUSIC_API}/artists/${artistId}/songs?page=1`)).then(
            (r) => r.json(),
          ),
          fetch(wrapUrl(`${MUSIC_API}/artists/${artistId}/albums?page=1`)).then(
            (r) => r.json(),
          ),
        ]);

        const info = infoRes.data;
        const songs = songsRes.data.results || [];
        const albums = albumsRes.data.results || [];

        const img =
          info.image[2]?.link ||
          info.image[1]?.link ||
          info.image[0]?.link ||
          "";

        let html = `
          <div style="padding: 10px; padding-bottom: 30px;">
            <button onclick="window.triggerMusicSearch('')" class="music-back-btn" style="margin-bottom: 20px;">&larr; Back to Search</button>
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
              <img src="${wrapUrl(img)}" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
              <div>
                <h2 style="margin: 0 0 8px 0; font-size: 24px; color: white;">${cleanHtml(info.name)}</h2>
                <div style="font-size: 13px; color: var(--text-muted);">${Number(info.followerCount || info.fanCount || 0).toLocaleString()} Followers</div>
              </div>
            </div>
            
            <h3 style="margin: 0 0 16px 0; font-size: 16px; color: white; font-weight: 700;">Top Songs</h3>
            <div id="artist-songs-list" style="margin-bottom: 24px;"></div>
            
            <h3 style="margin: 0 0 16px 0; font-size: 16px; color: white; font-weight: 700;">Top Albums</h3>
            <div class="music-scroll-wrapper" style="position: relative;">
                <button class="music-scroll-btn left" onclick="window.scrollMusicSection(this, 'left')">&lsaquo;</button>
                <div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 12px;" class="scroll-container">
        `;

        albums.forEach((al) => {
          let alImg = Array.isArray(al.image)
            ? al.image[2]?.link || al.image[1]?.link
            : al.image;
          html += `
              <div class="startup-card" onclick="window.openAlbumProfile('${al.id}')">
                  <img src="${wrapUrl(alImg)}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                  <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${cleanHtml(al.name)}</div>
                  <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">${al.year || ""}</div>
              </div>
           `;
        });

        html += `</div>
                <button class="music-scroll-btn right" onclick="window.scrollMusicSection(this, 'right')">&rsaquo;</button>
            </div></div>`;
        resultsList.innerHTML = html;

        if (songs.length > 0) {
          renderSearchList(songs, document.getElementById("artist-songs-list"));
        } else {
          document.getElementById("artist-songs-list").innerHTML =
            '<div style="color:var(--text-muted); font-size:13px;">No songs found.</div>';
        }
      } catch (e) {
        console.error(e);
        resultsList.innerHTML =
          '<div style="text-align:center; padding: 20px; color: #ff6b6b;">Failed to load artist profile.</div>';
      }
    };

    window.openAlbumProfile = async (albumId) => {
      clearTimeout(searchTimeout);
      resultsList.innerHTML =
        '<div style="text-align:center; padding: 20px; opacity: 0.5;">Loading album...</div>';
      try {
        const res = await fetch(
          wrapUrl(`${MUSIC_API}/albums?id=${albumId}`),
        ).then((r) => r.json());
        if (res.status !== "SUCCESS") throw new Error("Album not found");

        const data = res.data;
        const songs = data.songs || [];
        const img =
          data.image[2]?.link ||
          data.image[1]?.link ||
          data.image[0]?.link ||
          "";

        let html = `
          <div style="padding: 10px; padding-bottom: 30px;">
            <button onclick="window.triggerMusicSearch('')" class="music-back-btn" style="margin-bottom: 20px;">&larr; Back</button>
            <div style="display: flex; align-items: center; gap: 20px; margin-bottom: 24px;">
              <img src="${wrapUrl(img)}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
              <div>
                <h2 style="margin: 0 0 8px 0; font-size: 24px; color: white;">${cleanHtml(data.name)}</h2>
                <div style="font-size: 13px; color: var(--text-muted);">${cleanHtml(data.primaryArtists || "")} &bull; ${data.year || ""} &bull; ${songs.length} songs</div>
                <button onclick="window.playSearchSong(new Event('click'), 0)" style="margin-top: 12px; background: var(--accent); color: white; border: none; padding: 6px 16px; border-radius: 20px; font-weight: bold; cursor: pointer;">Play Album</button>
              </div>
            </div>
            
            <h3 style="margin: 0 0 16px 0; font-size: 16px; color: white; font-weight: 700;">Songs</h3>
            <div id="album-songs-list" style="margin-bottom: 24px;"></div>
          </div>
        `;
        resultsList.innerHTML = html;

        if (songs.length > 0) {
          renderSearchList(songs, document.getElementById("album-songs-list"));
        } else {
          document.getElementById("album-songs-list").innerHTML =
            '<div style="color:var(--text-muted); font-size:13px;">No songs found.</div>';
        }
      } catch (e) {
        console.error(e);
        resultsList.innerHTML =
          '<div style="text-align:center; padding: 20px; color: #ff6b6b;">Failed to load album.</div>';
      }
    };

    function renderStartupView() {
      resultsList.innerHTML = `
        <div style="padding: 10px;">
            <h3 style="margin: 0 0 16px 0; font-size: 16px; color: white; font-weight: 700;">Featured Artists</h3>
            <div class="music-scroll-wrapper" style="margin-bottom: 24px; position: relative;">
                <button class="music-scroll-btn left" onclick="window.scrollMusicSection(this, 'left')">&lsaquo;</button>
                <div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 12px; scroll-snap-type: x mandatory; scroll-behavior: smooth;" class="scroll-container">
                    <div class="startup-card" onclick="window.openArtistProfile('Kanye West')">
                        <img src="${wrapUrl("https://i.scdn.co/image/ab6761610000e5eb867008a971fae0f4d913f63a")}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; text-align: center; margin-top: 8px; color: white;">Kanye West</div>
                    </div>
                    <div class="startup-card" onclick="window.openArtistProfile('The Weeknd')">
                        <img src="${wrapUrl("https://i.scdn.co/image/ab6761610000e5eb214f3cf1cbe7139c1e26ffbb")}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; text-align: center; margin-top: 8px; color: white;">The Weeknd</div>
                    </div>
                    <div class="startup-card" onclick="window.openArtistProfile('Travis Scott')">
                        <img src="${wrapUrl("https://i.scdn.co/image/ab6761610000e5eb19c2790744c792d05570bb71")}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; text-align: center; margin-top: 8px; color: white;">Travis Scott</div>
                    </div>
                    <div class="startup-card" onclick="window.openArtistProfile('Kendrick Lamar')">
                        <img src="${wrapUrl("https://i.scdn.co/image/ab6761610000e5eb437b9e2a82505b3d93ff1022")}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; text-align: center; margin-top: 8px; color: white;">Kendrick Lamar</div>
                    </div>
                    <div class="startup-card" onclick="window.openArtistProfile('Playboi Carti')">
                        <img src="${wrapUrl("https://i.scdn.co/image/ab6761610000e5ebfc20c30950392cb3b9a528fa")}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; text-align: center; margin-top: 8px; color: white;">Playboi Carti</div>
                    </div>
                </div>
                <button class="music-scroll-btn right" onclick="window.scrollMusicSection(this, 'right')">&rsaquo;</button>
            </div>

            <h3 style="margin: 0 0 16px 0; font-size: 16px; color: white; font-weight: 700;">Premade Albums</h3>
            <div class="music-scroll-wrapper" style="position: relative;">
                <button class="music-scroll-btn left" onclick="window.scrollMusicSection(this, 'left')">&lsaquo;</button>
                <div style="display: flex; gap: 20px; overflow-x: auto; padding-bottom: 12px; scroll-snap-type: x mandatory; scroll-behavior: smooth;" class="scroll-container">
                    <div class="startup-card" onclick="window.openAlbumProfile('1945440')">
                        <img src="${wrapUrl("https://upload.wikimedia.org/wikipedia/en/7/70/Graduation_%28album%29.jpg")}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">Graduation</div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Kanye West</div>
                    </div>
                    <div class="startup-card" onclick="window.openAlbumProfile('1117886')">
                        <img src="${wrapUrl("https://upload.wikimedia.org/wikipedia/en/f/f0/My_Beautiful_Dark_Twisted_Fantasy.jpg")}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">MBDTF</div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Kanye West</div>
                    </div>
                    <div class="startup-card" onclick="window.openAlbumProfile('3002873')">
                        <img src="${wrapUrl("https://upload.wikimedia.org/wikipedia/en/4/4d/The_life_of_pablo_alternate.jpg")}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">The Life of Pablo</div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Kanye West</div>
                    </div>
                    <div class="startup-card" onclick="window.openAlbumProfile('13569498')">
                        <img src="${wrapUrl("https://upload.wikimedia.org/wikipedia/en/0/0b/Astroworld_by_Travis_Scott.jpg")}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">ASTROWORLD</div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Travis Scott</div>
                    </div>
                    <div class="startup-card" onclick="window.openAlbumProfile('1229836')">
                        <img src="${wrapUrl("https://upload.wikimedia.org/wikipedia/en/f/f6/Kendrick_Lamar_-_To_Pimp_a_Butterfly.png")}" style="width: 100px; height: 100px; border-radius: 12px; object-fit: cover; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" crossorigin="anonymous">
                        <div style="font-size: 13px; font-weight: 600; margin-top: 8px; color: white; width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">TPAB</div>
                        <div style="font-size: 12px; color: var(--text-muted); margin-top: 2px;">Kendrick Lamar</div>
                    </div>
                </div>
                <button class="music-scroll-btn right" onclick="window.scrollMusicSection(this, 'right')">&rsaquo;</button>
            </div>
        </div>
      `;
    }

    renderStartupView();

    searchInput.addEventListener("input", () => {
      clearTimeout(searchTimeout);
      const query = searchInput.value.trim();
      if (query.length < 2) {
        renderStartupView();
        return;
      }

      searchTimeout = setTimeout(async () => {
        resultsList.innerHTML =
          '<div style="text-align:center; padding: 20px; opacity: 0.5;">Searching...</div>';
        try {
          const [songsRes, artistsRes, albumsRes] = await Promise.all([
            fetch(
              wrapUrl(
                `${MUSIC_API}/search/songs?query=${encodeURIComponent(query)}&limit=10`,
              ),
            ),
            fetch(
              wrapUrl(
                `${MUSIC_API}/search/artists?query=${encodeURIComponent(query)}&limit=10`,
              ),
            ),
            fetch(
              wrapUrl(
                `${MUSIC_API}/search/albums?query=${encodeURIComponent(query)}&limit=10`,
              ),
            ),
          ]);

          const songsData = await songsRes.json();
          const artistsData = await artistsRes.json();
          const albumsData = await albumsRes.json();

          let html = "";

          if (artistsData?.data?.results?.length > 0) {
            html += '<div style="margin-bottom: 20px;">';
            html +=
              '<div style="font-size: 14px; font-weight: 600; color: var(--text-muted); margin-bottom: 12px;">Artists</div>';
            artistsData.data.results.forEach((artist) => {
              const img =
                artist.image?.[2]?.link ||
                artist.image?.[1]?.link ||
                artist.image?.[0]?.link ||
                "";
              html += `
                <div class="music-item" onclick="window.openArtistProfile('${artist.name}')" style="cursor: pointer;">
                  <img class="music-item-img" src="${wrapUrl(img)}" alt="" crossorigin="anonymous" style="border-radius: 50%;">
                  <div class="music-item-info">
                    <div class="music-item-title">${cleanHtml(artist.name)}</div>
                    <div class="music-item-subtitle">${Number(artist.followerCount || artist.fanCount || 0).toLocaleString()} followers</div>
                  </div>
                </div>
              `;
            });
            html += "</div>";
          }

          if (albumsData?.data?.results?.length > 0) {
            html += '<div style="margin-bottom: 20px;">';
            html +=
              '<div style="font-size: 14px; font-weight: 600; color: var(--text-muted); margin-bottom: 12px;">Albums</div>';
            albumsData.data.results.forEach((album) => {
              const img =
                album.image?.[2]?.link ||
                album.image?.[1]?.link ||
                album.image?.[0]?.link ||
                "";
              html += `
                <div class="music-item" onclick="window.openAlbumProfile('${album.id}')" style="cursor: pointer;">
                  <img class="music-item-img" src="${wrapUrl(img)}" alt="" crossorigin="anonymous">
                  <div class="music-item-info">
                    <div class="music-item-title">${cleanHtml(album.name)}</div>
                    <div class="music-item-subtitle">${cleanHtml(album.artist || album.primaryArtists || "")}${album.year ? " • " + album.year : ""}</div>
                  </div>
                </div>
              `;
            });
            html += "</div>";
          }

          if (
            songsData?.status === "SUCCESS" &&
            songsData?.data?.results?.length > 0
          ) {
            html +=
              '<div style="font-size: 14px; font-weight: 600; color: var(--text-muted); margin-bottom: 12px;">Songs</div>';
            songsData.data.results.forEach((song, index) => {
              const imgUrl = wrapUrl(song.image[1].link);
              html += `
                <div class="music-item">
                  <div style="flex:1; display:flex; align-items:center; gap:16px;" onclick="window.playSearchSong(event, ${index})">
                    <img class="music-item-img" src="${imgUrl}" alt="" crossorigin="anonymous">
                    <div class="music-item-info">
                      <div class="music-item-title">${cleanHtml(song.name)}</div>
                      <div class="music-item-subtitle">${cleanHtml(song.primaryArtists)}</div>
                    </div>
                  </div>
                  <button class="music-item-add" data-str="${encodeURIComponent(JSON.stringify(song))}">+</button>
                </div>
              `;
            });
            window.__searchSongs = songsData.data.results;
          }

          if (!html) {
            html =
              '<div style="text-align:center; padding: 20px; color: var(--text-muted);">No results found</div>';
          }

          resultsList.innerHTML = html;
        } catch (err) {
          resultsList.innerHTML =
            '<div style="text-align:center; padding: 20px; color: #ff6b6b;">Error fetching results</div>';
        }
      }, 500);
    });

    let popupActive = null;
    document.addEventListener("click", (e) => {
      if (
        popupActive &&
        !e.target.closest(".music-add-popup") &&
        !e.target.closest(".music-item-add")
      ) {
        popupActive.remove();
        popupActive = null;
      }
    });

    function renderSearchList(songs, container = resultsList) {
      container.innerHTML = "";
      songs.forEach((song, index) => {
        const item = document.createElement("div");
        item.className = "music-item";
        const imgUrl = wrapUrl(song.image[1].link);
        item.innerHTML = `
                    <div style="flex:1; display:flex; align-items:center; gap:16px;" onclick="window.playSearchSong(event, ${index})">
                        <img class="music-item-img" src="${imgUrl}" alt="" crossorigin="anonymous">
                        <div class="music-item-info">
                            <div class="music-item-title">${cleanHtml(song.name)}</div>
                            <div class="music-item-subtitle">${cleanHtml(song.primaryArtists)}</div>
                        </div>
                    </div>
                    <button class="music-item-add" data-str="${encodeURIComponent(JSON.stringify(song))}">+</button>
                `;
        container.appendChild(item);
      });
      window.__searchSongs = songs;

      container.querySelectorAll(".music-item-add").forEach((btn) => {
        btn.onclick = (e) => {
          e.stopPropagation();
          if (popupActive) popupActive.remove();
          const popup = document.createElement("div");
          popup.className = "music-add-popup";
          let phtml =
            '<div style="font-size:12px; margin-bottom:8px; color:var(--text-muted)">Add to playlist:</div>';
          playlists.forEach((pl) => {
            phtml += `<div class="pl-option" data-plid="${pl.id}">${cleanHtml(pl.name)}</div>`;
          });
          popup.innerHTML = phtml;
          btn.parentElement.appendChild(popup);
          popupActive = popup;

          popup.querySelectorAll(".pl-option").forEach((opt) => {
            opt.onclick = () => {
              const plid = opt.getAttribute("data-plid");
              const pl = playlists.find((p) => p.id === plid);
              const song = JSON.parse(
                decodeURIComponent(btn.getAttribute("data-str")),
              );
              if (pl && song) {
                if (pl.songs.length === 0)
                  pl.image = song.image[2]?.link || song.image[1]?.link;
                pl.songs.push({
                  id: song.id,
                  name: song.name,
                  artist: song.primaryArtists,
                  cover: song.image[1].link,
                  duration: formatTime(song.duration || 0),
                  _raw: song,
                });
                savePlaylists();
                popup.remove();
                popupActive = null;
              }
            };
          });
        };
      });
    }

    window.playSearchSong = (e, idx) => {
      currentSongs = window.__searchSongs || [];
      playSong(idx);
    };

    function playSong(index) {
      if (!currentSongs || index < 0 || index >= currentSongs.length) return;
      currentIndex = index;
      const song = currentSongs[index];

      const name = cleanHtml(song.name || song._raw?.name);
      const artist = cleanHtml(
        song.primaryArtists || song._raw?.primaryArtists || song.artist,
      );
      const imgObjs = song.image || song._raw?.image;

      currentTitle.textContent = name;
      currentArtist.textContent = artist;

      const swTitleEl = document.getElementById("sw-title");
      const swArtistEl = document.getElementById("sw-artist");
      if (swTitleEl) swTitleEl.textContent = name;
      if (swArtistEl)
        swArtistEl.innerHTML =
          artist +
          ' <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--text-muted)"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></svg>';

      if (imgObjs && imgObjs.length > 0) {
        let link = imgObjs[2]?.link || imgObjs[1]?.link || imgObjs[0]?.link;
        const coverUrl = wrapUrl(link);
        currentCover.innerHTML = `<img src="${coverUrl}" alt="" crossorigin="anonymous">`;
      }

      const raw = song._raw || song;
      let originalUrl = "";
      if (raw.downloadUrl && raw.downloadUrl.length > 0) {
        originalUrl =
          raw.downloadUrl[4]?.link ||
          raw.downloadUrl[3]?.link ||
          raw.downloadUrl[2]?.link ||
          raw.downloadUrl[0]?.link;
      }

      audio.src = wrapUrl(originalUrl);
      audio.play();

      updatePlayIcon(true);
      saveMusicState();
    }

    function updatePlayIcon(isPlaying) {
      if (isPlaying) {
        playIcon.style.display = "none";
        pauseIcon.style.display = "block";
        const swPlayIconEl = document.getElementById("sw-play-icon");
        const swPauseIconEl = document.getElementById("sw-pause-icon");
        if (swPlayIconEl) swPlayIconEl.style.display = "none";
        if (swPauseIconEl) swPauseIconEl.style.display = "block";
      } else {
        playIcon.style.display = "block";
        pauseIcon.style.display = "none";
        const swPlayIconEl = document.getElementById("sw-play-icon");
        const swPauseIconEl = document.getElementById("sw-pause-icon");
        if (swPlayIconEl) swPlayIconEl.style.display = "block";
        if (swPauseIconEl) swPauseIconEl.style.display = "none";
      }
    }

    window.__playSong = playSong;
    window.__updateSwPlayIcon = updatePlayIcon;

    const handlePlayPause = () => {
      if (!audio.src) return;
      if (audio.paused) {
        audio.play();
        updatePlayIcon(true);
      } else {
        audio.pause();
        updatePlayIcon(false);
      }
      saveMusicState();
    };

    const handleNext = () => {
      if (currentIndex < currentSongs.length - 1) {
        playSong(currentIndex + 1);
      }
    };

    const handlePrev = () => {
      if (currentIndex > 0) {
        playSong(currentIndex - 1);
      }
    };

    playPauseBtn.onclick = handlePlayPause;
    nextBtn.onclick = handleNext;
    prevBtn.onclick = handlePrev;

    const repeatBtn = document.getElementById("music-repeat");
    const swRepeatBtn = document.getElementById("sw-repeat");
    const repeatOneText = document.getElementById("repeat-one-text");

    const toggleRepeat = () => {
      repeatMode = (repeatMode + 1) % 3;
      updateRepeatUI();
      saveMusicState();
    };

    function updateRepeatUI() {
      const rb = document.getElementById("music-repeat");
      const srb = document.getElementById("sw-repeat");
      const rot = document.getElementById("repeat-one-text");

      if (repeatMode === 0) {
        if (rb) {
          rb.style.color = "";
          rb.style.opacity = "0.5";
        }
        if (srb) {
          srb.style.color = "";
          srb.style.opacity = "0.5";
        }
        if (rot) rot.style.display = "none";
      } else if (repeatMode === 1) {
        if (rb) {
          rb.style.color = "var(--accent)";
          rb.style.opacity = "1";
        }
        if (srb) {
          srb.style.color = "var(--accent)";
          srb.style.opacity = "1";
        }
        if (rot) rot.style.display = "none";
      } else if (repeatMode === 2) {
        if (rb) {
          rb.style.color = "var(--accent)";
          rb.style.opacity = "1";
        }
        if (srb) {
          srb.style.color = "var(--accent)";
          srb.style.opacity = "1";
        }
        if (rot) rot.style.display = "block";
      }
    }

    if (repeatBtn) repeatBtn.onclick = toggleRepeat;
    window.__toggleRepeat = toggleRepeat;
    window.__updateRepeatUI = updateRepeatUI;

    const downloadBtn = document.getElementById("music-download");
    if (downloadBtn) {
      downloadBtn.onclick = () => {
        if (!audio.src) return;
        const currentSong = currentSongs[currentIndex];
        const raw = currentSong._raw || currentSong;
        let url = "";
        if (raw.downloadUrl && raw.downloadUrl.length > 0) {
          url =
            raw.downloadUrl[4]?.link ||
            raw.downloadUrl[3]?.link ||
            raw.downloadUrl[2]?.link ||
            raw.downloadUrl[0]?.link ||
            "";
        }
        if (url) {
          const name =
            cleanHtml(currentSong.name || "song").replace(
              /[^a-zA-Z0-9]/g,
              "_",
            ) + ".mp3";
          const a = document.createElement("a");
          a.href = wrapUrl(url);
          a.download = name;
          a.target = "_blank";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        }
      };
    }

    audio.ontimeupdate = () => {
      const progress = (audio.currentTime / audio.duration) * 100 || 0;
      progressCurrent.style.width = `${progress}%`;
      timeCurrent.textContent = formatTime(audio.currentTime);
      timeTotal.textContent = formatTime(audio.duration || 0);

      const swProgressFillEl = document.getElementById("sw-progress-fill");
      const swTimeEl = document.getElementById("sw-time-el");
      const swTimeTotalEl = document.getElementById("sw-time-total-el");
      if (swProgressFillEl) swProgressFillEl.style.width = `${progress}%`;
      if (swTimeEl) swTimeEl.textContent = formatTime(audio.currentTime);
      if (swTimeTotalEl) {
        const rem = (audio.duration || 0) - audio.currentTime;
        swTimeTotalEl.textContent = "-" + formatTime(rem > 0 ? rem : 0);
      }
    };

    setInterval(() => {
      if (audio.src && !audio.paused) {
        saveMusicState();
      }
    }, 5000);

    progressBar.onclick = (e) => {
      const width = progressBar.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;
      audio.currentTime = (clickX / width) * duration;
      saveMusicState();
    };

    let isDragging = false;
    progressBar.onmousedown = () => {
      isDragging = true;
    };
    document.onmouseup = () => {
      isDragging = false;
    };
    document.onmousemove = (e) => {
      if (!isDragging || !audio.duration) return;
      const rect = progressBar.getBoundingClientRect();
      let x = e.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      audio.currentTime = (x / rect.width) * audio.duration;
    };

    audio.onended = () => {
      if (repeatMode === 2) {
        // Repeat One
        audio.currentTime = 0;
        audio.play();
      } else if (repeatMode === 1) {
        // Repeat All
        if (currentIndex < currentSongs.length - 1) {
          playSong(currentIndex + 1);
        } else {
          playSong(0);
        }
      } else {
        // No Repeat
        if (currentIndex < currentSongs.length - 1) {
          playSong(currentIndex + 1);
        } else {
          updatePlayIcon(false);
        }
      }
      saveMusicState();
    };

    window.addEventListener("beforeunload", () => {
      saveMusicState();
    });
  });
})();
