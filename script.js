import { product } from "./src/data.js";
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.toggle("active");
};
let shoppingCart = document.querySelector(".shopping-cart");

document.querySelector("#cart-btn").onclick = () => {
  shoppingCart.classList.toggle("active");
};
let loginForm = document.querySelector(".login-form");

document.querySelector("#login-btn").onclick = () => {
  loginForm.classList.toggle("active");
};
let menuBar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  menuBar.classList.toggle("active");
};
let bg_color = document.querySelector(".header");

document.querySelector("#color-btn").onclick = () => {
  bg_color.classList.toggle("dark-mode");
};

let email = document.getElementById("email");
let pass = document.getElementById("pass");

function check() {
  if (email.value == null && pass.value == null) {
    alert("Empty Input...");
  } else {
    console.log("Ok");
    email.value = "";
    pass.value = "";
  }
}
function print() {
  for (let i = 0; product.data[i] != null; i++) {
    for (let j = 0; product.data[i].type[j] != null; j++) {
      console.log(product.data[i].type[j]);
    }
  }
}

(function load() {
  let mDiv = document.getElementById("product-slider");

  for (let i = 0; product.data[i] != null; i++) {
    const h1 = document.createElement("h1");
    h1.innerHTML = product.data[i].type[0].category;
    mDiv.appendChild(h1);

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    mDiv.appendChild(wrapper);

    for (let j = 0; product.data[i].type[j] != null; j++) {
      const box = document.createElement("div");
      box.classList.add("box");
      wrapper.appendChild(box);

      const img = document.createElement("img");
      img.src = product.data[i].type[j].img;
      box.appendChild(img);

      const name = document.createElement("h3");
      box.appendChild(name);
      name.innerHTML = product.data[i].type[j].name;

      const price = document.createElement("div");
      price.classList.add("price");
      box.appendChild(price);
      price.innerHTML = `Rs. ${product.data[i].type[j].price}.00 /-`;

      const rate = document.createElement("div");
      rate.classList.add("stars");
      box.appendChild(rate);

      for (let k = 0; k < product.data[i].type[j].rate; k++) {
        let star = document.createElement("i");
        star.classList.add("fas");
        star.classList.add("fa-star");
        rate.appendChild(star);
      }

      const cart = document.createElement("a");
      cart.classList.add("btn");
      box.appendChild(cart);
      cart.innerHTML = "add to cart";
    }
  }
  console.log("Products loaded successfully ⛳");
})();
