// const loader = document.getElementById('page-preloader');
// const interval = setInterval(() => {
//   loader.style.opacity -= 0.01;
//   if (loader.style.opacity==0) clearInterval(interval);
// }, 10)



//const { setTimeout } = require("timers/promises");




let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};




let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a')



  

ScrollReveal({
  reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('home-content, .heading', { origin: 'top' });


