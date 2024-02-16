const userName = document.getElementById('name');
const email = document.getElementById('email');
const pass = document.getElementById('pass');
const confirmPass = document.getElementById('c_pass');
const nameErr = document.querySelector('.name');
const emailErr = document.querySelector('.email');
const passErr = document.querySelector('.pass');

// eslint-disable-next-line require-jsdoc
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

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
  if (nameValue && emailValue && passValue && conPass) {
    if (passValue != conPass) {
      passErr.classList.toggle('active');
    } else if (passValue === conPass) {
      passErr.classList.toggle('.pass');
      window.open('./src/home/home.html', '_self');
    }
    setKey('name', nameValue);
    setKey('email', emailValue);
    setKey('pass', passValue);
    console.log('Login success 🎊');
  } else if (!nameValue && !emailValue && !passValue && !conPass) {
    nameErr.classList.toggle('active');
    emailErr.classList.toggle('active');
    passErr.classList.toggle('active');
  } else if (nameValue && !emailValue && !passValue && !conPass) {
    nameErr.classList.toggle('.name');
    emailErr.classList.toggle('active');
    passErr.classList.toggle('active');
  } else if (!nameValue && emailValue && !passValue && !conPass) {
    nameErr.classList.toggle('active');
    emailErr.classList.toggle('.email');
    passErr.classList.toggle('active');
  } else if (nameValue && emailValue) {
    nameErr.classList.toggle('.name');
    emailErr.classList.toggle('.email');
    console.log(`${passValue} ${conPass}`);
    if (!passValue && !conPass) {
      passErr.classList.toggle('active');
    } else if (!passValue || conPass) {
      passErr.classList.toggle('active');
    }
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