/**
 * home-shaders.js — Welkin homepage visual effects
 * ══════════════════════════════════════════════════
 * Drop-in replacement for shaders@latest (which has a WGSL bug).
 * Pure WebGL2 + vanilla JS — zero dependencies, zero npm packages.
 *
 * Provides:
 *   1. Flowing gradient background  (replaces FlowingGradient component)
 *   2. Floating particles            (replaces FloatingParticles component)
 *   3. Cursor ripples               (replaces CursorRipples component)
 *   4. Vignette                     (replaces Vignette component)
 *
 * ── HOW TO USE ────────────────────────────────────────────────────────────
 * 1. Remove any <script> tags that import from esm.sh / shaders@latest
 * 2. Remove any createShader(...) calls
 * 3. Add ONE script tag pointing to this file:
 *      <script src="/home-shaders.js"></script>
 *    (or inline the contents into a <script> block)
 * 4. Make sure your canvas element has id="shader-canvas" (see CONFIG below)
 *
 * ── CONFIG ────────────────────────────────────────────────────────────────
 * All tweakable values are in the CONFIG object at the top of this file.
 */

(function () {
  "use strict";

  // ══════════════════════════════════════════════════════════════════════════
  //  CONFIG — edit these to change the look
  // ══════════════════════════════════════════════════════════════════════════
  const CONFIG = {
    // Canvas to render into. We create one if it doesn't exist.
    canvasId: "shader-canvas",

    // Gradient background colours (hex or "r,g,b" 0–1 floats)
    // The shader blends between these four colours in a flowing pattern.
    colorA: [0.020, 0.060, 0.180],   // deep navy
    colorB: [0.050, 0.130, 0.320],   // mid blue
    colorC: [0.010, 0.040, 0.130],   // darker navy
    colorD: [0.070, 0.200, 0.420],   // lighter blue accent

    // Gradient animation speed (lower = slower)
    gradientSpeed: 0.12,

    // Gradient distortion strength (0 = flat gradient, 1 = highly warped)
    distortion: 0.55,

    // ── PARTICLES ──
    particleCount: 90,        // number of floating dots
    particleMinSize: 1.2,     // px
    particleMaxSize: 3.5,     // px
    particleOpacity: 0.45,    // 0–1
    particleColor: [0.42, 0.71, 0.94],  // RGB 0–1 (Welkin daylight blue)
    particleSpeed: 0.18,      // base drift speed

    // ── CURSOR RIPPLES ──
    rippleEnabled: true,
    rippleColor: [0.36, 0.56, 0.88],  // RGB 0–1
    rippleOpacity: 0.18,      // peak opacity of each ripple ring
    rippleMaxRadius: 120,     // px — how far each ring expands
    rippleSpeed: 1.8,         // expansion speed multiplier
    rippleCount: 4,           // max simultaneous ripple rings

    // ── VIGNETTE ──
    vignetteStrength: 0.42,   // 0 = none, 1 = very dark edges
    vignetteRadius: 0.75,     // 0–1, where the vignette starts

    // Render resolution scale (0.5 = half-res, faster; 1.0 = full)
    resolution: 0.65,
  };

  // ══════════════════════════════════════════════════════════════════════════
  //  GLSL SHADERS
  // ══════════════════════════════════════════════════════════════════════════

  const VS = `#version 300 es
  in vec2 a_pos;
  out vec2 v_uv;
  void main() {
    v_uv = a_pos * 0.5 + 0.5;
    gl_Position = vec4(a_pos, 0.0, 1.0);
  }`;

  const FS = `#version 300 es
  precision highp float;
  in  vec2  v_uv;
  out vec4  fragColor;

  uniform float u_time;
  uniform vec2  u_res;

  // Uniforms from CONFIG
  uniform vec3  u_colorA;
  uniform vec3  u_colorB;
  uniform vec3  u_colorC;
  uniform vec3  u_colorD;
  uniform float u_distortion;
  uniform float u_vigStrength;
  uniform float u_vigRadius;

  // ── Noise helpers ────────────────────────────────────────────────────────
  float hash(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
  }
  float noise(vec2 p) {
    vec2 i = floor(p), f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(hash(i),              hash(i + vec2(1.0, 0.0)), f.x),
      mix(hash(i + vec2(0.0,1.0)), hash(i + vec2(1.0,1.0)), f.x), f.y);
  }
  float fbm(vec2 p) {
    float v = 0.0, a = 0.5;
    for (int i = 0; i < 4; i++) { v += a * noise(p); p *= 2.0; a *= 0.5; }
    return v;
  }

  void main() {
    vec2 uv = v_uv;
    float t  = u_time;

    // ── Flowing distortion ───────────────────────────────────────────────
    float dx = fbm(uv * 2.2 + vec2(t * 0.31, t * 0.17)) - 0.5;
    float dy = fbm(uv * 2.2 + vec2(t * 0.19, t * 0.37) + 1.7) - 0.5;
    vec2 warped = uv + vec2(dx, dy) * u_distortion * 0.6;

    // ── Four-colour blend ────────────────────────────────────────────────
    float n1 = fbm(warped * 1.8 + t * 0.08);
    float n2 = fbm(warped * 2.4 - t * 0.06 + 3.1);
    vec3 colAB = mix(u_colorA, u_colorB, smoothstep(0.3, 0.7, n1));
    vec3 colCD = mix(u_colorC, u_colorD, smoothstep(0.2, 0.8, n2));
    vec3 col   = mix(colAB, colCD, smoothstep(0.35, 0.65, fbm(warped + t * 0.04)));

    // ── Vignette ─────────────────────────────────────────────────────────
    vec2  q  = uv * 2.0 - 1.0;
    float vd = dot(q, q);
    float vig = smoothstep(u_vigRadius, u_vigRadius - 0.45, vd) * u_vigStrength;
    col *= (1.0 - vig);

    fragColor = vec4(col, 1.0);
  }`;

  // ══════════════════════════════════════════════════════════════════════════
  //  WEBGL SETUP
  // ══════════════════════════════════════════════════════════════════════════

  // ══════════════════════════════════════════════════════════════════════════
  //  CANVAS SETUP
  //  Injects a WebGL canvas into #shader-bg (already in home.html).
  //  If that div doesn't exist, creates a fixed full-screen canvas.
  // ══════════════════════════════════════════════════════════════════════════

  const container = document.getElementById("shader-bg");
  let canvas;

  if (container) {
    // Use the existing #shader-bg div — clear any CSS background on it
    // so the WebGL output shows through
    container.style.background = "none";
    canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;display:block;";
    container.appendChild(canvas);
  } else {
    // Fallback: fixed full-screen canvas
    canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:fixed;inset:0;width:100%;height:100%;z-index:-4;pointer-events:none;display:block;";
    document.body.insertBefore(canvas, document.body.firstChild);
  }

  const gl = canvas.getContext("webgl2", { alpha: false, antialias: false });
  if (!gl) {
    // WebGL2 not available — set a plain CSS gradient fallback
    canvas.style.background =
      "linear-gradient(180deg, #050f24 0%, #0a2d6e 60%, #0b1e3d 100%)";
    console.warn("home-shaders.js: WebGL2 not supported, using CSS fallback.");
    return;
  }

  function compileShader(type, src) {
    const s = gl.createShader(type);
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(s));
    }
    return s;
  }

  const prog = gl.createProgram();
  gl.attachShader(prog, compileShader(gl.VERTEX_SHADER, VS));
  gl.attachShader(prog, compileShader(gl.FRAGMENT_SHADER, FS));
  gl.linkProgram(prog);
  gl.useProgram(prog);

  // Full-screen triangle (faster than a quad)
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(prog, "a_pos");
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  // Uniforms
  const uTime = gl.getUniformLocation(prog, "u_time");
  const uRes = gl.getUniformLocation(prog, "u_res");
  const uColA = gl.getUniformLocation(prog, "u_colorA");
  const uColB = gl.getUniformLocation(prog, "u_colorB");
  const uColC = gl.getUniformLocation(prog, "u_colorC");
  const uColD = gl.getUniformLocation(prog, "u_colorD");
  const uDist = gl.getUniformLocation(prog, "u_distortion");
  const uVigS = gl.getUniformLocation(prog, "u_vigStrength");
  const uVigR = gl.getUniformLocation(prog, "u_vigRadius");

  // Set static uniforms once
  gl.uniform3fv(uColA, CONFIG.colorA);
  gl.uniform3fv(uColB, CONFIG.colorB);
  gl.uniform3fv(uColC, CONFIG.colorC);
  gl.uniform3fv(uColD, CONFIG.colorD);
  gl.uniform1f(uDist, CONFIG.distortion);
  gl.uniform1f(uVigS, CONFIG.vignetteStrength);
  gl.uniform1f(uVigR, CONFIG.vignetteRadius);

  function resize() {
    const s = CONFIG.resolution;
    canvas.width = Math.floor(window.innerWidth * s);
    canvas.height = Math.floor(window.innerHeight * s);
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resize);
  resize();

  // ══════════════════════════════════════════════════════════════════════════
  //  PARTICLES (Canvas 2D overlay)
  // ══════════════════════════════════════════════════════════════════════════

  const pCanvas = document.createElement("canvas");
  Object.assign(pCanvas.style, {
    position: "fixed", inset: "0",
    width: "100%", height: "100%",
    zIndex: "-1", pointerEvents: "none",
  });
  canvas.after(pCanvas); // sits on top of WebGL canvas, below page content
  const pCtx = pCanvas.getContext("2d");

  const particles = [];
  function initParticles() {
    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;
    particles.length = 0;
    const [r, g, b] = CONFIG.particleColor;
    for (let i = 0; i < CONFIG.particleCount; i++) {
      particles.push({
        x: Math.random() * pCanvas.width,
        y: Math.random() * pCanvas.height,
        size: CONFIG.particleMinSize + Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize),
        vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
        vy: (Math.random() - 0.5) * CONFIG.particleSpeed - 0.04, // slight upward drift
        opacity: 0.1 + Math.random() * CONFIG.particleOpacity,
        pulse: Math.random() * Math.PI * 2, // phase offset for twinkle
        color: `rgba(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)},`,
      });
    }
  }
  window.addEventListener("resize", () => {
    pCanvas.width = window.innerWidth;
    pCanvas.height = window.innerHeight;
  });
  initParticles();

  function updateParticles(t) {
    pCtx.clearRect(0, 0, pCanvas.width, pCanvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      // Wrap around edges
      if (p.x < -5) p.x = pCanvas.width + 5;
      if (p.x > pCanvas.width + 5) p.x = -5;
      if (p.y < -5) p.y = pCanvas.height + 5;
      if (p.y > pCanvas.height + 5) p.y = -5;
      // Twinkle
      const alpha = p.opacity * (0.6 + 0.4 * Math.sin(t * 1.5 + p.pulse));
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      pCtx.fillStyle = p.color + alpha.toFixed(3) + ")";
      pCtx.fill();
    });
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  CURSOR RIPPLES (Canvas 2D, same layer as particles)
  // ══════════════════════════════════════════════════════════════════════════

  const ripples = [];
  let rippleColorBase = (function() {
    const [rr, rg, rb] = CONFIG.rippleColor;
    return `${Math.round(rr * 255)},${Math.round(rg * 255)},${Math.round(rb * 255)}`;
  })();

  if (CONFIG.rippleEnabled) {
    window.addEventListener("click", e => {
      if (ripples.length >= CONFIG.rippleCount) ripples.shift();
      ripples.push({ x: e.clientX, y: e.clientY, r: 0, born: performance.now() });
    });
    // Also trigger on touch
    window.addEventListener("touchstart", e => {
      const t = e.touches[0];
      if (ripples.length >= CONFIG.rippleCount) ripples.shift();
      ripples.push({ x: t.clientX, y: t.clientY, r: 0, born: performance.now() });
    }, { passive: true });
  }

  function updateRipples(nowMs) {
    for (let i = ripples.length - 1; i >= 0; i--) {
      const rp = ripples[i];
      const age = (nowMs - rp.born) / 1000;
      rp.r = age * CONFIG.rippleMaxRadius * CONFIG.rippleSpeed;
      if (rp.r > CONFIG.rippleMaxRadius) { ripples.splice(i, 1); continue; }
      const alpha = CONFIG.rippleOpacity * (1 - rp.r / CONFIG.rippleMaxRadius);
      pCtx.beginPath();
      pCtx.arc(rp.x, rp.y, rp.r, 0, Math.PI * 2);
      pCtx.strokeStyle = `rgba(${rippleColorBase},${alpha.toFixed(3)})`;
      pCtx.lineWidth = 1.5;
      pCtx.stroke();
    }
  }

  // ══════════════════════════════════════════════════════════════════════════
  //  RENDER LOOP
  // ══════════════════════════════════════════════════════════════════════════

  const t0 = performance.now();
  function frame(now) {
    requestAnimationFrame(frame);
    const t = (now - t0) * 0.001 * CONFIG.gradientSpeed;

    // WebGL gradient pass
    gl.uniform1f(uTime, t);
    gl.uniform2f(uRes, canvas.width, canvas.height);
    gl.drawArrays(gl.TRIANGLES, 0, 3);

    // 2D particles + ripples pass
    updateParticles(t);
    updateRipples(now);
  }
  requestAnimationFrame(frame);

  // ══════════════════════════════════════════════════════════════════════════
  //  PUBLIC API — used by themes.js for live theme switching
  // ══════════════════════════════════════════════════════════════════════════

  window.welkinShaders = {
    CONFIG,
    ripples,
    particles,

    /** Update the four gradient colours on the GPU (arrays of [r,g,b] 0–1) */
    updateColors(colorA, colorB, colorC, colorD) {
      gl.useProgram(prog);
      if (colorA) gl.uniform3fv(uColA, colorA);
      if (colorB) gl.uniform3fv(uColB, colorB);
      if (colorC) gl.uniform3fv(uColC, colorC);
      if (colorD) gl.uniform3fv(uColD, colorD);
    },

    /** Update shader config (gradientSpeed, distortion) live */
    updateConfig(opts) {
      if (opts.gradientSpeed != null) CONFIG.gradientSpeed = opts.gradientSpeed;
      if (opts.distortion != null) {
        CONFIG.distortion = opts.distortion;
        gl.useProgram(prog);
        gl.uniform1f(uDist, opts.distortion);
      }
    },

    /** Rebuild particles with new colour/count/speed/opacity/drift */
    updateParticles(opts) {
      if (opts.color)   CONFIG.particleColor   = opts.color;
      if (opts.count)   CONFIG.particleCount   = opts.count;
      if (opts.speed)   CONFIG.particleSpeed   = opts.speed;
      if (opts.opacity) CONFIG.particleOpacity = opts.opacity;

      // Rebuild particle array with new settings
      const [r, g, b] = CONFIG.particleColor;
      const colorStr = `rgba(${Math.round(r*255)},${Math.round(g*255)},${Math.round(b*255)},`;
      particles.length = 0;
      for (let i = 0; i < CONFIG.particleCount; i++) {
        let vy;
        if (opts.drift === "up") {
          vy = -(Math.random() * CONFIG.particleSpeed + 0.04);
        } else if (opts.drift === "down") {
          vy = Math.random() * CONFIG.particleSpeed + 0.02;
        } else {
          vy = (Math.random() - 0.5) * CONFIG.particleSpeed - 0.04;
        }
        particles.push({
          x: Math.random() * pCanvas.width,
          y: Math.random() * pCanvas.height,
          size: CONFIG.particleMinSize + Math.random() * (CONFIG.particleMaxSize - CONFIG.particleMinSize),
          vx: (Math.random() - 0.5) * CONFIG.particleSpeed,
          vy,
          opacity: 0.1 + Math.random() * CONFIG.particleOpacity,
          pulse: Math.random() * Math.PI * 2,
          color: colorStr,
        });
      }
    },

    /** Update ripple colour (array of [r,g,b] 0–1) */
    updateRipples(opts) {
      if (opts.color) {
        CONFIG.rippleColor = opts.color;
        const [rr, rg, rb] = opts.color;
        rippleColorBase = `${Math.round(rr*255)},${Math.round(rg*255)},${Math.round(rb*255)}`;
      }
    },
  };

})();