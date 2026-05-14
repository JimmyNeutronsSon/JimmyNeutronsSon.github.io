/* ═══════════════════════════════════════════════════
   WELKIN — Main JavaScript
   Video background + UI interactions
   ═══════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // The navbar was removed in previous versions, so we don't need scroll or active link logic here anymore.

  // ── YouTube background — ensure it keeps playing ─
  // The iframe is set to autoplay+mute+loop in the URL params.
  // This uses the YT IFrame API to restart if needed.
  const ytIframe = document.getElementById("yt-bg");
  if (ytIframe) {
    // Prevent any click interaction from reaching the iframe
    ytIframe.style.pointerEvents = "none";
  }

  // ── Cycle Landing Phrases ─────────────────────────
  const phrases = [
    "Atharva Joshi is a cutie",
    "Basketball > Soccer",
    "Robert squirt on dirt",
    "USE WELKIN LITE",
    "Prateek peeks at cheeks",
    "Sujay is gay",
    "Rishab inspired this tab",
    "Shiven is daddy",
  ];
  let currentPhraseIndex = 0;
  const heroSub = document.getElementById("hero-sub");

  if (heroSub && heroSub.classList.contains("landing-phrases")) {
    setInterval(() => {
      heroSub.style.opacity = "0";
      setTimeout(() => {
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
        heroSub.textContent = phrases[currentPhraseIndex];
        heroSub.style.opacity = "1";
      }, 500); // Wait for transition fade out
    }, 5000);
  }

  // ── Bookmarklet Generator ─────────────────────────
  const bookmarkletBtn = document.getElementById("btn-bookmarklet");
  if (bookmarkletBtn) {
    const origin = window.location.origin;
    const jsCode = `javascript:(function(){
      if(document.getElementById('welkin-gb-root')) return;
      var s = document.createElement('script');
      s.src = '${origin}/welkin-gamebar.js?v=' + Date.now();
      document.body.appendChild(s);
    })();`.replace(/\n\s+/g, "");

    bookmarkletBtn.href = jsCode;

    bookmarkletBtn.addEventListener("click", (e) => {
      e.preventDefault();
      alert(
        "Drag this button to your bookmarks bar, then click it on any website to open the Welkin Overlay!",
      );
    });
  }
});
