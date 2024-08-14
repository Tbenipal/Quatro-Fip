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
    "description": "INGREDIENTS: CARBONATED WATER, SUGAR, CITRIC ACID, NATURAL LEMON FLAVOR, SODIUM CITRATE, POTASSIUM SORBATE, SODIUM BENZOATE, LEMON JUICE CONCENTRATE",
    "image": "images/Lemon_Front2.png"
  },
  {
    "name": "Orange",
    "description": "INGREDIENTS: CARBONATED WATER, SUGAR, CITRIC ACID, NATURAL ORANGE FLAVOR, SODIUM CITRATE, POTASSIUM SORBATE, SODIUM BENZOATE, ORANGE JUICE CONCENTRATE",
    "image": "images/Orange_Front2.png"
  },
  {
    "name": "Pineapple",
    "description": "INGREDIENTS: CARBONATED WATER, SUGAR, CITRIC ACID, NATURAL PINEAPPLE FLAVOR, SODIUM CITRATE, POTASSIUM SORBATE, SODIUM BENZOATE, PINEAPPLE JUICE CONCENTRATE",
    "image": "images/Pineapple_Front2.png"
  },
  {
    "name": "Grapefruit",
    "description": "CARBONATED WATER, SUGAR, CITRIC ACID, NATURAL GRAPEFRUIT FLAVOR, SODIUM CITRATE, POTASSIUM SORBATE, SODIUM BENZOATE, GRAPEFRUIT JUICE CONCENTRATE",
    "image": "images/Grapefruit_Front2.png"
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

  let closeButton = document.createElement('a');
  closeButton.href = "";
  closeButton.classList = "lightbox_close";
  closeButton.innerText = "x";
  content.appendChild(closeButton);

  lightBox.classList.add("show-lightbox");
}

links.forEach(link => link.addEventListener("click", fillContent));