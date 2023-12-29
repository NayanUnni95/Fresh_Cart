let userName = document.getElementById("name");
let email = document.getElementById("email");
let pass = document.getElementById("pass");
let confirm_pass = document.getElementById("c_pass");
let name_err = document.querySelector(".name");
let email_err = document.querySelector(".email");
let pass_err = document.querySelector(".pass");

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.querySelector("#email").onclick = () => {
  let value = userName.value || null;
  if (!value) {
    name_err.classList.toggle("active");
  } else if (value) {
    name_err.classList.toggle(".name");
  }
};

document.querySelector(".passw").onclick = () => {
  let isValid = validateEmail(email.value);
  if (!isValid) {
    email_err.classList.toggle("active");
  } else if (isValid) {
    email_err.classList.toggle(".email");
  }
};

document.querySelector("#submit").onclick = () => {
  let name_value = userName.value || null;
  let email_value = email.value || null;
  let pass_value = pass.value || null;
  let con_pass = confirm_pass.value || null;
  if (name_value && email_value && pass_value && con_pass) {
    if (pass_value != con_pass) {
      pass_err.classList.toggle("active");
    } else if (pass_value === con_pass) {
      pass_err.classList.toggle(".pass");
      window.open("../index.html", "_self");
    }
    console.log("Login success 🎊");
  } else if (!name_value && !email_value && !pass_value && !con_pass) {
    // console.log(".");
    name_err.classList.toggle("active");
    email_err.classList.toggle("active");
    pass_err.classList.toggle("active");
  } else if (name_value && !email_value && !pass_value && !con_pass) {
    // console.log("..");
    name_err.classList.toggle(".name");
    email_err.classList.toggle("active");
    pass_err.classList.toggle("active");
  } else if (!name_value && email_value && !pass_value && !con_pass) {
    // log("...");
    name_err.classList.toggle("active");
    email_err.classList.toggle(".email");
    pass_err.classList.toggle("active");
  } else if (name_value && email_value) {
    // console.log("....");
    name_err.classList.toggle(".name");
    email_err.classList.toggle(".email");
    console.log(`${pass_value} ${con_pass}`);
    if (!pass_value && !con_pass) {
      //   console.log("*");
      pass_err.classList.toggle("active");
    } else if (!pass_value || con_pass) {
      //   console.log("**");
      pass_err.classList.toggle("active");
    }
  }
};
