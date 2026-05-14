(function () {
  /**
   * Welkin — Secret Cloak System
   * Only triggers when "iboss" is typed on the keyboard.
   */

  const DECOY_URL = "https://www.lwsd.org/";
  const DECOY_TITLE = "My Apps";
  const DECOY_ICON = "classlink.ico";

  const isLocal =
    window.location.hostname === "localhost" ||
    window.location.hostname === "127.0.0.1";

  // Skip if already cloaked
  if (
    window.top !== window.self ||
    window.location.protocol === "about:" ||
    window.location.href.includes("about:blank")
  ) {
    return;
  }

  // Cloak function
  const cloak = () => {
    const url = window.location.href;
    const win = window.open("about:blank", "_blank");

    if (win) {
      const doc = win.document;
      doc.title = DECOY_TITLE;

      // Add Favicon
      const link = doc.createElement("link");
      link.rel = "icon";
      link.type = "image/png";
      link.href = DECOY_ICON;
      doc.head.appendChild(link);

      // Reset styles
      doc.body.style.margin = "0";
      doc.body.style.height = "100vh";
      doc.body.style.overflow = "hidden";
      doc.body.style.background = "#000";

      // Create Iframe
      const iframe = doc.createElement("iframe");
      iframe.style.border = "none";
      iframe.style.width = "100vw";
      iframe.style.height = "100vh";
      iframe.style.margin = "0";
      iframe.src = window.location.origin + "/home.html";

      doc.body.appendChild(iframe);

      // Redirect original tab to decoy
      window.location.replace(DECOY_URL);
    }
  };

  // Secret Key Listener
  let inputBuffer = "";
  const SECRET_CODE = "iboss";

  window.addEventListener("keydown", (e) => {
    // Only capture single characters
    if (e.key.length === 1) {
      inputBuffer += e.key.toLowerCase();
      // Keep only the last 5 characters
      if (inputBuffer.length > SECRET_CODE.length) {
        inputBuffer = inputBuffer.slice(-SECRET_CODE.length);
      }

      if (inputBuffer === SECRET_CODE) {
        cloak();
        inputBuffer = ""; // Reset buffer
      }
    }
  });

})();
