const menuToggle = document.querySelector("#mobile-btn");
const menuBack = document.querySelector("#mobile-back");
const mobileMenu = document.querySelector("#mobile-links");


menuToggle.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});


menuBack.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});