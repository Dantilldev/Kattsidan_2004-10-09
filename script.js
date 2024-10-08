const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navBar');

hamburger.addEventListener('click', function () {
  navbar.classList.toggle('navOpen');
});
