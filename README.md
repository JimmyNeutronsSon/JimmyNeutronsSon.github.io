# Welkin

A modern, all-in-one web platform combining streaming, browsing, gaming, and AI tools — all in one place.

## Features

- **Cinema** — Stream movies and TV shows with automatic server fallback
- **Browser** — Web proxy with Scramjet for bypassing restrictions, featuring a multi-tab architecture and instant AI shortcuts (ChatGPT, Gemini, Claude)
- **Music** — A beautiful, React-based Music Webplayer (`memusic-webplayer`) featuring global proxy-routing, JioSaavn integration, rotating 3D hero albums (carousel) at a 2s interval, and proxied synced lyrics via LRCLIB
- **Games Vault** — Over 1,600+ proxy-ready HTML games, Flash emulators, and Retro Bowl setups all served locally from the `vault/` directory. Games now launch in dedicated Gamebar popups for a seamless multi-tasking experience.
- **AI Assistant** — NVIDIA NIM-powered chat assistant natively integrated
- **Soundboard** — Audio clips and sound effects via the Gamebar
- **Mini-Player** — Specialized compact mode for the music player when used within the Gamebar, now featuring an integrated search bar
- **Bookmarklet Overlay** — A portable "Game Bar" that can be injected into any website by dragging the cloud icon on the landing page to your bookmarks bar

## Tech Stack

- **Frontend**: Vanilla JS, HTML5, CSS3, React.js (for Music), TailwindCSS
- **Backend**: Fastify (Node.js)
- **Proxy**: Scramjet + Wisp + BareMux
- **APIs**: TMDB, JioSaavn, NVIDIA NIM

## Quick Start

```bash
# Clone and install
git clone https://github.com/JimmyNeutronsSon/JimmyNeutronsSon.github.io.git
cd JimmyNeutronsSon.github.io
npm install

# Build the Music Webplayer
cd memusic-webplayer
npm install
npm run build
cd ..

# Add TMDB API key
echo TMDB_API_KEY=your_key_here > .env

# Start server
npm start
```

Server runs at `http://localhost:8080` (or `5000` by default).

## Streaming Sources

Automatically tries multiple sources with fallback:

- VidSrc, VidSrcMe, AutoEmbed, SmashyStream, 2Embed, SuperEmbed

## Deploy to Render

1. Fork this repo
2. Create new Web Service on Render
3. Add environment variable: `TMDB_API_KEY`
4. The backend server automatically serves the React webplayer `dist/` directory without complex routing setups.
5. Deploy — auto-detects `render.yaml`

## Project Structure

```
├── src/index.js                 # Fastify backend server
├── memusic-webplayer/           # React codebase for Music
├── vault/                       # 1,600+ game files and emulators
├── movies.js                    # Cinema logic
├── browse.js                    # Proxy browser with tabs
├── ai.js                        # AI assistant
├── sw.js                        # Service worker (Scramjet)
├── render.yaml                  # Render config
└── .env                         # API keys (gitignored)
```

## License

GNU Affero General Public License v3.0
