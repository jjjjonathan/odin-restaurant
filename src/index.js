import renderHome from "./home.js";
import renderMenu from "./menu.js";
import renderContact from "./contact.js"

function onload() { 
  renderContact()

  const homeTab = document.getElementById("home-tab");
  const menuTab = document.getElementById("menu-tab");
  const contactTab = document.getElementById("contact-tab");

  homeTab.addEventListener("click", renderHome);
  menuTab.addEventListener("click", renderMenu);
  contactTab.addEventListener("click", renderContact);
}

document.addEventListener("DOMContentLoaded", onload);