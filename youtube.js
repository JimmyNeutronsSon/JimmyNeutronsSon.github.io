/**
 * WELKIN YOUTUBE — Unrestricted YouTube Embedder
 * Based on Norepted (wea-f/Norepted)
 */

(function() {
    // --- Norepted Functionality ---
    function extractVideoId(url) {
        const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/|youtube\.com\/shorts\/)([^"&?\/\s]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null;
    }

    function toggleCloak() {
        document.title = "Google";
        let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = 'https://www.google.com/favicon.ico';
        document.getElementsByTagName('head')[0].appendChild(link);
        console.log('Cloak activated.');
    }

    function clearHistory() {
        // Norepted feature: closes players and clears history (as much as JS can)
        const players = document.querySelectorAll('.yt-player-container');
        players.forEach(p => p.remove());
        console.log('Players cleared.');
    }

    // --- Popup Design (Welkin Style) ---
    const popupHTML = `
        <div id="yt-overlay" class="music-player-overlay">
            <div class="music-player-card yt-card">
                <div class="music-close-btn" id="yt-close">&times;</div>
                <div class="yt-header">
                    <div class="yt-title">YouTube <span style="font-weight: 300;">Unrestricted</span></div>
                    <div class="yt-cloak-hint">Press [ ' ] to Cloak | [ - ] to Clear</div>
                </div>
                
                <div class="yt-search-section">
                    <div class="yt-search-bar-wrap">
                        <svg class="music-search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        <input type="text" class="music-search-input" id="yt-url-input" placeholder="Paste YouTube URL or Video ID..." style="margin: 0; border: none; background: transparent;">
                        <button id="yt-load-btn" class="yt-btn">Load Video</button>
                    </div>
                </div>

                <div id="yt-player-container" class="yt-player-area">
                    <div class="yt-empty-state">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        <p>Enter a URL above to start watching</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    const popupCSS = `
        .yt-card {
            flex-direction: column !important;
            padding: 40px;
            gap: 24px;
            width: 1000px !important;
            max-width: 95vw;
            height: 700px !important;
            max-height: 90vh;
        }
        .yt-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 5px;
        }
        .yt-title {
            font-size: 32px;
            font-weight: 800;
            color: #fff;
            font-family: 'Outfit', sans-serif;
            letter-spacing: -1px;
        }
        .yt-cloak-hint {
            font-size: 11px;
            color: rgba(255,255,255,0.3);
            letter-spacing: 1px;
            text-transform: uppercase;
            margin-bottom: 8px;
        }
        .yt-search-section {
            width: 100%;
        }
        .yt-search-bar-wrap {
            display: flex;
            align-items: center;
            background: rgba(255, 255, 255, 0.08);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: 16px;
            padding: 6px;
            padding-left: 20px;
            position: relative;
            transition: all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
            box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .yt-search-bar-wrap:focus-within {
            background: rgba(255, 255, 255, 0.12);
            border-color: rgba(58, 143, 224, 0.5);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3), 0 0 0 4px rgba(58, 143, 224, 0.1);
        }
        .yt-search-bar-wrap .music-search-icon {
            opacity: 0.5;
            flex-shrink: 0;
        }
        .yt-search-bar-wrap .music-search-input {
            flex: 1;
            padding-left: 15px !important;
            font-size: 15px;
        }
        .yt-btn {
            background: #3A8FE0;
            border: none;
            color: white;
            padding: 10px 24px;
            border-radius: 12px;
            cursor: pointer;
            font-weight: 700;
            font-size: 14px;
            transition: all 0.2s;
            white-space: nowrap;
            box-shadow: 0 4px 15px rgba(58, 143, 224, 0.3);
        }
        .yt-btn:hover {
            transform: scale(1.02);
            box-shadow: 0 6px 20px rgba(58, 143, 224, 0.4);
        }
        .yt-btn:active {
            transform: scale(0.98);
        }
        .yt-player-area {
            flex: 1;
            background: rgba(0,0,0,0.4);
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: inset 0 2px 15px rgba(0,0,0,0.6);
            border: 1px solid rgba(255,255,255,0.05);
        }
        .yt-empty-state {
            text-align: center;
            opacity: 0.3;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 15px;
        }
        .yt-iframe {
            width: 100%;
            height: 100%;
            border: none;
        }
    `;

    function init() {
        // Inject CSS
        const style = document.createElement('style');
        style.textContent = popupCSS;
        document.head.appendChild(style);

        // Inject HTML
        document.body.insertAdjacentHTML('beforeend', popupHTML);

        const overlay = document.getElementById('yt-overlay');
        const closeBtn = document.getElementById('yt-close');
        const loadBtn = document.getElementById('yt-load-btn');
        const input = document.getElementById('yt-url-input');
        const container = document.getElementById('yt-player-container');

        window.toggleYouTube = () => {
            overlay.classList.add('open');
            overlay.style.display = 'flex';
            setTimeout(() => overlay.style.opacity = '1', 10);
        };

        const closePopup = () => {
            overlay.style.opacity = '0';
            setTimeout(() => {
                overlay.classList.remove('open');
                overlay.style.display = 'none';
                // Stop video on close
                container.innerHTML = `
                    <div class="yt-empty-state">
                        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.2)" stroke-width="2"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                        <p>Enter a URL above to start watching</p>
                    </div>
                `;
            }, 300);
        };

        closeBtn.onclick = closePopup;
        overlay.onclick = (e) => { if (e.target === overlay) closePopup(); };

        loadBtn.onclick = () => {
            const url = input.value.trim();
            const videoId = extractVideoId(url) || url;
            
            if (videoId.length === 11 || videoId.length > 11) {
                const finalId = extractVideoId(url) || videoId;
                container.innerHTML = `
                    <iframe 
                        class="yt-iframe"
                        src="https://www.youtube-nocookie.com/embed/${finalId}?autoplay=1&origin=${window.location.origin}" 
                        allow="autoplay; encrypted-media; picture-in-picture" 
                        allowfullscreen>
                    </iframe>
                `;
            } else {
                alert("Invalid YouTube URL or ID");
            }
        };

        input.onkeydown = (e) => {
            if (e.key === 'Enter') loadBtn.click();
        };

        // Hotkeys from Norepted
        document.addEventListener('keydown', (e) => {
            if (document.activeElement.tagName === 'INPUT') return;

            if (e.key === "'") {
                e.preventDefault();
                toggleCloak();
            }
            if (e.key === "-") {
                e.preventDefault();
                clearHistory();
                closePopup();
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
