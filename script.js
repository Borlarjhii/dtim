var navFlex = document.querySelector('#nav-flex')

var modalClose = document.querySelector('#modal-close')
var img01 = document.querySelector('.img01')


// Navigation Bar

navFlex.addEventListener('click', navBar)

function navBar(){
    if (navFlex.className === "topnav"){
        navFlex.className += " responsive";
    } else{
        navFlex.className = "topnav";
    }

    console.log(navFlex.className)
}

// modal image/ \Pop-up Box Images


modalClose.addEventListener('click', modalCloseFunction)
function modalCloseFunction(){
    modalClose.style.display = "none"
}


document.querySelectorAll('.modal-img').forEach(modalImg => 
    modalImg.addEventListener('click', modalFunction => {
        img01.src = modalImg.src;
        modalClose.style.display = 'block'
    })
);


