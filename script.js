var navFlex = document.querySelector('#nav-flex')


navFlex.addEventListener('click', myFunction)

function myFunction(){
    if (navFlex.className === "topnav"){
        navFlex.className += " responsive";
    } else{
        navFlex.className = "topnav";
    }

    console.log(navFlex.className)
}