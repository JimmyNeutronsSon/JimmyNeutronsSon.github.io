// Welkin AI Window Essentials
(function () {
  const NVIDIA_API_URL = "https://integrate.api.nvidia.com/v1/chat/completions";
  const apiKey =
    "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";

  const aiHTML = `
    <style>
      .ai-overlay { position: fixed; inset: 0; background: rgba(11, 30, 61, 0.4); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); z-index: 20000; display: none; align-items: center; justify-content: center; opacity: 0; transition: opacity 0.3s ease; }
      .ai-overlay.open { display: flex; opacity: 1; }
      .ai-card { width: 450px; height: 550px; max-width: 95vw; max-height: 90vh; background: rgba(255, 255, 255, 0.1); backdrop-filter: blur(32px); border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 24px; display: flex; flex-direction: column; overflow: hidden; box-shadow: 0 24px 64px rgba(0, 0, 0, 0.4); position: relative; font-family: 'Inter', sans-serif; }
      .ai-header { padding: 20px; display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.05); }
      .ai-title { font-size: 18px; font-weight: 700; color: white; display: flex; align-items: center; gap: 8px; }
      .ai-close-btn { color: white; font-size: 24px; cursor: pointer; opacity: 0.6; line-height: 1; }
      .ai-close-btn:hover { opacity: 1; }
      .ai-chat-area { flex: 1; padding: 20px; overflow-y: auto; display: flex; flex-direction: column; gap: 16px; }
      .ai-message { max-width: 85%; padding: 12px 16px; border-radius: 16px; font-size: 14px; color: white; line-height: 1.5; word-wrap: break-word; }
      .ai-message.user { align-self: flex-end; background: var(--clr-azure, #1e6cc7); border-bottom-right-radius: 4px; }
      .ai-message.bot { align-self: flex-start; background: rgba(255, 255, 255, 0.15); border-bottom-left-radius: 4px; }
      .ai-input-area { padding: 16px; background: rgba(0, 0, 0, 0.2); display: flex; flex-direction: column; gap: 10px; }
      .ai-input-row { display: flex; gap: 10px; align-items: center; justify-content: center; }
      .ai-input { flex: 1; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); color: white; padding: 12px 16px; border-radius: 24px; font-size: 14px; outline: none; }
      .ai-send-btn, .ai-toggle-btn { background: var(--clr-cerulean, #3a8fe0); color: #0b1e3d; border: none; padding: 10px 16px; border-radius: 20px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; font-size: 13px; }
      .ai-toggle-btn { background: rgba(255, 255, 255, 0.1); color: white; border: 1px solid rgba(255, 255, 255, 0.2); width: 100%; justify-content: center; }
      .ai-toggle-btn:hover { background: rgba(46, 204, 113, 0.3); border-color: rgba(46, 204, 113, 0.6); color: #2ecc71; }
    </style>
    
    <!-- Main Chat Overlay -->
    <div id="ai-overlay" class="ai-overlay">
      <div class="ai-card">
        <div class="ai-header">
          <div class="ai-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 1 0 10 10H12V2z"/><path d="M12 12 2.1 14.8M12 12l7.1-7.1"/></svg> Welkin AI
          </div>
          <div class="ai-close-btn" id="ai-close">&times;</div>
        </div>
        <div class="ai-chat-area" id="ai-chat-list">
          <div class="ai-message bot">Hello! I am Welkin AI.</div>
        </div>
        <div class="ai-input-area">
          <button class="ai-toggle-btn" id="ai-start-native-ss">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
            Start Screenshare Window
          </button>
          <div class="ai-input-row" style="margin-top:4px;">
            <input type="text" class="ai-input" id="ai-input" placeholder="Ask AI something..." autocomplete="off">
            <button class="ai-send-btn" id="ai-send">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  function initAI() {
    if (document.getElementById("ai-overlay")) return; // Prevent double injection
    document.body.insertAdjacentHTML("beforeend", aiHTML);

    const overlay = document.getElementById("ai-overlay");
    const closeBtn = document.getElementById("ai-close");
    const chatList = document.getElementById("ai-chat-list");
    const input = document.getElementById("ai-input");
    const sendBtn = document.getElementById("ai-send");

    // Helper for API rate limiting
    async function fetchWithRetry(url, options, maxRetries = 3) {
      for (let i = 0; i <= maxRetries; i++) {
        const res = await fetch(url, options);
        if (res.status === 429 && i < maxRetries) {
          const delay = Math.pow(2, i) * 1000 + Math.random() * 500;
          console.warn(
            `Rate limited (429). Retrying in ${Math.round(delay)}ms...`,
          );
          await new Promise((r) => setTimeout(r, delay));
          continue;
        }
        return res;
      }
    }

    // Screenshare specific elements
    const startNativeBtn = document.getElementById("ai-start-native-ss");

    let activeStream = null;
    let videoElement = document.createElement("video");
    videoElement.autoplay = true;
    videoElement.muted = true;
    videoElement.style.display = "none";
    document.body.appendChild(videoElement);

    let activePipWindow = null;

    window.toggleAI = function () {
      overlay.classList.add("open");
    };

    closeBtn.addEventListener("click", () => overlay.classList.remove("open"));
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) overlay.classList.remove("open");
    });

    // Standard Chat Send
    async function handleSend() {
      const text = input.value.trim();
      if (!text) return;
      input.value = "";

      const userMsg = document.createElement("div");
      userMsg.className = "ai-message user";
      userMsg.textContent = text;
      chatList.appendChild(userMsg);
      chatList.scrollTop = chatList.scrollHeight;

      const botMsg = document.createElement("div");
      botMsg.className = "ai-message bot";
      botMsg.innerHTML =
        '<span class="ai-loader" style="width:12px; height:12px; display:inline-block; border:2px solid rgba(255,255,255,0.3); border-top-color:white; border-radius:50%; animation:spin 1s linear infinite;"></span>';
      chatList.appendChild(botMsg);
      chatList.scrollTop = chatList.scrollHeight;

      try {
        const res = await fetchWithRetry(NVIDIA_API_URL, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${apiKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            model: "z-ai/glm-4-7b-instruct",
            messages: [{ role: "user", content: text }],
            max_tokens: 512,
          }),
        });
        if (!res.ok)
          throw new Error(
            res.status === 429
              ? "Rate limited. Please try again in a moment."
              : "API Error: " + res.status,
          );
        const data = await res.json();
        botMsg.textContent = data.choices[0].message.content;
      } catch (err) {
        botMsg.textContent = "Error: " + err.message;
      }
      chatList.scrollTop = chatList.scrollHeight;
    }

    sendBtn.addEventListener("click", handleSend);
    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") handleSend();
    });

    // --- Native Screenshare Window Logic ---
    startNativeBtn.addEventListener("click", async () => {
      try {
        activeStream = await navigator.mediaDevices.getDisplayMedia({
          video: { displaySurface: "window" },
          audio: false,
        });
        videoElement.srcObject = activeStream;
        await videoElement
          .play()
          .catch((e) => console.warn("Video play error:", e));

        // Hide main overlay
        overlay.classList.remove("open");

        const w = 480;
        const h = 320;

        // Chrome Document Picture-in-Picture API
        if ("documentPictureInPicture" in window) {
          activePipWindow = await window.documentPictureInPicture.requestWindow(
            { width: w, height: h },
          );
        } else {
          activePipWindow = window.open(
            "",
            "Screenshare Chat",
            `width=${w},height=${h},menubar=no,toolbar=no,location=no,status=no`,
          );
        }

        if (!activePipWindow) {
          alert("Popup blocked or not supported.");
          stopScreenshare();
          return;
        }

        // Setup the new window DOM
        const doc = activePipWindow.document;
        doc.title = "Welkin Screen Chat";
        doc.body.style.margin = "0";
        doc.body.style.background = "#0B1E3D";
        doc.body.style.fontFamily = "'Inter', sans-serif";
        doc.body.style.color = "white";

        const style = doc.createElement("style");
        style.textContent = `
          *, *::before, *::after { box-sizing: border-box; }
          .container { padding: 16px; display: flex; flex-direction: column; height: 100vh; justify-content: space-between; }
          .input { width: 100%; height: 60px; background: #071326; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 8px; padding: 12px; color: white; font-size: 14px; outline: none; resize: none; margin-bottom: 12px; }
          .input:focus { border-color: rgba(255, 255, 255, 0.3); }
          .response { flex: 1; font-size: 13px; color: #E2E8F0; display: none; overflow-y: auto; padding: 12px; background: rgba(255, 255, 255, 0.05); border-radius: 8px; line-height: 1.5; margin-bottom: 16px; word-wrap: break-word; }
          .footer { display: flex; justify-content: space-between; align-items: center; }
          .btn-stop { background: #E53E3E; color: white; border: none; padding: 6px 12px; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; transition: 0.2s; }
          .btn-stop:hover { background: #C53030; }
          .btn-close { background: transparent; color: #8FA4C2; border: 1px solid rgba(255, 255, 255, 0.2); padding: 4px 12px; border-radius: 6px; font-size: 12px; cursor: pointer; }
          .btn-close:hover { background: rgba(255, 255, 255, 0.1); color: white; }
          .model-select { background: transparent; color: #8FA4C2; border: none; font-size: 12px; outline: none; cursor: pointer; }
        `;
        doc.head.appendChild(style);

        doc.body.innerHTML = `
          <div class="container">
            <textarea id="win-input" class="input" placeholder="Ask about what's on your screen..."></textarea>
            <div id="win-response" class="response"></div>
            <div class="footer">
              <div style="display:flex; align-items:center; gap:12px;">
                <button id="win-stop" class="btn-stop">Stop</button>
                <select id="win-model" class="model-select">
                  <option value="google/gemma-4-31b-it:free">Gemma 4 (Free)</option>
                  <option value="openrouter/free">OpenRouter Auto (Free)</option>
                  <option value="google/gemini-1.5-flash">Gemini 1.5 Flash</option>
                </select>
              </div>
              <div style="font-size:11px; color:#718096; display:flex; gap:12px; align-items:center;">
                Press Enter to ask
                <button id="win-close" class="btn-close">Close</button>
              </div>
            </div>
          </div>
        `;

        // Event listeners for the pip window
        const winInput = doc.getElementById("win-input");
        const winResponse = doc.getElementById("win-response");
        const winStop = doc.getElementById("win-stop");
        const winClose = doc.getElementById("win-close");
        const winModel = doc.getElementById("win-model");

        winStop.addEventListener("click", stopScreenshare);
        winClose.addEventListener("click", stopScreenshare);

        activePipWindow.addEventListener("pagehide", stopScreenshare);
        activePipWindow.addEventListener("unload", stopScreenshare);
        activeStream.getVideoTracks()[0].onended = () => stopScreenshare();

        winInput.addEventListener("keypress", async (e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            const text = winInput.value.trim();
            if (!text || !activeStream) return;

            winResponse.style.display = "block";
            winResponse.innerHTML =
              '<span style="color:#8FA4C2;">Analyzing screen...</span>';
            winInput.value = "";

            // Capture and severely downscale to prevent API payload errors
            const MAX_DIM = 1000;
            let vw = videoElement.videoWidth || 1280;
            let vh = videoElement.videoHeight || 720;
            if (vw > MAX_DIM || vh > MAX_DIM) {
              const ratio = Math.min(MAX_DIM / vw, MAX_DIM / vh);
              vw = Math.round(vw * ratio);
              vh = Math.round(vh * ratio);
            }
            const canvas = document.createElement("canvas");
            canvas.width = vw;
            canvas.height = vh;
            canvas.getContext("2d").drawImage(videoElement, 0, 0, vw, vh);
            const base64Image = canvas.toDataURL("image/jpeg", 0.4); // Aggressive compression

            try {
              const reqBody = JSON.stringify({
                model: winModel.value.startsWith("google/")
                  ? winModel.value
                  : "google/gemma-4-31b-it",
                messages: [
                  {
                    role: "user",
                    content: [
                      { type: "text", text: text },
                      { type: "image_url", image_url: { url: base64Image } },
                    ],
                  },
                ],
              });
              const res = await fetchWithRetry(NVIDIA_API_URL, {
                method: "POST",
                headers: {
                  Authorization: `Bearer ${apiKey}`,
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  model: winModel.value.startsWith("google/")
                    ? winModel.value
                    : "google/gemma-4-31b-it",
                  messages: [
                    {
                      role: "user",
                      content: [
                        { type: "text", text: text },
                        { type: "image_url", image_url: { url: base64Image } },
                      ],
                    },
                  ],
                }),
              });
              if (!res.ok)
                throw new Error(
                  res.status === 429
                    ? "Rate limited. Try waiting 10-20 seconds."
                    : "API Error: " + res.status,
                );
              const data = await res.json();
              winResponse.innerHTML = data.choices[0].message.content.replace(
                /\\n/g,
                "<br>",
              );
            } catch (err) {
              winResponse.innerHTML =
                '<span style="color:#fc8181;">' + err.message + "</span>";
            }
          }
        });
      } catch (err) {
        console.error("Screenshare cancelled or failed", err);
      }
    });

    function stopScreenshare() {
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop());
        activeStream = null;
      }
      videoElement.srcObject = null;
      if (activePipWindow) {
        try {
          activePipWindow.close();
        } catch (e) {}
        activePipWindow = null;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAI);
  } else {
    initAI();
  }
})();
