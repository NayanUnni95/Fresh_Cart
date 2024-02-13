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
  } else {
    accForm.classList.toggle('active');
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

(function load() {
  const fruitDiv = document.querySelector('.fruit-wrapper');
  const vegDiv = document.querySelector('.veg-wrapper');
  const grainDiv = document.querySelector('.grain-wrapper');
  const greenDiv = document.querySelector('.green-wrapper');
  const nutDiv = document.querySelector('.nut-wrapper');

  const fetchAPI = async () => {
    try {
      const response = await fetch('../db/data.json');
      const data = await response.json();
      // console.log(data);
      data.forEach((element) => {
        const tag =
          `<div class="box">
          <img src="${element.img}">
          <h3>${element.name}</h3>
          <div class="price">Rs ${element.price} /-</div>
            <div class="stars">
              <h3>Rating ${element.rate}</h3>
            </div>
          <a class="btn" href="">add to cart</a>
        </div>`;
        if (element.category === 'fruits') {
          fruitDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'Vegetables') {
          vegDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'grains') {
          grainDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'Greens') {
          greenDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'nuts') {
          nutDiv.insertAdjacentHTML('beforeend', tag);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  fetchAPI();
  console.log('Products loaded successfully ⛳');
})();

document.querySelector('#home-profile-btn').onclick = () => {
  const userName = localStorage.getItem('name');
  const userPass = localStorage.getItem('pass');
  if (!userName && !userPass) window.open('../login/login.html', '_self');
  else window.open('../account/acc.html', '_self');
};

document.querySelector('#logout').onclick = () => {
  localStorage.clear();
  window.open('./login.html', '_self');
};

const preloader = document.querySelector('.preloader');
const header = document.querySelector('.header');
const home = document.querySelector('.home');
const feature = document.querySelector('.features');
const product = document.querySelector('.products');
const footer = document.querySelector('.footer');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.style.display = 'none';
    header.style.display = 'flex';
    home.style.display = 'flex';
    feature.style.display = 'block';
    product.style.display = 'block';
    footer.style.display = 'flex';
  }, 1000);
})