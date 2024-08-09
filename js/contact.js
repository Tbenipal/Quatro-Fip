// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

// Add event listener to hamburger
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
  
  // Add event listener to close menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });