
var menu_toggler = document.querySelector('.menu-toggler')
var nav = document.querySelector('nav')

var modalClose = document.querySelector('#modal-close')
var img01 = document.querySelector('.img01')


// Navigation Bar


menu_toggler.addEventListener('click', function navBarAdd(){
    menu_toggler.classList.toggle('active');
    nav.classList.toggle('active');
})




// modal image/Pop-up Box Images



const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();


const player = new Plyr("#player");
window.player = player;