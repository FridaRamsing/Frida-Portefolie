const portrait = document.querySelector("[data-split-portrait]");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

if (portrait) {
  let animationFrame = null;
  let latestClientX = window.innerWidth / 2;

  const updateSplit = () => {
    const rect = portrait.getBoundingClientRect();
    const cursorX = clamp(
      ((latestClientX - rect.left) / rect.width) * 100,
      0,
      100
    );
    const splitX = 100 - cursorX;

    portrait.style.setProperty("--split-x", `${splitX}%`);
    animationFrame = null;
  };

  const queueUpdate = (clientX) => {
    latestClientX = clientX;

    if (!animationFrame) {
      animationFrame = window.requestAnimationFrame(updateSplit);
    }
  };

  window.addEventListener("pointermove", (event) => {
    queueUpdate(event.clientX);
  });

  window.addEventListener("pointerdown", (event) => {
    queueUpdate(event.clientX);
  });

  window.addEventListener("resize", () => {
    queueUpdate(latestClientX);
  });
}
