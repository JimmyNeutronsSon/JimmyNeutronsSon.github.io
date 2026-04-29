(async function () {
  try {
    if (typeof registerSW === "function") {
      await registerSW();
    }
  } catch (e) {
    console.warn("SW not registered", e);
  }

  const PLAYER_COLOR = "1E6CC7";

  const SERVERS = {
    vidsrc: {
      name: "VidSrc",
      movie: (id) => `https://vidsrc.cc/v2/embed/movie/${id}`,
      tv: (id, season, ep) =>
        `https://vidsrc.cc/v2/embed/tv/${id}/${season}/${ep}`,
    },
    vidsrcme: {
      name: "VidSrcMe",
      movie: (id) => `https://vidsrc.me/embed/movie/${id}`,
      tv: (id, season, ep) =>
        `https://vidsrc.me/embed/tv/${id}/${season}/${ep}`,
    },
    autoembed: {
      name: "AutoEmbed",
      movie: (id) => `https://autoembed.co/movie/tmdb-${id}`,
      tv: (id, season, ep) =>
        `https://autoembed.co/tv/tmdb-${id}/${season}/${ep}`,
    },
    smashystream: {
      name: "SmashyStream",
      movie: (id) => `https://embed.smashystream.com/movie/${id}`,
      tv: (id, season, ep) =>
        `https://embed.smashystream.com/tv/${id}/${season}/${ep}`,
    },
    embed2: {
      name: "2Embed",
      movie: (id) => `https://www.2embed.cc/embed/${id}`,
      tv: (id, season, ep) =>
        `https://www.2embed.cc/embed-tv/${id}/${season}/${ep}`,
    },
    superembed: {
      name: "SuperEmbed",
      movie: (id) => `https://www.superembed.stream/embed/movie/${id}`,
      tv: (id, season, ep) =>
        `https://www.superembed.stream/embed/tv/${id}/${season}/${ep}`,
    },
  };

  const SERVER_KEYS = Object.keys(SERVERS);
  let currentServerIndex = 0;

  function getServer() {
    const select = document.getElementById("server-select");
    const key = select ? select.value : SERVER_KEYS[currentServerIndex];
    return SERVERS[key] || SERVERS[SERVER_KEYS[0]];
  }

  function getNextServer() {
    currentServerIndex = (currentServerIndex + 1) % SERVER_KEYS.length;
    const nextKey = SERVER_KEYS[currentServerIndex];
    const select = document.getElementById("server-select");
    if (select) select.value = nextKey;
    return SERVERS[nextKey];
  }

  function imgUrl(path, size) {
    if (!path) return "";
    const s = size || "w500";
    return `/api/img/tmdb?size=${encodeURIComponent(s)}&path=${encodeURIComponent(path)}`;
  }

  async function api(path) {
    const res = await fetch(path);
    const text = await res.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch {
      data = { raw: text };
    }
    if (!res.ok) {
      const err = new Error(data.error || res.statusText || "Request failed");
      err.status = res.status;
      err.data = data;
      throw err;
    }
    return data;
  }

  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

  const els = {
    configError: $("#movies-config-error"),
    heroBg: $("#hero-bg"),
    heroKicker: $("#hero-kicker"),
    heroTitle: $("#hero-title"),
    heroOverview: $("#hero-overview"),
    heroDots: $("#hero-dots"),
    heroPlay: $("#hero-play"),
    heroMore: $("#hero-more"),
    top10: $("#top10-track"),
    trendingRow: $("#trending-row"),
    popularRow: $("#popular-row"),
    topratedRow: $("#toprated-row"),
    tvRow: $("#tv-row"),
    genreChips: $("#genre-chips"),
    genreRow: $("#genre-row"),
    searchInput: $("#movies-search-q"),
    searchDrop: $("#movies-search-results"),
    detailModal: $("#detail-modal"),
    detailBackdrop: $("#detail-backdrop"),
    detailPoster: $("#detail-poster"),
    detailTitle: $("#detail-title"),
    detailMeta: $("#detail-meta"),
    detailOverview: $("#detail-overview"),
    detailPlay: $("#detail-play"),
    playerModal: $("#player-modal"),
    playerTitle: $("#player-title"),
    playerFrameWrap: $(".movies-player-frame"),
  };

  let activePlayerFrame = null;

  let genreById = new Map();
  let heroItems = [];
  let heroIndex = 0;
  let heroTimer = null;
  let detailContext = { type: "movie", id: null };
  let searchTimer = null;

  function showConfigError() {
    els.configError.hidden = false;
  }

  function yearFromDate(d) {
    if (!d) return "—";
    return String(d).slice(0, 4);
  }

  function genreNames(ids) {
    if (!ids || !ids.length) return "";
    return ids
      .map((id) => genreById.get(id))
      .filter(Boolean)
      .slice(0, 3)
      .join(" · ");
  }

  function stars(v) {
    if (v == null) return "—";
    return `${v.toFixed(1)}/10`;
  }

  function cardHtml(item, type) {
    const title =
      type === "tv" ? item.name || "Untitled" : item.title || "Untitled";
    const date = type === "tv" ? item.first_air_date : item.release_date;
    const poster = imgUrl(item.poster_path, "w500");
    const meta = `${stars(item.vote_average)} · ${yearFromDate(date)}`;
    return `
      <article class="movies-card" data-type="${type}" data-id="${item.id}">
        <div class="movies-card-poster-wrap">
          ${
            poster
              ? `<img src="${poster}" alt="" class="movies-card-poster" loading="lazy" width="150" height="225" />`
              : `<div class="movies-card-poster movies-card-poster--empty"></div>`
          }
          <div class="movies-card-hover">
            <span class="movies-card-play" aria-hidden="true">▶</span>
          </div>
        </div>
        <h3 class="movies-card-title">${escapeHtml(title)}</h3>
        <p class="movies-card-meta">${escapeHtml(meta)}</p>
      </article>`;
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/"/g, "&quot;");
  }

  function renderRow(container, results, type) {
    if (!container) return;
    const list = (results && results.results) || [];
    container.innerHTML = list
      .slice(0, 20)
      .map((item) => cardHtml(item, type))
      .join("");
  }

  function renderTop10(results) {
    const list = (results && results.results) || [];
    els.top10.innerHTML = list
      .slice(0, 10)
      .map((item, i) => {
        const title = escapeHtml(item.title || "");
        const poster = imgUrl(item.poster_path, "w185");
        return `
        <a href="#" class="movies-top10-item" data-type="movie" data-id="${item.id}">
          <span class="movies-top10-rank">${i + 1}</span>
          ${
            poster
              ? `<img src="${poster}" alt="" width="120" height="180" loading="lazy" />`
              : `<div class="movies-top10-ph"></div>`
          }
          <span class="movies-top10-title">${title}</span>
        </a>`;
      })
      .join("");
  }

  function setHero(i) {
    if (!heroItems.length) return;
    heroIndex = (i + heroItems.length) % heroItems.length;
    const m = heroItems[heroIndex];
    const title = m.title || "";
    const y = yearFromDate(m.release_date);
    const genres = genreNames(m.genre_ids);
    els.heroKicker.textContent = [stars(m.vote_average), y, genres]
      .filter(Boolean)
      .join(" · ");
    els.heroTitle.textContent = title;
    els.heroOverview.textContent =
      m.overview || "No overview available for this title.";
    const bg = imgUrl(m.backdrop_path, "w1280");
    els.heroBg.style.backgroundImage = bg ? `url('${bg}')` : "none";
    $$(".movies-hero-dot").forEach((d, idx) =>
      d.classList.toggle("active", idx === heroIndex),
    );
  }

  function buildHeroDots() {
    els.heroDots.innerHTML = heroItems
      .map(
        (_, idx) =>
          `<button type="button" class="movies-hero-dot${idx === 0 ? " active" : ""}" role="tab" aria-label="Slide ${idx + 1}"></button>`,
      )
      .join("");
    els.heroDots.querySelectorAll(".movies-hero-dot").forEach((btn, idx) => {
      btn.addEventListener("click", () => {
        setHero(idx);
        resetHeroTimer();
      });
    });
  }

  function resetHeroTimer() {
    if (heroTimer) clearInterval(heroTimer);
    heroTimer = setInterval(() => setHero(heroIndex + 1), 10000);
  }

  async function openDetail(type, id) {
    detailContext = { type, id };
    detailContext.tmdbData = null;
    try {
      const path =
        type === "tv" ? `/api/tmdb/tv/${id}` : `/api/tmdb/movie/${id}`;
      const d = await api(path);
      detailContext.tmdbData = d;
      const title = type === "tv" ? d.name : d.title;
      const date = type === "tv" ? d.first_air_date : d.release_date;
      const genreLine =
        (d.genres && d.genres.map((g) => g.name).join(" · ")) ||
        genreNames(d.genre_ids || []);
      els.detailTitle.textContent = title;
      els.detailMeta.textContent = [
        stars(d.vote_average),
        yearFromDate(date),
        genreLine,
      ]
        .filter(Boolean)
        .join(" · ");
      els.detailOverview.textContent = d.overview || "No overview available.";
      els.detailPoster.src = imgUrl(d.poster_path, "w500") || "";
      els.detailPoster.alt = title;
      const b = imgUrl(d.backdrop_path, "w780");
      els.detailBackdrop.style.backgroundImage = b ? `url('${b}')` : "none";
      els.detailModal.hidden = false;
      document.body.style.overflow = "hidden";
    } catch (e) {
      console.error(e);
      alert("Could not load details.");
    }
  }

  function closeDetail() {
    els.detailModal.hidden = true;
    document.body.style.overflow = "";
  }

  function reloadPlayer() {
    if (!activePlayerFrame || !detailContext.id) return;
    const server = getServer();
    const url =
      detailContext.type === "tv"
        ? server.tv(detailContext.id, 1, 1)
        : server.movie(detailContext.id);
    activePlayerFrame.src = url;
    els.playerTitle.textContent = `${detailContext.title} (${server.name})`;
  }

  function closePlayer() {
    els.playerModal.hidden = true;
    if (activePlayerFrame) {
      activePlayerFrame.remove();
      activePlayerFrame = null;
    }
    els.playerFrameWrap.innerHTML = "";
    document.body.style.overflow = "";
  }

  function openPlayer(type, id, title) {
    detailContext = { type, id, title };
    const server = getServer();
    els.playerTitle.textContent = `${title} (${server.name})`;

    if (activePlayerFrame) {
      activePlayerFrame.remove();
      activePlayerFrame = null;
    }
    els.playerFrameWrap.innerHTML = "";

    // Show episode selector for TV shows
    const epSelector = document.getElementById("episode-selector");
    const playerInfo = document.getElementById("player-info");
    if (type === "tv" && detailContext.tmdbData) {
      epSelector.hidden = false;
      populateEpisodes(detailContext.tmdbData);
      playerInfo.textContent = detailContext.tmdbData.overview || "";
      playerInfo.hidden = false;
    } else {
      epSelector.hidden = true;
      playerInfo.hidden = false;
      const d = detailContext.tmdbData;
      playerInfo.textContent = d ? d.overview || "" : "";
    }

    const url = type === "tv" ? server.tv(id, 1, 1) : server.movie(id);

    const frame = document.createElement("iframe");
    frame.id = "video-player-frame";
    frame.title = "Video player";
    frame.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "no-referrer";
    frame.sandbox =
      "allow-scripts allow-same-origin allow-presentation allow-popups";
    frame.src = url;
    els.playerFrameWrap.appendChild(frame);

    activePlayerFrame = frame;

    els.playerModal.hidden = false;
    document.body.style.overflow = "hidden";
  }

  function populateEpisodes(tvData) {
    const seasonSelect = document.getElementById("season-select");
    const episodeSelect = document.getElementById("episode-select");
    seasonSelect.innerHTML = "";
    episodeSelect.innerHTML = "";

    (tvData.seasons || []).forEach((season) => {
      if (season.season_number < 1) return;
      const opt = document.createElement("option");
      opt.value = season.season_number;
      opt.textContent = season.name || `Season ${season.season_number}`;
      seasonSelect.appendChild(opt);
    });

    seasonSelect.onchange = () => loadEpisodes(tvData, seasonSelect.value);
    if (seasonSelect.options.length > 0) {
      loadEpisodes(tvData, seasonSelect.value);
    }
  }

  async function loadEpisodes(tvData, seasonNum) {
    const episodeSelect = document.getElementById("episode-select");
    episodeSelect.innerHTML = "<option>Loading...</option>";

    try {
      const seasonData = await api(
        `/api/tmdb/tv/${tvData.id}/season/${seasonNum}`,
      );
      episodeSelect.innerHTML = "";
      (seasonData.episodes || []).forEach((ep) => {
        const opt = document.createElement("option");
        opt.value = ep.episode_number;
        opt.textContent = `E${ep.episode_number} - ${ep.name}`;
        episodeSelect.appendChild(opt);
      });
      episodeSelect.onchange = () =>
        playEpisode(tvData.id, seasonNum, episodeSelect.value);
    } catch {
      episodeSelect.innerHTML = "<option>Error loading</option>";
    }
  }

  function playEpisode(id, season, episode) {
    if (!activePlayerFrame) return;
    const server = getServer();
    const url = server.tv(id, season, episode);
    activePlayerFrame.src = url;
    const title = detailContext.title;
    els.playerTitle.textContent = `${title} (${server.name})`;
  }

  function playFromDetail() {
    const { type, id } = detailContext;
    if (!id) return;
    const title = els.detailTitle.textContent;
    closeDetail();
    openPlayer(type, id, title);
  }

  document.addEventListener("click", (e) => {
    const card = e.target.closest(".movies-card");
    if (card) {
      e.preventDefault();
      openDetail(card.dataset.type, card.dataset.id);
      return;
    }
    const t10 = e.target.closest(".movies-top10-item");
    if (t10) {
      e.preventDefault();
      openDetail(t10.dataset.type, t10.dataset.id);
    }
  });

  els.heroPlay.addEventListener("click", () => {
    if (!heroItems.length) return;
    const m = heroItems[heroIndex];
    openPlayer("movie", m.id, m.title);
  });

  els.heroMore.addEventListener("click", () => {
    if (!heroItems.length) return;
    const m = heroItems[heroIndex];
    openDetail("movie", m.id);
  });

  els.detailPlay.addEventListener("click", playFromDetail);

  $$("[data-close-modal]").forEach((el) =>
    el.addEventListener("click", closeDetail),
  );
  $$("[data-close-player]").forEach((el) =>
    el.addEventListener("click", closePlayer),
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (!els.playerModal.hidden) closePlayer();
      else if (!els.detailModal.hidden) closeDetail();
    }
  });

  async function loadGenres() {
    const data = await api("/api/tmdb/genre/movie/list");
    genreById = new Map((data.genres || []).map((g) => [g.id, g.name]));
    els.genreChips.innerHTML = (data.genres || [])
      .slice(0, 12)
      .map(
        (g) =>
          `<button type="button" class="movies-chip" data-genre-id="${g.id}">${escapeHtml(g.name)}</button>`,
      )
      .join("");
  }

  async function loadGenreRow(genreId) {
    const data = await api(
      `/api/tmdb/discover/movie?with_genres=${encodeURIComponent(genreId)}&sort_by=popularity.desc`,
    );
    renderRow(els.genreRow, data, "movie");
  }

  els.genreChips.addEventListener("click", (e) => {
    const btn = e.target.closest(".movies-chip");
    if (!btn) return;
    $$(".movies-chip").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    loadGenreRow(btn.dataset.genreId);
  });

  $$(".movies-tab[data-trend]").forEach((tab) => {
    tab.addEventListener("click", async () => {
      $$(".movies-tab[data-trend]").forEach((t) =>
        t.classList.remove("active"),
      );
      tab.classList.add("active");
      const kind = tab.dataset.trend;
      try {
        const path =
          kind === "tv"
            ? "/api/tmdb/trending/tv/day"
            : "/api/tmdb/trending/movie/day";
        const data = await api(path);
        renderRow(els.trendingRow, data, kind === "tv" ? "tv" : "movie");
      } catch (err) {
        console.error(err);
      }
    });
  });

  $$(".movies-tab[data-top]").forEach((tab) => {
    tab.addEventListener("click", async () => {
      $$(".movies-tab[data-top]").forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const kind = tab.dataset.top;
      try {
        const path =
          kind === "tv"
            ? "/api/tmdb/tv/top_rated"
            : "/api/tmdb/movie/top_rated";
        const data = await api(path);
        renderRow(els.topratedRow, data, kind === "tv" ? "tv" : "movie");
      } catch (err) {
        console.error(err);
      }
    });
  });

  function runSearch(q) {
    if (!q || q.length < 2) {
      els.searchDrop.hidden = true;
      return;
    }
    Promise.all([
      api(`/api/tmdb/search/movie?query=${encodeURIComponent(q)}&page=1`),
      api(`/api/tmdb/search/tv?query=${encodeURIComponent(q)}&page=1`),
    ])
      .then(([movies, tv]) => {
        const mv = (movies.results || []).slice(0, 6);
        const tvr = (tv.results || []).slice(0, 6);
        const blocks = [];
        if (mv.length) {
          blocks.push("<p class='movies-search-label'>Movies</p>");
          blocks.push(
            mv
              .map(
                (m) =>
                  `<button type="button" class="movies-search-item" data-type="movie" data-id="${m.id}">${escapeHtml(m.title)} <span>${yearFromDate(m.release_date)}</span></button>`,
              )
              .join(""),
          );
        }
        if (tvr.length) {
          blocks.push("<p class='movies-search-label'>TV</p>");
          blocks.push(
            tvr
              .map(
                (m) =>
                  `<button type="button" class="movies-search-item" data-type="tv" data-id="${m.id}">${escapeHtml(m.name)} <span>${yearFromDate(m.first_air_date)}</span></button>`,
              )
              .join(""),
          );
        }
        if (!blocks.length) {
          els.searchDrop.innerHTML =
            "<p class='movies-search-empty'>No results</p>";
        } else {
          els.searchDrop.innerHTML = blocks.join("");
        }
        els.searchDrop.hidden = false;
      })
      .catch(() => {
        els.searchDrop.innerHTML =
          "<p class='movies-search-empty'>Search unavailable</p>";
        els.searchDrop.hidden = false;
      });
  }

  els.searchInput.addEventListener("input", () => {
    clearTimeout(searchTimer);
    const q = els.searchInput.value.trim();
    searchTimer = setTimeout(() => runSearch(q), 320);
  });

  els.searchInput.addEventListener("blur", () => {
    setTimeout(() => {
      els.searchDrop.hidden = true;
    }, 200);
  });

  els.searchDrop.addEventListener("mousedown", (e) => {
    const item = e.target.closest(".movies-search-item");
    if (!item) return;
    e.preventDefault();
    els.searchInput.value = "";
    els.searchDrop.hidden = true;
    openDetail(item.dataset.type, item.dataset.id);
  });

  async function init() {
    try {
      await loadGenres();
      const trending = await api("/api/tmdb/trending/movie/day");
      heroItems = (trending.results || []).slice(0, 6);
      if (heroItems.length) {
        buildHeroDots();
        setHero(0);
        resetHeroTimer();
      }
      renderTop10(trending);
      renderRow(els.trendingRow, trending, "movie");

      const popular = await api("/api/tmdb/movie/popular");
      renderRow(els.popularRow, popular, "movie");

      const topRated = await api("/api/tmdb/movie/top_rated");
      renderRow(els.topratedRow, topRated, "movie");

      const tvPop = await api("/api/tmdb/tv/popular");
      renderRow(els.tvRow, tvPop, "tv");

      const firstGenre = els.genreChips.querySelector(".movies-chip");
      if (firstGenre) {
        firstGenre.classList.add("active");
        await loadGenreRow(firstGenre.dataset.genreId);
      }
    } catch (e) {
      if (e.status === 503) showConfigError();
      console.error(e);
    }
  }

  init();

  const serverSelect = document.getElementById("server-select");
  if (serverSelect) {
    serverSelect.addEventListener("change", reloadPlayer);
  }
})();
