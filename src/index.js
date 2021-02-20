import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js";

function handleTabClick(tabId) {
  const allTabs = document.querySelectorAll(".nav-item");
  allTabs.forEach((tab) => {
    tab.classList.remove("active");
  });

  const clickedTab = document.getElementById(tabId);
  clickedTab.classList.add("active");

  switch (tabId) {
    case "home-tab":
      renderHome();
      const menuButton = document.getElementById("menu-button");
      menuButton.addEventListener("click", () => {
        handleTabClick("menu-tab");
      });
      break;
    case "menu-tab":
      renderMenu();
      break;
    case "contact-tab":
      renderContact();
      break;
  }
}

function onload() {
  handleTabClick("home-tab");

  const brand = document.getElementById("brand");
  const homeTab = document.getElementById("home-tab");
  const menuTab = document.getElementById("menu-tab");
  const contactTab = document.getElementById("contact-tab");

  brand.addEventListener("click", () => {
    handleTabClick("home-tab");
  });
  homeTab.addEventListener("click", () => {
    handleTabClick("home-tab");
  });
  menuTab.addEventListener("click", () => {
    handleTabClick("menu-tab");
  });
  contactTab.addEventListener("click", () => {
    handleTabClick("contact-tab");
  });
}

document.addEventListener("DOMContentLoaded", onload);
