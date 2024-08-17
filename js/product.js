// Variables
const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-navbar");
const closeMenu = document.querySelector(".close-burger");

const lightBox = document.querySelector("#lightbox");
const links = document.querySelectorAll(".mob-btn, .des-btn");
const content = document.querySelector("#lightbox article");

let products = [
  {
    "name": "Lemon Flavour",
    "description": "Lemon flavour provides 50 calories, 0 grams of fat, and 13 grams of carbohydrates, including 12 grams of natural sugars from real lemon juice concentrate. This zesty beverage provides a significant boost of Vitamin C, delivering 30% of your daily recommended intake to help support a healthy immune system.",
    "image": "images/Lemon_Front2.png"
  },
  {
    "name": "Orange Flavour",
    "description": "Orange flavour provides 80 calories, 0 grams of fat, and 20 grams of carbohydrates, including 18 grams of natural sugars from real orange juice concentrate. This delicious beverage is an excellent source of Vitamin C, providing 30% of your daily recommended intake to help maintain a strong immune system",
    "image": "images/Orange_Front2.png"
  },
  {
    "name": "Pineapple Flavour",
    "description": "Pineapple flavour provides 70 calories, 0 grams of fat, and 18 grams of carbohydrates, including 16 grams of natural sugars from real pineapple juice concentrate. This exotic beverage is enriched with essential vitamins, providing 20% of your daily recommended intake of Vitamin C and 10% of Vitamin B6, supporting both your immune system and energy metabolism.",
    "image": "images/Pineapple_Front2.png"
  },
  {
    "name": "Grapefruit Flavour",
    "description": "Grapefruit flavour provides 65 calories, 0 grams of fat, and 17 grams of carbohydrates, including 15 grams of natural sugars derived from real grapefruit juice concentrate. This invigorating beverage is an excellent source of Vitamin C, providing 35% of your daily recommended intake to bolster your immune system.",
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