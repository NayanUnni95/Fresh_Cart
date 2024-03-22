const userName = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('c_pass');
const passErr = document.querySelector('.pass');

document.querySelector('#email').onclick = () => {
  const value = userName.value ?? null;
  if (!value) {
    nameErr.classList.toggle('active');
  } else if (value) {
    nameErr.classList.toggle('.name');
  }
};

document.querySelector('.passw').onclick = () => {
  const isValid = validateEmail(email.value);
  if (!isValid) {
    emailErr.classList.toggle('active');
  } else if (isValid) {
    emailErr.classList.toggle('.email');
  }
};

const setKey = (item, value) => {
  localStorage.setItem(item, value);
};

const getKey = (item) => {
  return localStorage.getItem(item);
};

document.querySelector('#submit').onclick = () => {
  const nameValue = userName.value || null;
  const emailValue = email.value || null;
  const passValue = pass.value || null;
  const conPass = confirmPass.value || null;
  if (passValue != conPass) {
    passErr.classList.toggle('active');
  } else {
    // passErr.classList.toggle('.pass');
    setKey('name', nameValue);
    setKey('email', emailValue);
    setKey('pass', passValue);
    console.log('Login success 🎊');
    window.open('./src/home/home.html', '_self');
  }
};

window.onload = () => {
  const userName = getKey('name');
  const userPass = getKey('pass');
  if (userName && userPass) {
    window.open('./src/home/home.html', '_self');
  } else if (!userName && !userPass) {
    setKey('name', '');
    setKey('email', '');
    setKey('pass', '');
    setKey('order', '');
    setKey('wishlist', '');
    // localStorage.clear();
  }
};

document.querySelector('.back').addEventListener('click', () => {
  window.history.back();
});
