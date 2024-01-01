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
  const value = userName.value || null;
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
      window.open('./src/home.html', '_self');
    }
    localStorage.setItem('name', nameValue);
    localStorage.setItem('email', emailValue);
    localStorage.setItem('pass', passValue);
    console.log('Login success 🎊');
  } else if (!nameValue && !emailValue && !passValue && !conPass) {
    // console.log(".");
    nameErr.classList.toggle('active');
    emailErr.classList.toggle('active');
    passErr.classList.toggle('active');
  } else if (nameValue && !emailValue && !passValue && !conPass) {
    // console.log("..");
    nameErr.classList.toggle('.name');
    emailErr.classList.toggle('active');
    passErr.classList.toggle('active');
  } else if (!nameValue && emailValue && !passValue && !conPass) {
    // log("...");
    nameErr.classList.toggle('active');
    emailErr.classList.toggle('.email');
    passErr.classList.toggle('active');
  } else if (nameValue && emailValue) {
    // console.log("....");
    nameErr.classList.toggle('.name');
    emailErr.classList.toggle('.email');
    console.log(`${passValue} ${conPass}`);
    if (!passValue && !conPass) {
      //   console.log("*");
      passErr.classList.toggle('active');
    } else if (!passValue || conPass) {
      //   console.log("**");
      passErr.classList.toggle('active');
    }
  }
};

window.onload = () => {
  localStorage.setItem('name', '');
  localStorage.setItem('email', '');
  localStorage.setItem('pass', '');
  localStorage.setItem('order', '');
  localStorage.setItem('wishlist', '');
  // localStorage.clear();
};
