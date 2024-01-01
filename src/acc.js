document.querySelector('#logout').onclick = () =>{
  localStorage.clear();
  window.open('./home.html', '_self');
};
