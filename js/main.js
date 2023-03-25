menu;
("use strict");

// MENU
const toggle = document.getElementById("navbar__toggle");
const dropdown = document.getElementById("menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  dropdown.classList.toggle("show");
});

// SUBMENU
const droptog = document.querySelectorAll(".droptoggle");
const submenu = document.getElementsByClassName("submenu");
const uparrow = document.getElementsByClassName("navbar__arrow");
for (let x = 0; x < droptog.length; x++) {
  droptog[x].addEventListener("click", () => {
    submenu[x].classList.toggle("submenu__show");
    uparrow[x].classList.toggle("navbar__arrow--rotate");
  });
}
