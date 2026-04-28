/**
 * Welkin Vault Logic - V3 Refined (Scoped Classes)
 */

const VAULT_PATH = 'vault/'; 
let heroRotationIndex = 0;
let heroGames = [];

function parseVaultGames() {
  if (typeof games === 'undefined') {
    console.error('Vault games data not found.');
    return [];
  }

  const parser = new DOMParser();
  const doc = parser.parseFromString(games, 'text/html');
  const links = doc.querySelectorAll('.game-link');
  
  const parsed = Array.from(links).map(link => {
    const nameDiv = link.querySelector('div');
    const imgTag = link.querySelector('img');
    
    const name = nameDiv ? nameDiv.innerText.trim() : 'Unknown Game';
    let file = link.getAttribute('href');
    const img = imgTag ? imgTag.getAttribute('src') : '';
    
    // Fix for FNAF/Candy's games
    const fnafFixes = {
      'fnaf.html': "Five Nights at Freddy's.html",
      'fnaf2.html': "Five Nights at Freddy's 2.html",
      'fnaf3.html': "Five Nights at Freddy's 3.html",
      'fnaf4.html': "Five Nights at Freddy's 4.html",
      'fnafworld.html': "Five Nights at Freddy's World.html",
      'fivenightsatcandys.html': "Five Nights at Candy's.html",
      'fivenightsatcandys2.html': "Five Nights at Candy's 2.html"
    };

    for (let key in fnafFixes) {
      if (file.endsWith(key)) {
        file = 'gamefiles/' + fnafFixes[key];
        break;
      }
    }

    return {
      name: name,
      file: VAULT_PATH + file,
      img: VAULT_PATH + img,
      desc: generateDescription(name),
      tags: generateTags(name)
    };
  });

  return parsed.sort((a, b) => a.name.localeCompare(b.name));
}

function generateDescription(name) {
  const descriptions = {
    "Minecraft": "Build, explore, and survive in the ultimate block-based sandbox.",
    "Hollow Knight": "Explore a vast ruined kingdom of insects and heroes.",
    "Undertale": "The RPG where you don't have to kill anyone.",
    "Five Nights at Freddy's": "Can you survive five nights at the world's scariest pizzeria?",
    "FNAF": "Survival horror mystery at Freddy Fazbear's.",
    "Candy's": "A fan-favorite survival horror inspired by the Fazbear legacy."
  };
  for (let key in descriptions) {
    if (name.includes(key)) return descriptions[key];
  }
  return `Play ${name} on Welkin.`;
}

function generateTags(name) {
  const tagMap = {
    "Minecraft": ["Sandbox", "Survival"],
    "Undertale": ["RPG", "Indie"],
    "Doom": ["FPS", "Retro"],
    "Pokemon": ["RPG", "Classic"],
    "FNAF": ["Horror", "Survival"],
    "Five Nights": ["Horror", "Survival"],
    "Candy's": ["Horror", "Survival"],
    "Sonic": ["Platformer", "Action"],
    "GTA": ["Action", "Open World"],
    "Tetris": ["Puzzle", "Classic"],
    "Retro Bowl": ["Sports", "Arcade"]
  };
  for (let key in tagMap) {
    if (name.toLowerCase().includes(key.toLowerCase())) return tagMap[key];
  }
  return ["Arcade", "Action"];
}

function initVault() {
  const allGames = parseVaultGames();
  const popularList = document.querySelector('.vlt-library-list');
  
  if (allGames.length === 0) return;

  window.allVaultGames = allGames;

  const popularSelection = ["Hollow Knight", "Minecraft 1.21.4", "Undertale", "Five Nights at Freddy's", "Cuphead", "Doom", "Retro Bowl"];
  const popularGames = allGames.filter(g => popularSelection.some(p => g.name.includes(p))).slice(0, 5);
  heroGames = allGames.filter(g => popularSelection.some(p => g.name.includes(p)));

  if (popularList) {
    popularList.innerHTML = popularGames.map(game => {
      const escapedName = game.name.replace(/'/g, "\\'");
      const escapedFile = game.file.replace(/'/g, "\\'");
      return `
        <div class="vlt-trending-item" onclick="launchGame('${escapedName}', '${escapedFile}')">
          <div class="vlt-ti-icon">
            <img src="${game.img}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;" onerror="this.src='assets/thumbnails.png'">
          </div>
          <div style="min-width:0">
            <div class="vlt-ti-name">${game.name}</div>
            <div class="vlt-ti-sub">${game.tags[0]}</div>
          </div>
          <div class="vlt-ti-arrow">›</div>
        </div>
      `;
    }).join('');
  }

  setupHeroRotation();
  renderGames(allGames);
}

function setupHeroRotation() {
  if (heroGames.length === 0) return;
  updateHeroCard();
  setInterval(() => {
    heroRotationIndex = (heroRotationIndex + 1) % heroGames.length;
    updateHeroCard();
  }, 8000); // Rotate every 8 seconds
}

function updateHeroCard() {
  const game = heroGames[heroRotationIndex];
  const title = document.querySelector('.vlt-hero-title');
  const desc = document.querySelector('.vlt-hero-desc');
  const label = document.querySelector('.vlt-hero-art-label');
  const artEmoji = document.querySelector('.vlt-hero-art-emoji');
  const artBg = document.querySelector('.vlt-hero-art');
  const playBtn = document.querySelector('.vlt-btn-primary');

  if (!game || !title) return;

  const escapedName = game.name.replace(/'/g, "\\'");
  const escapedFile = game.file.replace(/'/g, "\\'");

  title.innerText = game.name;
  desc.innerText = game.desc;
  label.innerText = game.tags.join(' · ');
  artEmoji.style.display = 'none'; // Hide emoji when using actual covers
  
  // Set the cover as background with a nice gradient overlay
  artBg.style.background = `linear-gradient(135deg, rgba(30,108,199,0.3), rgba(11,30,61,0.8)), url('${game.img}')`;
  artBg.style.backgroundSize = 'cover';
  artBg.style.backgroundPosition = 'center';

  playBtn.onclick = () => launchGame(escapedName, escapedFile);
}

function renderGames(gamesToRender) {
  const vaultGrid = document.getElementById('gameGrid');
  if (!vaultGrid) return;

  const library = getLibrary();

  vaultGrid.innerHTML = gamesToRender.map(game => {
    const escapedName = game.name.replace(/'/g, "\\'");
    const escapedFile = game.file.replace(/'/g, "\\'");
    const isInLibrary = library.some(libGame => libGame.name === game.name);
    
    return `
      <div class="vlt-game-card" onclick="launchGame('${escapedName}', '${escapedFile}')">
        <button class="vlt-add-lib-btn ${isInLibrary ? 'active' : ''}" 
                onclick="event.stopPropagation(); toggleLibrary('${escapedName}')"
                title="${isInLibrary ? 'Remove from Library' : 'Add to Library'}">
          <i data-lucide="${isInLibrary ? 'bookmark-check' : 'bookmark'}"></i>
        </button>
        <div class="vlt-game-art">
          <img src="${game.img}" class="vlt-game-art-img" loading="lazy" onerror="this.src='assets/thumbnails.png'">
          <div class="vlt-game-art-overlay"></div>
        </div>
        <div class="vlt-game-card-body">
          <div class="vlt-game-name">${game.name}</div>
          <div class="vlt-game-genre">${game.tags[0]}</div>
        </div>
        <div class="vlt-game-card-footer">
          <div class="vlt-rating">★ 9.5</div>
          <div class="vlt-play-btn">▶</div>
        </div>
      </div>
    `;
  }).join('');
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function setFilterLogic(el, genre) {
  const allGames = window.allVaultGames || [];
  if (genre === 'All Games') {
    renderGames(allGames);
  } else {
    const filtered = allGames.filter(game => 
      game.tags.some(tag => tag.toLowerCase().includes(genre.toLowerCase())) ||
      game.name.toLowerCase().includes(genre.toLowerCase())
    );
    renderGames(filtered);
  }
}

function launchGame(name, url) {
  const modal = document.getElementById('gameModal');
  const iframe = document.getElementById('gameIframe');
  const title = document.getElementById('modalTitle');
  
  title.innerText = name;
  iframe.src = url;
  
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden'; 
}

function toggleFullscreen() {
  const modal = document.getElementById('gameModal');
  const icon = document.querySelector('[onclick="toggleFullscreen()"] i');
  
  if (!document.fullscreenElement) {
    modal.requestFullscreen().then(() => {
      modal.classList.add('vlt-fullscreen-active');
    }).catch(err => {
      console.warn(`Fullscreen error: ${err.message}`);
    });
    if (icon) icon.setAttribute('data-lucide', 'minimize');
  } else {
    document.exitFullscreen();
  }
  lucide.createIcons();
}

function closeModal() {
  const modal = document.getElementById('gameModal');
  const iframe = document.getElementById('gameIframe');
  
  if (document.fullscreenElement) {
    document.exitFullscreen();
  }
  
  modal.style.display = 'none';
  iframe.src = 'about:blank';
  document.body.style.overflow = 'auto';
}

// Global listeners
document.addEventListener('fullscreenchange', () => {
  const modal = document.getElementById('gameModal');
  const icon = document.querySelector('[onclick="toggleFullscreen()"] i');
  if (!document.fullscreenElement) {
    if (modal) modal.classList.remove('vlt-fullscreen-active');
    if (icon) {
      icon.setAttribute('data-lucide', 'maximize');
      lucide.createIcons();
    }
  }
});

// Search
const searchInput = document.getElementById('searchInput');
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase();
    const allGames = window.allVaultGames || [];
    const filtered = allGames.filter(game => 
      game.name.toLowerCase().includes(term) || 
      game.tags.some(tag => tag.toLowerCase().includes(term))
    );
    renderGames(filtered);
  });
}

// Library Logic
function getLibrary() {
  const lib = localStorage.getItem('welkin_game_library');
  return lib ? JSON.parse(lib) : [];
}

function saveLibrary(lib) {
  localStorage.setItem('welkin_game_library', JSON.stringify(lib));
}

function toggleLibrary(gameName) {
  let lib = getLibrary();
  const gameIndex = lib.findIndex(g => g.name === gameName);
  
  if (gameIndex > -1) {
    lib.splice(gameIndex, 1);
  } else {
    const game = window.allVaultGames.find(g => g.name === gameName);
    if (game) lib.push(game);
  }
  
  saveLibrary(lib);
  renderGames(window.allVaultGames); // Refresh main grid
  renderLibrary(); // Refresh library panel
}

function renderLibrary() {
  const libItems = document.getElementById('vlt-library-items');
  if (!libItems) return;
  
  const lib = getLibrary();
  
  if (lib.length === 0) {
    libItems.innerHTML = `
      <div class="vlt-empty-library">
         <i data-lucide="bookmark" style="width: 48px; height: 48px; opacity: 0.2; margin-bottom: 10px;"></i>
         <p>No games in your library yet.</p>
      </div>
    `;
  } else {
    libItems.innerHTML = lib.map(game => {
      const escapedName = game.name.replace(/'/g, "\\'");
      const escapedFile = game.file.replace(/'/g, "\\'");
      return `
        <div class="vlt-lib-item" onclick="launchGame('${escapedName}', '${escapedFile}')">
          <img src="${game.img}" class="vlt-lib-img" onerror="this.src='assets/thumbnails.png'">
          <div class="vlt-lib-info">
            <div class="vlt-lib-name">${game.name}</div>
            <div class="vlt-lib-tag">${game.tags[0]}</div>
          </div>
          <div class="vlt-lib-remove" onclick="event.stopPropagation(); toggleLibrary('${escapedName}')">
            <i data-lucide="trash-2" style="width:16px;height:16px;"></i>
          </div>
        </div>
      `;
    }).join('');
  }
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Library UI Controls
const libBtn = document.getElementById('library-btn');
const libPanel = document.getElementById('vlt-library-panel');
const libClose = document.querySelector('.vlt-close-library');

if (libBtn) {
  libBtn.onclick = () => {
    libPanel.classList.toggle('open');
    if (libPanel.classList.contains('open')) renderLibrary();
  };
}

if (libClose) {
  libClose.onclick = () => libPanel.classList.remove('open');
}

// Close library on escape or outside click
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && libPanel) libPanel.classList.remove('open');
});

// Exports
window.initVault = initVault;
window.launchGame = launchGame;
window.closeModal = closeModal;
window.toggleFullscreen = toggleFullscreen;
window.setFilterLogic = setFilterLogic;
window.toggleLibrary = toggleLibrary;
