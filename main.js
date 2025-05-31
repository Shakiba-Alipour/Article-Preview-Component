const shareActivateButton = document.getElementById("inactive-share");
const shareDeactivateButton = document.getElementById("active-share");
const activeFooter = document.getElementById("active-footer");
const inactiveFooter = document.getElementById("inactive-footer");

shareActivateButton.addEventListener("click", () => {
  activeFooter.style.display = "flex";
  inactiveFooter.style.display = "none";
});

shareDeactivateButton.addEventListener("click", () => {
  activeFooter.style.display = "none";
  inactiveFooter.style.display = "flex";
});
