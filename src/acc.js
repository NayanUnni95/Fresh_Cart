document.querySelector('#logout').onclick = () => {
  localStorage.clear();
  window.open('./login.html', '_self');
};
