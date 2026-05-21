/**
 * themes.js — Welkin Theme Engine
 * ═══════════════════════════════════════════════════════════════
 * Central theme definitions + live-apply logic.
 * Each theme adjusts: WebGL shaders, particles, ripples,
 * sun glow, heading glow, 3D cloud material, and CSS accents.
 *
 * Usage:
 *   window.welkinThemes.apply('crimson');
 *   window.welkinThemes.current();        // → 'crimson'
 *   window.welkinThemes.list();           // → [{id,name,emoji,desc,preview}, ...]
 */

(function () {
  "use strict";

  const STORAGE_KEY = "welkin-theme";

  // ══════════════════════════════════════════════════════════════
  //  THEME DEFINITIONS
  // ══════════════════════════════════════════════════════════════

  const THEMES = {
    welkin: {
      id: "welkin",
      name: "Welkin",
      emoji: "☁️",
      desc: "Deep blue stratosphere — the classic",
      preview: ["#0b1e3d", "#0a2d6e", "#1e6cc7", "#6cb4f0"],

      // Shader gradient colors (RGB 0–1)
      colorA: [0.020, 0.060, 0.180],
      colorB: [0.050, 0.130, 0.320],
      colorC: [0.010, 0.040, 0.130],
      colorD: [0.070, 0.200, 0.420],
      gradientSpeed: 0.12,
      distortion: 0.55,

      // Particles
      particleColor: [0.42, 0.71, 0.94],
      particleCount: 90,
      particleSpeed: 0.18,
      particleOpacity: 0.45,
      particleDrift: "random", // "random" | "up" | "down"

      // Ripples
      rippleColor: [0.36, 0.56, 0.88],

      // Sun glow (CSS radial-gradient stops)
      sunGlow: {
        core: "rgba(255, 255, 255, 0.55)",
        mid:  "rgba(220, 240, 255, 0.35)",
        outer: "rgba(140, 200, 255, 0.18)",
        halo: "rgba(180, 220, 255, 0.22)",
        haloMid: "rgba(80, 160, 255, 0.1)",
        corona: "rgba(255, 255, 255, 0.12)",
      },

      // Heading glow keyframes
      headingGlow: {
        from: "0 0 20px rgba(120,190,255,0.3), 0 0 50px rgba(100,160,255,0.15)",
        to:   "0 0 30px rgba(140,210,255,0.55), 0 0 70px rgba(100,175,255,0.28), 0 0 110px rgba(60,130,255,0.12)",
      },

      // 3D cloud
      cloudColor: 0x1e6cc7,
      cloudOpacity: 0.12,

      // CSS accent overrides
      accent: "#6cb4f0",
      accentHover: "#3a8fe0",
      bgGradient: "linear-gradient(180deg, #08152d 0%, #0b1f4d 40%, #102d73 100%)",

      // OBJ file for 3D model (null = use default cloud.obj)
      objFile: null,
    },

    crimson: {
      id: "crimson",
      name: "Crimson",
      emoji: "🔥",
      desc: "Fiery reds, crackling warmth",
      preview: ["#1a0505", "#4a0e0e", "#8b1a1a", "#d4552a"],

      colorA: [0.10, 0.02, 0.01],
      colorB: [0.28, 0.06, 0.03],
      colorC: [0.06, 0.01, 0.01],
      colorD: [0.52, 0.15, 0.05],
      gradientSpeed: 0.22,    // faster = crackling
      distortion: 0.78,       // higher = more warping/crackling

      particleColor: [1.0, 0.45, 0.1],
      particleCount: 120,
      particleSpeed: 0.28,
      particleOpacity: 0.55,
      particleDrift: "up",    // embers rise

      rippleColor: [0.9, 0.3, 0.1],

      sunGlow: {
        core: "rgba(255, 160, 60, 0.60)",
        mid:  "rgba(255, 100, 30, 0.40)",
        outer: "rgba(200, 50, 10, 0.20)",
        halo: "rgba(255, 120, 40, 0.25)",
        haloMid: "rgba(180, 40, 10, 0.12)",
        corona: "rgba(255, 200, 100, 0.14)",
      },

      headingGlow: {
        from: "0 0 20px rgba(255,100,30,0.35), 0 0 50px rgba(255,60,10,0.15)",
        to:   "0 0 35px rgba(255,140,50,0.60), 0 0 75px rgba(255,80,20,0.30), 0 0 120px rgba(200,40,5,0.15)",
      },

      cloudColor: 0xaa2211,
      cloudOpacity: 0.15,

      accent: "#e85530",
      accentHover: "#c73a1a",
      bgGradient: "linear-gradient(180deg, #0d0202 0%, #1a0808 40%, #2e0c0c 100%)",

      objFile: null,
    },

    yirid: {
      id: "yirid",
      name: "Yirid",
      emoji: "🌿",
      desc: "Earthy forests, natural calm",
      preview: ["#0a1a0d", "#1a3a1a", "#2d6b2d", "#8ab648"],

      colorA: [0.025, 0.065, 0.030],
      colorB: [0.06, 0.14, 0.06],
      colorC: [0.015, 0.045, 0.020],
      colorD: [0.10, 0.26, 0.10],
      gradientSpeed: 0.07,    // slow, serene
      distortion: 0.40,       // gentle

      particleColor: [0.55, 0.85, 0.3],
      particleCount: 65,
      particleSpeed: 0.10,
      particleOpacity: 0.38,
      particleDrift: "random",

      rippleColor: [0.4, 0.7, 0.25],

      sunGlow: {
        core: "rgba(255, 230, 150, 0.50)",
        mid:  "rgba(210, 180, 90, 0.35)",
        outer: "rgba(140, 160, 60, 0.18)",
        halo: "rgba(200, 190, 100, 0.22)",
        haloMid: "rgba(120, 140, 50, 0.10)",
        corona: "rgba(255, 240, 180, 0.12)",
      },

      headingGlow: {
        from: "0 0 20px rgba(140,200,80,0.30), 0 0 50px rgba(100,160,50,0.15)",
        to:   "0 0 30px rgba(160,220,100,0.50), 0 0 70px rgba(120,180,60,0.25), 0 0 110px rgba(80,140,30,0.12)",
      },

      cloudColor: 0x3a7a2a,
      cloudOpacity: 0.12,

      accent: "#6db848",
      accentHover: "#4a9030",
      bgGradient: "linear-gradient(180deg, #060e07 0%, #0e200e 40%, #1a3a1a 100%)",

      objFile: null,
    },

    nebula: {
      id: "nebula",
      name: "Nebula",
      emoji: "🌌",
      desc: "Cosmic purple, stellar pink",
      preview: ["#120520", "#2a0845", "#6b1fa0", "#e040a0"],

      colorA: [0.05, 0.015, 0.10],
      colorB: [0.12, 0.03, 0.22],
      colorC: [0.03, 0.01, 0.07],
      colorD: [0.22, 0.06, 0.38],
      gradientSpeed: 0.14,
      distortion: 0.60,

      particleColor: [0.85, 0.5, 0.95],
      particleCount: 110,
      particleSpeed: 0.15,
      particleOpacity: 0.42,
      particleDrift: "random",

      rippleColor: [0.7, 0.3, 0.9],

      sunGlow: {
        core: "rgba(220, 160, 255, 0.50)",
        mid:  "rgba(180, 100, 240, 0.35)",
        outer: "rgba(120, 50, 200, 0.18)",
        halo: "rgba(200, 130, 255, 0.22)",
        haloMid: "rgba(140, 60, 220, 0.10)",
        corona: "rgba(240, 200, 255, 0.12)",
      },

      headingGlow: {
        from: "0 0 20px rgba(180,120,255,0.35), 0 0 50px rgba(150,80,240,0.15)",
        to:   "0 0 35px rgba(200,150,255,0.55), 0 0 75px rgba(170,100,250,0.28), 0 0 120px rgba(120,50,220,0.14)",
      },

      cloudColor: 0x7b30c0,
      cloudOpacity: 0.14,

      accent: "#b060e0",
      accentHover: "#9040c0",
      bgGradient: "linear-gradient(180deg, #080218 0%, #140530 40%, #200a48 100%)",

      objFile: null,
    },

    arctic: {
      id: "arctic",
      name: "Arctic",
      emoji: "❄️",
      desc: "Icy whites, frozen serenity",
      preview: ["#0a1520", "#1a3050", "#4080a8", "#c0dff0"],

      colorA: [0.06, 0.10, 0.16],
      colorB: [0.12, 0.20, 0.32],
      colorC: [0.04, 0.08, 0.14],
      colorD: [0.20, 0.34, 0.50],
      gradientSpeed: 0.06,    // very slow, icy calm
      distortion: 0.35,

      particleColor: [0.85, 0.92, 1.0],
      particleCount: 100,
      particleSpeed: 0.08,
      particleOpacity: 0.50,
      particleDrift: "down",  // snow falls

      rippleColor: [0.6, 0.85, 1.0],

      sunGlow: {
        core: "rgba(255, 255, 255, 0.65)",
        mid:  "rgba(200, 230, 255, 0.40)",
        outer: "rgba(140, 200, 240, 0.20)",
        halo: "rgba(220, 240, 255, 0.25)",
        haloMid: "rgba(160, 210, 250, 0.12)",
        corona: "rgba(255, 255, 255, 0.15)",
      },

      headingGlow: {
        from: "0 0 20px rgba(180,220,255,0.35), 0 0 50px rgba(140,200,255,0.18)",
        to:   "0 0 35px rgba(210,240,255,0.60), 0 0 75px rgba(170,220,255,0.30), 0 0 120px rgba(130,200,255,0.15)",
      },

      cloudColor: 0x5090c0,
      cloudOpacity: 0.10,

      accent: "#70b8e8",
      accentHover: "#50a0d0",
      bgGradient: "linear-gradient(180deg, #070d14 0%, #102030 40%, #1a3a55 100%)",

      objFile: null,
    },
  };

  // ══════════════════════════════════════════════════════════════
  //  DYNAMIC STYLE TAG — for heading glow + CSS variable overrides
  // ══════════════════════════════════════════════════════════════

  let themeStyleEl = null;
  function getThemeStyle() {
    if (!themeStyleEl) {
      themeStyleEl = document.createElement("style");
      themeStyleEl.id = "welkin-theme-styles";
      document.head.appendChild(themeStyleEl);
    }
    return themeStyleEl;
  }

  // ══════════════════════════════════════════════════════════════
  //  APPLY THEME
  // ══════════════════════════════════════════════════════════════

  function applyTheme(themeId) {
    const theme = THEMES[themeId];
    if (!theme) {
      console.warn("welkinThemes: unknown theme:", themeId);
      return;
    }

    // ── 1. Save to localStorage ─────────────────────────────────
    localStorage.setItem(STORAGE_KEY, themeId);

    // ── 2. Update WebGL shader uniforms ─────────────────────────
    if (window.welkinShaders && window.welkinShaders.updateColors) {
      window.welkinShaders.updateColors(
        theme.colorA, theme.colorB, theme.colorC, theme.colorD
      );
    }
    if (window.welkinShaders && window.welkinShaders.updateConfig) {
      window.welkinShaders.updateConfig({
        gradientSpeed: theme.gradientSpeed,
        distortion: theme.distortion,
      });
    }

    // ── 3. Update particles ─────────────────────────────────────
    if (window.welkinShaders && window.welkinShaders.updateParticles) {
      window.welkinShaders.updateParticles({
        color: theme.particleColor,
        count: theme.particleCount,
        speed: theme.particleSpeed,
        opacity: theme.particleOpacity,
        drift: theme.particleDrift,
      });
    }

    // ── 4. Update ripples ───────────────────────────────────────
    if (window.welkinShaders && window.welkinShaders.updateRipples) {
      window.welkinShaders.updateRipples({
        color: theme.rippleColor,
      });
    }

    // ── 5. Update sun glow ──────────────────────────────────────
    const sunEl = document.getElementById("sun-glow");
    if (sunEl) {
      const sg = theme.sunGlow;
      sunEl.style.background = `
        radial-gradient(ellipse 60% 28% at 50% 108%,
          ${sg.core} 0%, ${sg.mid} 25%, ${sg.outer} 50%, transparent 75%),
        radial-gradient(ellipse 90% 40% at 50% 112%,
          ${sg.halo} 0%, ${sg.haloMid} 45%, transparent 70%),
        radial-gradient(ellipse 40% 55% at 50% 100%,
          ${sg.corona} 0%, transparent 60%)
      `;
    }

    // ── 6. Update heading glow via dynamic stylesheet ───────────
    const hg = theme.headingGlow;
    getThemeStyle().textContent = `
      @keyframes headingGlow {
        from { text-shadow: ${hg.from}; }
        to   { text-shadow: ${hg.to}; }
      }

      :root {
        --accent: ${theme.accent};
        --accent-hover: ${theme.accentHover};
      }

      .badge-dot {
        background: ${theme.accent} !important;
        box-shadow: 0 0 8px ${theme.accent}88 !important;
      }
    `;

    // ── 7. Update shader-bg gradient ────────────────────────────
    const shaderBg = document.getElementById("shader-bg");
    if (shaderBg) {
      shaderBg.style.background = theme.bgGradient;
    }

    // ── 8. Update 3D cloud material ─────────────────────────────
    if (window.welkinCloud && window.welkinCloud.updateMaterial) {
      window.welkinCloud.updateMaterial(theme.cloudColor, theme.cloudOpacity);
    }

    // ── 9. Dispatch event for any listeners ─────────────────────
    window.dispatchEvent(new CustomEvent("welkin-theme-change", { detail: theme }));
  }

  // ══════════════════════════════════════════════════════════════
  //  PUBLIC API
  // ══════════════════════════════════════════════════════════════

  window.welkinThemes = {
    apply: applyTheme,
    current: () => localStorage.getItem(STORAGE_KEY) || "welkin",
    list: () => Object.values(THEMES).map(t => ({
      id: t.id,
      name: t.name,
      emoji: t.emoji,
      desc: t.desc,
      preview: t.preview,
    })),
    get: (id) => THEMES[id] || null,
  };

  // ── Auto-apply saved theme on load ────────────────────────────
  function autoApply() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && THEMES[saved]) {
      // Small delay to let shaders + cloud init first
      setTimeout(() => applyTheme(saved), 300);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", autoApply);
  } else {
    autoApply();
  }

})();
