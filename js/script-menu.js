var btnMobile = document.querySelector("#btn-mobile")

function toggleMenu(){
    var nav = document.querySelector("#nav")
    var header = document.querySelector("header")
    nav.classList.toggle('active')
    btnMobile.classList.toggle('fa-x')
}

btnMobile.addEventListener("click", toggleMenu);
