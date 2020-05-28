var buttonTerug = document.querySelector('#terugKnop');
var buttonVerder = document.querySelector('#verderKnop');
var fotoCarousel = document.querySelector('ul');

buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);


buttonTerug.addEventListener('keydown', navigatieTerug);
buttonVerder.addEventListener('keydown', navigatieVerder);


function navigatieTerug() {
    fotoCarousel.style.transform = "translateX(312px)";
}

function navigatieVerder() {
    fotoCarousel.style.transform = "translateX(-100px)";
}
