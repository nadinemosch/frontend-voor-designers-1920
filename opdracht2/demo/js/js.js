var buttonTerug = document.querySelector('#terugKnop');
var buttonVerder = document.querySelector('#verderKnop');
var fotoCarousel = document.querySelector('ul');

buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);


buttonTerug.addEventListener('keydown', pressNavigeer);
buttonVerder.addEventListener('keydown', pressNavigeer);


function navigatieTerug() {
    fotoCarousel.style.transform = "translateX(312px)";
}

function navigatieVerder() {
    fotoCarousel.style.transform = "translateX(-312px)";
}

function pressNavigeer() {
    if (e.keyCode == '37') {
        fotoCarousel.style.transform = "translateX(312px)";
        // linker pijl
    } else(e.keyCode == '39') {
        fotoCarousel.style.transform = "translateX(-312px)";
        // rechter pijl
    }
}
