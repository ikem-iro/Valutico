const hamburger = document.querySelector(".toggle-button");
const navMenu = document.querySelector(".nav-menu");
const loader = document.querySelector(".loader");
const hero = document.querySelector(".hero");
const body = document.querySelector("body");

window.addEventListener("load", () => {
  loader.classList.add("loader--hidden");
  body.classList.remove("overflow-hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
    hero.scrollIntoView({
      behavior: "smooth",
    });
  });
});

let state = {
  menuNotOpen: true,
};

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (state.menuNotOpen) {
    hamburger.classList.add("active");
    navMenu.classList.add("active");
    state.menuNotOpen = false;
  } else {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    state.menuNotOpen = true;
  }
}

window.addEventListener("resize", () => {
  while (window.innerWidth > 1381 && !state.menuNotOpen) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    state.menuNotOpen = true;
  }
});
