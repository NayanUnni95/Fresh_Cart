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
    const name = document.querySelector('#user_name');
    name.innerHTML = `Hello ${userName},`;
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
  document.querySelector('body').classList.toggle('active');
  document.querySelector('.box').classList.toggle('active');
};

(function load() {
  const fruitDiv = document.querySelector('.fruit-wrapper');
  const vegDiv = document.querySelector('.veg-wrapper');
  const grainDiv = document.querySelector('.grain-wrapper');
  const greenDiv = document.querySelector('.green-wrapper');
  const nutDiv = document.querySelector('.nut-wrapper');
  const freshCutDiv = document.querySelector('.cut-wrapper');
  const productDiv = document.querySelector('.product-wrapper');
  const veg2Div = document.querySelector('.veg2-wrapper');

  const fetchAPI = async () => {
    try {
      const response = await fetch('../db/data.json');
      const data = await response.json();
      // console.log(data);
      let count1 = count2 = count3 = count4 = count5 = count6 = count7 = count8 = 0;
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
        if (element.category === 'fruits' && count1 < 5) {
          count1++;
          fruitDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'Vegetables' && count2 < 5) {
          count2++;
          vegDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'grains' && count3 < 5) {
          count3++;
          grainDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'Greens' && count4 < 5) {
          count4++;
          greenDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'nuts' && count5 < 5) {
          count5++;
          nutDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'fresh cuts' && count6 < 5) {
          count6++;
          freshCutDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'product' && count7 < 5) {
          count7++;
          productDiv.insertAdjacentHTML('beforeend', tag);
        } else if (element.category === 'vegetables-2' && count8 < 5) {
          count8++;
          veg2Div.insertAdjacentHTML('beforeend', tag);
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
