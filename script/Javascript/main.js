// menu

const menu = document.querySelector(".navbar__links");
const link = document.querySelector(".navbar__link");
const name = document.querySelector(".navbar__name");
const menuButton = document.querySelector(".navbar__icons");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("navbar__open");
  menuButton.classList.toggle("open");
  name.classList.toggle("navbar_change_color");
});

document.addEventListener("click", (e) => {
  if (
    menu.classList.contains("navbar__open") &&
    !menu.contains(e.target) &&
    !menuButton.contains(e.target)
  ) {
    menu.classList.remove("navbar__open");
    menuButton.classList.remove("open");
    name.classList.remove("navbar_change_color");
  }
});

const Navclose = document.querySelectorAll(".nav-close");

Navclose.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("navbar__open");
    menuButton.classList.remove("open");
    name.classList.remove("navbar_change_color");
  });
});

//Dark mode

let darkmode = localStorage.getItem("dark_mode");
const theme_switch = document.getElementById("switch-mode");

const enableDarkmode = () => {
  document.body.classList.add("dark_mode");
  localStorage.setItem("dark_mode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("dark_mode");
  localStorage.removeItem("dark_mode");
};

if (darkmode === "active") enableDarkmode();
theme_switch.addEventListener("click", () => {
  darkmode = localStorage.getItem("dark_mode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});
