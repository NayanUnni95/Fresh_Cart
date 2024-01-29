import {product} from '../data.js';
const searchForm = document.querySelector('.search-form');
const shoppingCart = document.querySelector('.shopping-cart');
const loginForm = document.querySelector('.login-form');
const accForm = document.querySelector('.acc-form');
const menuBar = document.querySelector('.navbar');
const bgColor = document.querySelector('.header');

document.querySelector('#search-btn').onclick = () => {
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  menuBar.classList.remove('active');
  bgColor.classList.remove('dark-mode');
  searchForm.classList.toggle('active');
};

document.querySelector('#cart-btn').onclick = () => {
  loginForm.classList.remove('active');
  menuBar.classList.remove('active');
  bgColor.classList.remove('dark-mode');
  searchForm.classList.remove('active');
  shoppingCart.classList.toggle('active');
};

document.querySelector('#login-btn').onclick = () => {
  shoppingCart.classList.remove('active');
  menuBar.classList.remove('active');
  bgColor.classList.remove('dark-mode');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');

  const userName = localStorage.getItem('name');
  const userPass = localStorage.getItem('pass');
  if (!userName && !userPass) {
    loginForm.classList.toggle('active');
    console.log('.');
    // window.open('./login.html', '_self');
  } else {
    accForm.classList.toggle('active');
    console.log('..');
    // window.open('./acc.html', '_self');
  }
};

document.querySelector('#menu-btn').onclick = () => {
  shoppingCart.classList.remove('active');
  bgColor.classList.remove('dark-mode');
  searchForm.classList.remove('active');
  shoppingCart.classList.remove('active');
  loginForm.classList.remove('active');
  menuBar.classList.toggle('active');
};

document.querySelector('#color-btn').onclick = () => {
  bgColor.classList.toggle('dark-mode');
};

// const email = document.getElementById('email');
// const pass = document.getElementById('pass');

// function check() {
//   if (email.value == null && pass.value == null) {
//     alert('Empty Input...');
//   } else {
//     console.log('Ok');
//     email.value = '';
//     pass.value = '';
//   }
// }
// function print() {
//   for (let i = 0; product.data[i] != null; i++) {
//     for (let j = 0; product.data[i].type[j] != null; j++) {
//       console.log(product.data[i].type[j]);
//     }
//   }
// }

(function load() {
  const mDiv = document.getElementById('product-slider');

  for (let i = 0; product.data[i] != null; i++) {
    const h1 = document.createElement('h1');
    h1.innerHTML = product.data[i].type[0].category;
    mDiv.appendChild(h1);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    mDiv.appendChild(wrapper);

    for (let j = 0; product.data[i].type[j] != null; j++) {
      const box = document.createElement('div');
      box.classList.add('box');
      wrapper.appendChild(box);

      const img = document.createElement('img');
      img.src = product.data[i].type[j].img;
      box.appendChild(img);

      const name = document.createElement('h3');
      box.appendChild(name);
      name.innerHTML = product.data[i].type[j].name;

      const price = document.createElement('div');
      price.classList.add('price');
      box.appendChild(price);
      price.innerHTML = `Rs. ${product.data[i].type[j].price}.00 /-`;

      const rate = document.createElement('div');
      rate.classList.add('stars');
      box.appendChild(rate);

      for (let k = 0; k < product.data[i].type[j].rate; k++) {
        const star = document.createElement('i');
        star.classList.add('fas');
        star.classList.add('fa-star');
        rate.appendChild(star);
      }

      const cart = document.createElement('a');
      cart.classList.add('btn');
      box.appendChild(cart);
      cart.innerHTML = 'add to cart';
    }
  }
  console.log('Products loaded successfully ⛳');
})();

document.querySelector('#home-profile-btn').onclick = () => {
  const userName = localStorage.getItem('name');
  const userPass = localStorage.getItem('pass');
  if (!userName && !userPass) {
    // window.open("../index.html", "_self");
    window.open('./login.html', '_self');
  } else {
    window.open('./acc.html', '_self');
  }
};

document.querySelector('#logout').onclick = () => {
  localStorage.clear();
  window.open('./login.html', '_self');
};
