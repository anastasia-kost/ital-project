// nav menu

const menuIcon = document.querySelector(".menu-icon");
const menuItems = document.getElementById("menu-items");

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

menuIcon.addEventListener("click", () => {
  menuToggle();
});

// footer info menu

const footerIcon = document.querySelector(".footer-icon");
const footerInfo = document.getElementById("footer-info");

footerInfo.style.maxHeight = "0px";

function footerInfoToggle() {
  if (footerInfo.style.maxHeight == "0px") {
    footerInfo.style.maxHeight = "200px";
  } else {
    footerInfo.style.maxHeight = "0px";
  }
}

footerIcon.addEventListener("click", () => {
  footerInfoToggle();
});
