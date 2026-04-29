# Welkin

A modern, all-in-one web platform combining streaming, browsing, gaming, and AI tools — all in one place.

## Features

- **Cinema** — Stream movies and TV shows with automatic server fallback
- **Browser** — Web proxy with Scramjet for bypassing restrictions
- **Music** — Stream music with Saavn integration
- **Games** — Retro bowl and puzzle games
- **AI Assistant** — NVIDIA NIM-powered chat assistant
- **Soundboard** — Audio clips and sound effects

## Tech Stack

- **Frontend**: Vanilla JS, HTML5, CSS3
- **Backend**: Fastify (Node.js)
- **Proxy**: Scramjet + Wisp + BareMux
- **APIs**: TMDB, Saavn, NVIDIA NIM

## Quick Start

```bash
# Clone and install
git clone https://github.com/JimmyNeutronsSon/JimmyNeutronsSon.github.io.git
cd JimmyNeutronsSon.github.io
npm install

# Add TMDB API key
echo TMDB_API_KEY=your_key_here > .env

# Start server
npm start
```

Server runs at `http://localhost:8080`

## Streaming Sources

Automatically tries multiple sources with fallback:

- VidSrc, VidSrcMe, AutoEmbed, SmashyStream, 2Embed, SuperEmbed

## Deploy to Render

1. Fork this repo
2. Create new Web Service on Render
3. Add environment variable: `TMDB_API_KEY`
4. Deploy — auto-detects `render.yaml`

## Project Structure

```
├── src/index.js          # Fastify server
├── movies.js             # Cinema logic
├── browse.js             # Proxy browser
├── music.js              # Music streaming
├── ai.js                 # AI assistant
├── sw.js                 # Service worker (Scramjet)
├── render.yaml           # Render config
└── .env                  # API keys (gitignored)
```

## License

GNU Affero General Public License v3.0
