const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navLinks');
const close = document.querySelector('.close');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  console.log('click');
});

close.addEventListener('click', () => {
  navLinks.classList.remove('active');
  console.log('click');
});
