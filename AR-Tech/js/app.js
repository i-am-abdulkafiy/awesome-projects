// Variable Declaration

// Strict Mode
'use strict';

// Variable for Hamburger Menu
const toggleIcon = document.querySelector(".hamburger");

// Variable for Mobile Navigation
const mobileNav = document.querySelector(".mobile-nav");

toggleIcon.addEventListener("click", function () {
    toggleIcon.classList.toggle("active");
    mobileNav.classList.toggle("active");
});

window.onclick = function (event) 
{
    if(event.target == mobileNav)
    {
        mobileNav.classList.remove("active");
    }
}