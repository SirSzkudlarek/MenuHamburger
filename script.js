const burgerBtn = document.querySelector('.burger');
const barsIco = document.querySelector('.fa-bars');
const xIco = document.querySelector('.fa-times');
const nav = document.querySelector('nav ul');

/* Moja wersja kodu
const delay = () => {
  xIco.classList.toggle('xIcoVisable');
  xIco.classList.toggle('hide');
}

const handleNav = () => {
  nav.classList.toggle('active');
  barsIco.classList.toggle('hide');
}

const showMenu = () => {
  handleNav();
  burgerBtn.style.justifyContent = 'flex-end';
  setTimeout(delay, 300);
}

const hideMenu = () => {
  handleNav();
  delay();
  burgerBtn.style.justifyContent = 'flex-start';
}

barsIco.addEventListener('click', showMenu);
xIco.addEventListener('click', hideMenu);
*/ 

const handleNav = () => {
  nav.classList.toggle('active');
  burgerBtn.classList.toggle('active');
  barsIco.classList.toggle('hide')
  xIco.classList.toggle('hide')
}

burgerBtn.addEventListener('click', handleNav);