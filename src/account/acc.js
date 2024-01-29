document.querySelector('#logout').onclick = () => {
  localStorage.clear();
  window.open('../login/login.html', '_self');
};
