function $(id) {
  return document.getElementById(id);
}

const musicToggle = $("music-toggle");
const musicPanel  = $("music-panel");
const musicClose  = $("music-close");
const musicPlay   = $("music-play");
const musicStatus = $("music-status");
const bgMusic     = $("bg-music");

let isPanelOpen = false;
let isPlaying   = false;

if (musicToggle && musicPanel) {
  musicToggle.addEventListener("click", () => {
    isPanelOpen = !isPanelOpen;
    musicPanel.classList.toggle("open", isPanelOpen);
  });
}

if (musicClose && musicPanel) {
  musicClose.addEventListener("click", () => {
    isPanelOpen = false;
    musicPanel.classList.remove("open");
  });
}

if (musicPlay && bgMusic && musicStatus) {
  musicPlay.addEventListener("click", () => {
    if (!isPlaying) {
      bgMusic.play().then(() => {
        isPlaying = true;
        musicPlay.textContent = "⏸ Pause";
        musicStatus.textContent = "Now playing";
      }).catch((err) => {
        console.warn("Autoplay blocked:", err);
        musicStatus.textContent = "Click to allow audio";
      });
    } else {
      bgMusic.pause();
      isPlaying = false;
      musicPlay.textContent = "▶ Play";
      musicStatus.textContent = "Paused";
    }
  });
}
