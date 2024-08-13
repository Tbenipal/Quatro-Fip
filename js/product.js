// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll(".mob-btn, .btn");
const content = document.querySelector("#lightbox article");

let products = [
  {
    "name": "Lemon",
    "description": "Lemons are a good source of vitamin C and flavonoids, which are antioxidants.",
    "image": "images/Lemon_Front2.png"
  },
  {
    "name": "Orange",
    "description": "Oranges are known for their vitamin C content. They also contain fiber, antioxidants, and several nutrients.",
    "image": "images/Orange_Poster.jpg"
  },
  {
    "name": "Pineapple",
    "description": "Pineapples are tropical fruits that are rich in vitamins, enzymes, and antioxidants.",
    "image": "images/Pineapple_Poster2.jpg"
  },
  {
    "name": "Grapefruit",
    "description": "Grapefruits are low in calories but are full of nutrients. They are an excellent source of vitamins A and C.",
    "image": "images/Grapefruit_Poster.jpg"
  }
];

// Add event listener to hamburger
hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
});
  
  // Add event listener to close menu
  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
});

// Functions

function fillContent() {
  console.log(this.dataset.heroIndex);

  content.innerHTML = '';

  let productName = document.createElement('h3');
  productName.innerText = products[this.dataset.heroIndex].name;
  productName.classList = "lb_heading";
  content.appendChild(productName);

  let productImage = document.createElement('img');
  productImage.src = products[this.dataset.heroIndex].image;
  productImage.classList = "lb_image";
  content.appendChild(productImage);

  let productDescription = document.createElement('p');
  productDescription.innerText = products[this.dataset.heroIndex].description;
  productDescription.classList = "lb_text";
  content.appendChild(productDescription);

  lightBox.classList.add("show-lightbox");
}

links.forEach(link => link.addEventListener("click", fillContent));