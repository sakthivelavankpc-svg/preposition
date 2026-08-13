(() => {
  const nav = [...document.querySelectorAll(".lesson-nav button")];
  const home = document.getElementById("home");
  const lessons = document.getElementById("lessons");
  const flashPanel = document.getElementById("flashPanel");
  const flashStatus = document.getElementById("flashStatus");

  function showLesson(key) {
    nav.forEach(b => b.classList.toggle("active", b.dataset.target === key));
    if (key === "home") {
      home.classList.add("active");
      lessons.classList.remove("active");
      window.scrollTo({top:0,behavior:"smooth"});
      return;
    }
    home.classList.remove("active");
    lessons.classList.add("active");
    const card = document.querySelector(`#lesson-${CSS.escape(key)}`);
    if (card) card.scrollIntoView({behavior:"smooth",block:"start"});
  }

  nav.forEach(btn => btn.addEventListener("click", () => showLesson(btn.dataset.target)));

  function openFlash() {
    flashPanel.hidden = false;
    flashPanel.scrollIntoView({behavior:"smooth",block:"start"});
    // Ruffle polyfills the object element. The timeout only removes the fallback text.
    setTimeout(() => {
      const host = document.getElementById("ruffleHost");
      const player = host.querySelector("ruffle-player");
      if (player) flashStatus.textContent = "Original SWF is running through Ruffle.";
      else flashStatus.textContent = "Original SWF player is initializing. If it remains blank, use the HTML lessons above.";
    }, 2500);
  }
  document.getElementById("openFlash").addEventListener("click", openFlash);
  document.getElementById("flashBtn").addEventListener("click", openFlash);
  document.getElementById("closeFlash").addEventListener("click", () => { flashPanel.hidden = true; });

  document.getElementById("fullBtn").addEventListener("click", async () => {
    const target = flashPanel.hidden ? document.querySelector(".app") : flashPanel;
    if (!document.fullscreenElement) await target.requestFullscreen?.();
    else await document.exitFullscreen?.();
  });

  // Detect Ruffle and expose a clear status instead of leaving a blank page.
  window.addEventListener("load", () => {
    setTimeout(() => {
      if (!window.RufflePlayer) {
        flashStatus.textContent = "Ruffle could not be loaded; the converted HTML lessons remain available.";
      }
    }, 3500);
  });
})();
