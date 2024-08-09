// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

const slider = document.querySelector('#image-slider');
const prevBtn = document.querySelector('#prev-img');
const nextBtn = document.querySelector('#next-img');
const itemSlider = document.querySelector('#item-slider');
const prevItemBtn = document.querySelector('#prev-item');
const nextItemBtn = document.querySelector('#next-item');

let slideWidth = slider.clientWidth;
let currentIndex = 0;
let itemSlideWidth = itemSlider.clientWidth;
let currentItemIndex = 0;

hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});

closeMenu.addEventListener("click", () => {
    closeMenu.classList.toggle("active");
    mobileMenu.classList.remove("active");
});

// Functions for main slider
function showSlide(index) {
    const newTransformValue = -index * slideWidth + 'px';
    slider.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextSlide() {
    currentIndex++;
    if (currentIndex >= slider.children.length) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = slider.children.length - 1;
    }
    showSlide(currentIndex);
}

function updateSlideWidth() {
    slideWidth = slider.clientWidth;
    showSlide(currentIndex);
}

prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);
window.addEventListener('resize', updateSlideWidth);
updateSlideWidth();

// Function for the second slider
function showItemSlide(index) {
    const newTransformValue = -index * itemSlideWidth + 'px';
    itemSlider.style.transform = 'translateX(' + newTransformValue + ')';
}

function nextItemSlide() {
    currentItemIndex++;
    if (currentItemIndex >= itemSlider.children.length) {
      currentItemIndex = 0;
    }
    showItemSlide(currentItemIndex);
  }
  
  function prevItemSlide() {
    currentItemIndex--;
    if (currentItemIndex < 0) {
      currentItemIndex = itemSlider.children.length - 1;
    }
    showItemSlide(currentItemIndex);
  }
  
  function updateItemSlideWidth() {
    itemSlideWidth = itemSlider.clientWidth;
    showItemSlide(currentItemIndex);
  }
  
  prevItemBtn.addEventListener('click', prevItemSlide);
  nextItemBtn.addEventListener('click', nextItemSlide);
  window.addEventListener('resize', updateItemSlideWidth);
  updateItemSlideWidth();