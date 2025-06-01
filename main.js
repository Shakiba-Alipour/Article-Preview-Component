const shareActivateButton = document.getElementById("inactive-share");
const shareDeactivateButton = document.getElementById("active-share");
const inactiveFooter = document.getElementById("inactive-footer");

let activeFooter = false;

if (window.innerWidth <= 700) {
  activeFooter = document.getElementById("mobile-active-footer");

  shareActivateButton.addEventListener("click", () => {
    activeFooter.style.display = "flex";
    inactiveFooter.style.display = "none";
  });

  shareDeactivateButton.addEventListener("click", () => {
    activeFooter.style.display = "none";
    inactiveFooter.style.display = "flex";
  });
} else {
  activeFooter = document.getElementById("desktop-active-footer");
  let isFooterActive = false; // Moved here and changed to let

  shareActivateButton.addEventListener("click", () => {
    isFooterActive = !isFooterActive;

    if (isFooterActive) {
      activeFooter.style.display = "flex";
    } else {
      activeFooter.style.display = "none";
    }
  });
}
