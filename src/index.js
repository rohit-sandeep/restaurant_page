import {createHome} from "./home.js";
import {loadMenu} from "./menu.js";
import {loadAbout} from "./about.js";

// Change these to match your HTML IDs exactly
const homeButton = document.getElementById("home");
const menuButton = document.getElementById("menu");
const contactButton = document.getElementById("about");

homeButton.addEventListener("click", createHome);
menuButton.addEventListener("click", loadMenu);
contactButton.addEventListener("click", loadAbout);

console.log("Hello, World! Welcome to the restaurant page.");
createHome();