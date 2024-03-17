window.addEventListener('load', () => {
  document.querySelector('h3').innerHTML =
    `Hello ${localStorage.getItem('name')},`;
  document.querySelector('title').innerHTML =
    `Hello ${localStorage.getItem('name')},`;
  document.querySelector('#name').innerHTML =
    `Name : ${localStorage.getItem('name')}`;
  document.querySelector('#pass').innerHTML =
    `Password : ${localStorage.getItem('pass')}`;
  document.querySelector('#email').innerHTML =
    `Email : ${localStorage.getItem('email')}`;
});

document.querySelector('#logout').onclick = () => {
  if (confirm('Delete account?')) {
    localStorage.clear();
    window.open('../login/login.html', '_self');
  } else {
    alert('Account Not deleted...');
  }
};
const data = document.querySelector('.data');

document.querySelector('#acc').addEventListener('click', () => {
  data.classList.toggle('active');
});

document.querySelector('.back').addEventListener('click', () => {
  window.history.back();
});
