const email = document.getElementById('email');
const pass = document.getElementById('pass');
const emailErr = document.querySelector('.email');
const passErr = document.querySelector('.pass');

// eslint-disable-next-line require-jsdoc
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector('#pass').onclick = () => {
  const isValid = validateEmail(email.value);
  if (!isValid) {
    emailErr.classList.toggle('active');
  } else {
    emailErr.classList.toggle('.email');
  }
};

document.querySelector('.login').onclick = () => {
  const emailValue = email.value || null;
  const passValue = pass.value || null;
  if (emailValue === null && passValue === null) {
    emailErr.classList.toggle('active');
    passErr.classList.toggle('active');
  } else if (emailValue === null && passValue != null) {
    emailErr.classList.toggle('active');
  } else if (emailValue != null && passValue === null) {
    passErr.classList.toggle('active');
  } else {
    window.open('./home.html', '_self');
  }
};
