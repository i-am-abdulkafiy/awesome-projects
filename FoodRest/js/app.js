// Strict Mode
'use strict';

// Declaration & Assigning Variables
const sideMenu = document.querySelector(".side-navbar")
const openMenu = document.querySelector(".hamburger");

// Event Listener
openMenu.addEventListener("click", function()
{
    sideMenu.classList.toggle("active");
    openMenu.classList.toggle("active");
});