window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
        document.querySelector('.header').style.display = 'flex';
        document.querySelector('.home').style.display = 'flex';
        document.querySelector('.features').style.display = 'block';
        document.querySelector('.products').style.display = 'block';
        document.querySelector('.footer').style.display = 'flex';
    }, 1000);
});