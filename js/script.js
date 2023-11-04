const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".nav__links")
const body = document.querySelector("body")

hamburger.addEventListener("click", () => {
  body.classList.toggle("open")
})
