/**
 * WELKIN MUSIC V2 — Premium Experience
 * Glassmorphic Drawer, Rotating Art, Discovery Focused
 */

(function() {
    // --- Styles ---
    const style = document.createElement('style');
    style.textContent = `
        .music-v2-drawer {
            position: fixed;
            top: 0;
            right: -450px;
            width: 450px;
            height: 100vh;
            background: rgba(11, 30, 61, 0.42);
            backdrop-filter: blur(40px);
            -webkit-backdrop-filter: blur(40px);
            border-left: 1px solid rgba(255, 255, 255, 0.12);
            z-index: 10000;
            transition: right 0.6s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            flex-direction: column;
            box-shadow: -20px 0 50px rgba(0,0,0,0.4);
            color: #fff;
            font-family: 'Inter', sans-serif;
        }

        .music-v2-drawer.open {
            right: 0;
        }

        .music-v2-header {
            padding: 40px 30px 20px 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .music-v2-title {
            font-family: 'Outfit', sans-serif;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -1px;
        }

        .music-v2-close {
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.1);
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s;
            font-size: 20px;
        }

        .music-v2-close:hover {
            background: rgba(255,255,255,0.15);
            transform: rotate(90deg);
        }

        .music-v2-content {
            flex: 1;
            overflow-y: auto;
            padding: 0 30px 40px 30px;
            display: flex;
            flex-direction: column;
            gap: 30px;
        }

        /* Search Section */
        .v2-search-wrap {
            position: relative;
        }

        .v2-search-input {
            width: 100%;
            background: rgba(255,255,255,0.08);
            border: 1px solid rgba(255,255,255,0.15);
            border-radius: 16px;
            padding: 14px 20px 14px 48px;
            color: #fff;
            outline: none;
            font-size: 15px;
            transition: all 0.3s;
        }

        .v2-search-input:focus {
            background: rgba(255,255,255,0.12);
            border-color: rgba(58,143,224,0.5);
            box-shadow: 0 0 0 4px rgba(58,143,224,0.1);
        }

        .v2-search-icon {
            position: absolute;
            left: 18px;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0.5;
        }

        /* Player Section */
        .v2-player-card {
            background: rgba(255,255,255,0.05);
            border-radius: 24px;
            padding: 30px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
            border: 1px solid rgba(255,255,255,0.08);
        }

        .v2-art-container {
            position: relative;
            width: 220px;
            height: 220px;
        }

        .v2-art {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 15px 35px rgba(0,0,0,0.5);
            transition: transform 0.5s;
        }

        .v2-art.playing {
            animation: rotateArt 20s linear infinite;
        }

        @keyframes rotateArt {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .v2-track-info {
            margin-top: 10px;
        }

        .v2-track-name {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
        }

        .v2-artist-name {
            font-size: 14px;
            opacity: 0.6;
        }

        /* Controls */
        .v2-controls {
            display: flex;
            align-items: center;
            gap: 25px;
            margin-top: 10px;
        }

        .v2-btn {
            background: transparent;
            border: none;
            color: #fff;
            cursor: pointer;
            opacity: 0.8;
            transition: all 0.2s;
        }

        .v2-btn:hover {
            opacity: 1;
            transform: scale(1.1);
        }

        .v2-play-toggle {
            width: 64px;
            height: 64px;
            background: #fff;
            color: #0B1E3D;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        /* Progress Bar */
        .v2-progress-container {
            width: 100%;
            height: 4px;
            background: rgba(255,255,255,0.1);
            border-radius: 2px;
            cursor: pointer;
            position: relative;
            margin-top: 20px;
        }

        .v2-progress-fill {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            background: #fff;
            border-radius: 2px;
            width: 0%;
        }

        /* Results */
        .v2-results {
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .v2-result-item {
            display: flex;
            align-items: center;
            gap: 15px;
            padding: 12px;
            border-radius: 16px;
            background: rgba(255,255,255,0.03);
            cursor: pointer;
            transition: all 0.3s;
        }

        .v2-result-item:hover {
            background: rgba(255,255,255,0.08);
            transform: translateX(5px);
        }

        .v2-res-img {
            width: 50px;
            height: 50px;
            border-radius: 10px;
            object-fit: cover;
        }

        .v2-res-info {
            flex: 1;
        }

        .v2-res-name {
            font-weight: 600;
            font-size: 14px;
            margin-bottom: 2px;
        }

        .v2-res-artist {
            font-size: 12px;
            opacity: 0.5;
        }
    \`;
    document.head.appendChild(style);

    // --- HTML ---
    const drawerHTML = \`
        <div id="music-v2-drawer" class="music-v2-drawer">
            <div class="music-v2-header">
                <div class="music-v2-title">Discovery</div>
                <div class="music-v2-close" id="v2-close-btn">&times;</div>
            </div>
            
            <div class="music-v2-content">
                <div class="v2-search-wrap">
                    <svg class="v2-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <input type="text" class="v2-search-input" id="v2-search-input" placeholder="Search artists, songs, podcasts...">
                </div>

                <div class="v2-player-card">
                    <div class="v2-art-container">
                        <img src="assets/thumbnails.png" class="v2-art" id="v2-art">
                    </div>
                    <div class="v2-track-info">
                        <div class="v2-track-name" id="v2-track-name">No Track Playing</div>
                        <div class="v2-artist-name" id="v2-artist-name">Select a song to start</div>
                    </div>
                    <div class="v2-controls">
                        <button class="v2-btn" id="v2-prev">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6 6h2v12H6zm3.5 6 8.5 6V6z"></path></svg>
                        </button>
                        <button class="v2-btn v2-play-toggle" id="v2-play">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" id="v2-play-icon"><path d="M8 5v14l11-7z"></path></svg>
                        </button>
                        <button class="v2-btn" id="v2-next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="m6 18 8.5-6L6 6zM16 6h2v12h-2z"></path></svg>
                        </button>
                    </div>
                    <div class="v2-progress-container" id="v2-progress-container">
                        <div class="v2-progress-fill" id="v2-progress-fill"></div>
                    </div>
                </div>

                <div class="v2-results" id="v2-results">
                    <!-- Search results injected here -->
                </div>
            </div>
        </div>
    \`;
    document.body.insertAdjacentHTML('beforeend', drawerHTML);

    // --- State & Logic ---
    const API_BASE = "https://jiosaavn-api-privatecvc2.vercel.app";
    let currentAudio = new Audio();
    let isPlaying = false;

    const drawer = document.getElementById('music-v2-drawer');
    const closeBtn = document.getElementById('v2-close-btn');
    const searchInput = document.getElementById('v2-search-input');
    const resultsContainer = document.getElementById('v2-results');
    const playBtn = document.getElementById('v2-play');
    const playIcon = document.getElementById('v2-play-icon');
    const trackName = document.getElementById('v2-track-name');
    const artistName = document.getElementById('v2-artist-name');
    const artImg = document.getElementById('v2-art');
    const progressFill = document.getElementById('v2-progress-fill');

    window.toggleDiscovery = () => {
        drawer.classList.add('open');
    };

    closeBtn.onclick = () => {
        drawer.classList.remove('open');
    };

    // Proxy helper
    const proxy = (url) => \`/proxy?url=\${encodeURIComponent(url)}\`;

    async function search(query) {
        if (!query) return;
        try {
            const res = await fetch(proxy(\`\${API_BASE}/search/songs?query=\${encodeURIComponent(query)}\`));
            const data = await res.json();
            renderResults(data.data.results || []);
        } catch (e) { console.error(e); }
    }

    function renderResults(songs) {
        resultsContainer.innerHTML = songs.map(song => \`
            <div class="v2-result-item" onclick="playSong('\${song.id}')">
                <img src="\${song.image[1].link}" class="v2-res-img">
                <div class="v2-res-info">
                    <div class="v2-res-name">\${song.name}</div>
                    <div class="v2-res-artist">\${song.primaryArtists}</div>
                </div>
            </div>
        \`).join('');
    }

    window.playSong = async (id) => {
        try {
            const res = await fetch(proxy(\`\${API_BASE}/songs?id=\${id}\`));
            const data = await res.json();
            const song = data.data[0];

            currentAudio.src = song.downloadUrl[4].link;
            currentAudio.play();
            
            trackName.innerText = song.name;
            artistName.innerText = song.primaryArtists;
            artImg.src = song.image[2].link;
            
            isPlaying = true;
            updatePlayUI();
        } catch (e) { console.error(e); }
    };

    function updatePlayUI() {
        if (isPlaying) {
            playIcon.innerHTML = '<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"></path>';
            artImg.classList.add('playing');
        } else {
            playIcon.innerHTML = '<path d="M8 5v14l11-7z"></path>';
            artImg.classList.remove('playing');
        }
    }

    playBtn.onclick = () => {
        if (isPlaying) {
            currentAudio.pause();
        } else {
            currentAudio.play();
        }
        isPlaying = !isPlaying;
        updatePlayUI();
    };

    currentAudio.ontimeupdate = () => {
        const pct = (currentAudio.currentTime / currentAudio.duration) * 100;
        progressFill.style.width = \`\${pct}%\`;
    };

    searchInput.onkeydown = (e) => {
        if (e.key === 'Enter') search(searchInput.value);
    };

})();
