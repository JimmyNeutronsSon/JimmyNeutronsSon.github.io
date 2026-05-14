// Welkin AI Chat Logic
// Using Google Gemini 1.5 Flash API

const chatMessages = document.getElementById("chat-messages");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");
const imageUpload = document.getElementById("image-upload");
const ssBtn = document.getElementById("ss-btn");
const ssPreview = document.getElementById("ss-preview");
const ssPreviewContainer = document.getElementById("ss-preview-container");
const apiKeyInput = document.getElementById("api-key");

let activeStream = null;
let currentImageBase64 = null;
let chatHistory = [];

// Load Settings from localStorage
const storedKey = localStorage.getItem("welkin_ai_api_key");
const storedProvider = localStorage.getItem("welkin_ai_provider") || "nvidia";
const storedModel =
  localStorage.getItem("welkin_ai_model") ||
  "meta/llama-3.2-11b-vision-instruct";

if (storedKey) apiKeyInput.value = storedKey;
document.getElementById("api-provider").value = storedProvider;
document.getElementById("api-model").value = storedModel;

function updateModelOptions() {
  const provider = document.getElementById("api-provider").value;
  const modelSelect = document.getElementById("api-model");
  modelSelect.innerHTML = "";

  if (provider === "gemini") {
    const models = [
      { name: "Gemini 1.5 Flash", value: "gemini-1.5-flash" },
      { name: "Gemini 1.5 Pro", value: "gemini-1.5-pro" },
    ];
    models.forEach((m) => modelSelect.add(new Option(m.name, m.value)));
  } else {
    const models = [
      {
        name: "Llama 3.2 11B Vision",
        value: "meta/llama-3.2-11b-vision-instruct",
      },
      {
        name: "Llama 3.2 90B Vision",
        value: "meta/llama-3.2-90b-vision-instruct",
      },
      { name: "GLM-4 9B Chat", value: "z-ai/glm-4-9b-chat" },
    ];
    models.forEach((m) => modelSelect.add(new Option(m.name, m.value)));
  }
}

document
  .getElementById("api-provider")
  .addEventListener("change", updateModelOptions);
updateModelOptions();

if (!storedKey) {
  setTimeout(() => {
    if (!localStorage.getItem("welkin_ai_api_key")) {
      addMessage(
        "ai",
        "Welcome! To start chatting, please add your NVIDIA or Gemini API key in the settings.",
      );
    }
  }, 1000);
}

// Auto-resize textarea
chatInput.addEventListener("input", () => {
  chatInput.style.height = "auto";
  chatInput.style.height = chatInput.scrollHeight + "px";
});

// Settings Logic
function toggleSettings() {
  const modal = document.getElementById("settings-modal");
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function saveSettings() {
  const key = apiKeyInput.value.trim();
  const provider = document.getElementById("api-provider").value;
  const model = document.getElementById("api-model").value;

  if (key) {
    localStorage.setItem("welkin_ai_api_key", key);
    localStorage.setItem("welkin_ai_provider", provider);
    localStorage.setItem("welkin_ai_model", model);
    toggleSettings();
    addMessage(
      "ai",
      `Settings saved! Provider set to ${provider === "nvidia" ? "NVIDIA NIM" : "Google Gemini"}.`,
    );
  } else {
    alert("Please enter a valid API key.");
  }
}

// Message Logic
function formatMessage(text) {
  // Basic Markdown Parsing
  return text
    .replace(/```([\s\S]*?)```/g, "<pre><code>$1</code></pre>") // Code blocks
    .replace(/`([^`]+)`/g, "<code>$1</code>") // Inline code
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>") // Bold
    .replace(/\n/g, "<br>");
}

function addMessage(role, content, image = null) {
  const msgDiv = document.createElement("div");
  msgDiv.className = `message ${role}`;
  msgDiv.innerHTML = formatMessage(content);

  if (image) {
    const img = document.createElement("img");
    img.src = image;
    img.className = "message-image";
    msgDiv.appendChild(img);
  }

  chatMessages.appendChild(msgDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  // Add to history
  chatHistory.push({
    role: role === "user" ? "user" : "model",
    parts: [{ text: content }],
  });
}

// Image Upload Logic
imageUpload.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      currentImageBase64 = event.target.result;
      addMessage("user", "Uploaded an image:", currentImageBase64);
      imageUpload.parentElement.classList.add("active");
    };
    reader.readAsDataURL(file);
  }
});

// Screenshare Logic
ssBtn.addEventListener("click", async () => {
  if (activeStream) {
    stopScreenshare();
    return;
  }

  try {
    activeStream = await navigator.mediaDevices.getDisplayMedia({
      video: { cursor: "always" },
      audio: false,
    });

    ssPreview.srcObject = activeStream;
    ssPreviewContainer.style.display = "block";
    ssBtn.classList.add("active");

    activeStream.getVideoTracks()[0].onended = () => {
      stopScreenshare();
    };
  } catch (err) {
    if (err.name !== "NotAllowedError") {
      console.error("Error starting screenshare:", err);
      addMessage("ai", "Error starting screenshare: " + err.message);
    }
  }
});

function stopScreenshare() {
  if (activeStream) {
    activeStream.getTracks().forEach((track) => track.stop());
    activeStream = null;
  }
  ssPreview.srcObject = null;
  ssPreviewContainer.style.display = "none";
  ssBtn.classList.remove("active");
}

async function captureScreen() {
  if (!activeStream) return null;

  const video = document.createElement("video");
  video.srcObject = activeStream;
  await video.play();

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  return canvas.toDataURL("image/jpeg", 0.7);
}

// Unified API Logic
async function callAI(prompt, imageBase64 = null) {
  const key = localStorage.getItem("welkin_ai_api_key");
  const provider = localStorage.getItem("welkin_ai_provider") || "nvidia";
  const model = localStorage.getItem("welkin_ai_model");

  if (!key) {
    addMessage(
      "ai",
      "Error: API Key missing. Please go to Settings and add your API Key.",
    );
    return;
  }

  if (provider === "gemini") {
    const parts = [{ text: prompt || "What is in this image?" }];
    if (imageBase64) {
      const base64Data = imageBase64.split(",")[1];
      const mimeType = imageBase64.split(";")[0].split(":")[1];
      parts.push({
        inline_data: {
          mime_type: mimeType,
          data: base64Data,
        },
      });
    }

    try {
      const response = await fetch("/api/gemini", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: model,
          key: key,
          contents: [{ parts: parts }],
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.candidates[0].content.parts[0].text;
    } catch (err) {
      return `Gemini Error: ${err.message}`;
    }
  } else {
    // NVIDIA NIM (via Proxy)
    const content = [{ type: "text", text: prompt || "Analyze this image." }];

    if (imageBase64) {
      content.push({
        type: "image_url",
        image_url: { url: imageBase64 },
      });
    }

    try {
      const response = await fetch("/api/nim", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${key}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: model || "meta/llama-3.2-11b-vision-instruct",
          messages: [{ role: "user", content: content }],
          max_tokens: 1024,
        }),
      });
      const data = await response.json();
      if (data.error) throw new Error(data.error.message);
      return data.choices[0].message.content;
    } catch (err) {
      return `NVIDIA Error: ${err.message}`;
    }
  }
}

async function handleSend() {
  const key = localStorage.getItem("welkin_ai_api_key");
  if (!key) {
    toggleSettings();
    return;
  }

  const text = chatInput.value.trim();
  if (!text && !currentImageBase64 && !activeStream) return;

  let imageToSend = currentImageBase64;
  chatInput.value = "";
  chatInput.style.height = "auto";

  if (activeStream && !imageToSend) {
    imageToSend = await captureScreen();
  }

  if (text) {
    addMessage(
      "user",
      text,
      imageToSend === currentImageBase64 ? null : imageToSend,
    );
  } else if (imageToSend) {
    addMessage("user", "Analyzing this for you...", imageToSend);
  }

  // Reset temporary states
  currentImageBase64 = null;
  imageUpload.parentElement.classList.remove("active");
  imageUpload.value = "";

  // Typing indicator
  const loadingId = "loading-" + Date.now();
  const loadingDiv = document.createElement("div");
  loadingDiv.className = "message ai";
  loadingDiv.id = loadingId;
  loadingDiv.innerHTML = '<span class="typing-dots">Thinking...</span>';
  chatMessages.appendChild(loadingDiv);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  const aiResponse = await callAI(text, imageToSend);

  document.getElementById(loadingId).remove();
  addMessage("ai", aiResponse);
}

sendBtn.addEventListener("click", handleSend);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    handleSend();
  }
});
