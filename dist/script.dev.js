"use strict";

var menu_toggler = document.querySelector('.menu-toggler');
var nav = document.querySelector('nav');
var modalClose = document.querySelector('#modal-close');
var img01 = document.querySelector('.img01'); // Navigation Bar

menu_toggler.addEventListener('click', function navBarAdd() {
  menu_toggler.classList.toggle('active');
  nav.classList.toggle('active');
}); // modal image/Pop-up Box Images

modalClose.addEventListener('click', function modalCloseFunction() {
  modalClose.style.display = "none";
});
document.querySelectorAll('.modal-img').forEach(function (modalImg) {
  return modalImg.addEventListener('click', function (modalFunction) {
    img01.src = modalImg.src;
    modalClose.style.display = 'block';
  });
});
var player = new Plyr("#player");
window.player = player;