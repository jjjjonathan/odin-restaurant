import renderHome from "./home.js";
import renderMenu from "./menu.js";

function onload() { 
  renderHome()

  const homeTab = document.getElementById("home-tab");
  const menuTab = document.getElementById("menu-tab");
  const contactTab = document.getElementById("contact-tab");

  homeTab.addEventListener("click", renderHome);
  menuTab.addEventListener("click", renderMenu);
}

document.addEventListener("DOMContentLoaded", onload);