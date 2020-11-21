
var menu_toggler = document.querySelector('.menu-toggler')
var nav = document.querySelector('nav')


// Navigation Bar


menu_toggler.addEventListener('click', function navBarAdd(){
    menu_toggler.classList.toggle('active');
    nav.classList.toggle('active');
})




// Lozad
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();



// Plyr
const player = new Plyr("#player");
window.player = player;