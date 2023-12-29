let email = document.getElementById("email");
let pass = document.getElementById("pass");
let email_err = document.querySelector(".email");
let pass_err = document.querySelector(".pass");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector("#pass").onclick = () => {
  let isValid = validateEmail(email.value);
  if (!isValid) {
    email_err.classList.toggle("active");
  } else {
    email_err.classList.toggle(".email");
  }
};

document.querySelector(".login").onclick = () => {
  let email_value = email.value || null;
  let pass_value = pass.value || null;
  if (email_value === null && pass_value === null) {
    email_err.classList.toggle("active");
    pass_err.classList.toggle("active");
  } else if (email_value === null && pass_value != null) {
    email_err.classList.toggle("active");
  } else if (email_value != null && pass_value === null) {
    pass_err.classList.toggle("active");
  } else {
    window.open("../index.html", "_self");
  }
};
