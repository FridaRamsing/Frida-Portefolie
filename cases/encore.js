const encoreFrame = document.getElementById("encore-frame");
const encoreShell = encoreFrame.parentElement;
const encoreLink = document.getElementById("encore-prototype-link");
const encoreDevices = document.querySelectorAll("[data-encore-device]");
const desktopSource = encoreFrame.src;
const mobileSource = desktopSource
  .replace("node-id=35-86", "node-id=184-672")
  .replace("starting-point-node-id=35%3A86", "starting-point-node-id=184%3A672");

encoreDevices.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.getAttribute("aria-pressed") === "true") return;
    const mobile = button.dataset.encoreDevice === "mobile";
    const source = mobile ? mobileSource : desktopSource;
    encoreShell.classList.toggle("phone-preview", mobile);
    encoreDevices.forEach((device) => device.setAttribute("aria-pressed", String(device === button)));
    encoreFrame.src = source;
    encoreFrame.title = mobile ? "ENCOREs mobilprototype i Figma" : "ENCOREs computerprototype i Figma";
    encoreLink.href = source.replace("embed.figma.com", "www.figma.com").replace("&embed-host=share", "");
    encoreLink.textContent = mobile ? "Åbn mobilprototypen ↗" : "Åbn computerprototypen ↗";
  });
});
