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
let bgcolor = document.querySelector(".header");

document.querySelector("#color-btn").onclick = () => {
  bgcolor.classList.toggle("active");
};
