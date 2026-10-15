(() => {
  const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!("IntersectionObserver" in window) || !Element.prototype.animate) return;

  const animations = new Set();
  const reveal = (element, distance, delay = 0) => {
    const animation = element.animate(
      [{ opacity: 0, translate: `0 ${distance}px` }, { opacity: 1, translate: "0 0" }],
      { duration: 1150, delay, fill: "backwards", easing: "cubic-bezier(0.16, 1, 0.3, 1)" }
    );
    animations.add(animation);
    animation.finished.catch(() => {}).finally(() => animations.delete(animation));
  };
  const targets = [...document.querySelectorAll("main > section, main > footer, main > .case-opening")];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      observer.unobserve(target);
      // Keep existing rotations and hover transforms intact.
      if (motionPreference.matches || target.getBoundingClientRect().top < 80) return;
      reveal(target, 40);
      target.querySelectorAll(".home-case, .project-teaser-card, .skills-grid > div").forEach((item, index) => {
        reveal(item, 18, Math.min(index, 3) * 150 + 100);
      });
    });
  }, { threshold: 0, rootMargin: "0px 0px -32px 0px" });

  targets.forEach((target) => observer.observe(target));
  motionPreference.addEventListener("change", () => {
    if (motionPreference.matches) animations.forEach((animation) => animation.finish());
  });
  document.addEventListener("focusin", () => {
    animations.forEach((animation) => animation.finish());
  });
})();
