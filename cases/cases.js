document.querySelectorAll("[data-load-demo]").forEach((button) => {
  button.addEventListener("click", () => {
    const section = button.closest(".exam-demo");
    const container = section.querySelector("[data-demo-frame]");
    const status = section.querySelector("[data-demo-status]");
    if (!button.dataset.src || container.querySelector("iframe")) return;

    const iframe = document.createElement("iframe");
    iframe.title = button.dataset.title;
    iframe.src = button.dataset.src;
    iframe.allowFullscreen = true;
    iframe.referrerPolicy = "strict-origin-when-cross-origin";
    status.textContent = "Indlæser...";
    iframe.addEventListener("load", () => {
      // A cross-origin load event cannot confirm that embedding was permitted.
      status.textContent = "";
    });
    container.hidden = false;
    container.append(iframe);
    button.hidden = true;
  });
});

document.querySelectorAll("[data-version-comparison]").forEach((section) => {
  const versions = {
    before: {
      image: "../assets/cases/mellemrum/before-about.png",
      url: "https://cederdorff.com/mellemrum/",
      alt: "Den oprindelige Om Mellemrum-side før redesignet.",
      caption: "Før / Den oprindelige Om Mellemrum-side.",
    },
    after: {
      image: "../assets/cases/mellemrum/after-about.png",
      url: "https://fridaramsing.github.io/Forbedring-af-mellemrum/",
      alt: "Den opdaterede Om Mellemrum-side efter redesignet.",
      caption: "Efter / Mit redesign af Om Mellemrum.",
    },
  };
  const image = section.querySelector("[data-version-image]");
  section.querySelectorAll("[data-version]").forEach((button) => {
    button.addEventListener("click", () => {
      const version = versions[button.dataset.version];
      image.src = version.image;
      image.alt = version.alt;
      section.querySelector("[data-version-caption]").textContent = version.caption;
      section.querySelector("[data-version-link]").href = version.url;
      section.querySelectorAll("[data-version]").forEach((item) => {
        item.setAttribute("aria-pressed", String(item === button));
      });
    });
  });
});

