javascript: (function () {
  const iframe = document.createElement("iframe");
  iframe.src = "https://welkins.skytourtw.com/chat.html";
  iframe.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;border:none;z-index:999999;";
  document.body.innerHTML = "";
  document.body.appendChild(iframe);
})();
