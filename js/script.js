// SHOW MENU & ANIMATED TOGGLE
const showMenu = (toggleId, menuId) => {
  const toggle = document.getElementById(toggleId);
  const menu = document.getElementById(menuId);

  if (toggle && menu) {
    toggle.onclick = () => {
      toggle.classList.toggle("toggle-action");
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-toggle", "nav-menu");

// REMOVE LINK WHEN THE TOGGLE CLICKED
const navLink = document.querySelectorAll(".nav__link");
function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  const navToggle = document.getElementById("nav-toggle");

  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("toggle-action");
}
navLink.forEach((e) => e.addEventListener("click", linkAction));
