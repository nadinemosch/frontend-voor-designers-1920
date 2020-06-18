// Beagle button uit html halen en hier een click event aan koppelen waarna hij de goBeagles functie uitvoert
var beagleButton = document.querySelector('#beagleButton');
beagleButton.addEventListener('click', goBeagles);

// JSON DATA INLADEN MET 4 AFBEELDINGEN VAN BEAGLES WANNEER ER OP DE BUTTON GEKLIKT WORDT
function goBeagles() {
    // variabelen met de html elementen uit de pagina
    // const is een constante variabele, dus ongeveer hetzelfde als var
    const section = document.querySelector('section'); // variabele aangemaakt voor de section

    // variabele met de url waar de JSON vandaan komt
    let requestURL = 'https://dog.ceo/api/breed/beagle/images/random/4';

    // een xml http request variabele aanmaken
    let request = new XMLHttpRequest();

    // koppel json url aan xmlhttprequest
    request.open('GET', requestURL);
    // moet je meegeven, zo weet js dat de data die terugkomt json is
    request.responseType = 'json';
    // roept url aan en verstuurd 'm
    request.send();

    // onload/onerror zijn eventlistener van het xmlhttprequest > als de data is geladen voert ie deze functie
    request.onload = function () {
        const dogs = request.response;
        //functie aanroepen en json data aan meegeven als parameter
        // console.log(doggos);
        showDogs(dogs.message);
    }

    function showDogs(jsonObj) {
        // console.log("showDoggos", jsonObj["message"]);
        // console.log("function showDoggos", jsonObj);
        // console.log(jsonObj[1].message);

        for (let i = 0; i < jsonObj.length; i++) {

            //html elementen aanmaken
            const myArticle = document.createElement('article');

            const afbeelding = document.createElement('img');
            afbeelding.src = jsonObj[i];

            // html elementen genest
            myArticle.appendChild(afbeelding);

            // nieuwe html elementen aan de section in de html
            section.appendChild(myArticle);
        }
    }
}

// NAVIGEREN TUSSEN DE AFBEELDINGEN

// variabelen voor het gebruik van de terug en verder button
var buttonTerug = document.querySelector('#terugButton');
var buttonVerder = document.querySelector('#verderButton');

// variabele voor de <section> waar de afbeeldingen inzitten
var beagleCarousel = document.querySelector('section');

// event listeners toevoegen aan de terug en verder buttons
buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);

// functie aanmaken voor wat er gebeurt wanneer je op de terug button drukt
function navigatieTerug() {
    beagleCarousel.classList.add('navigeerTerug');
    var terugGenavigeerd = beagleCarousel.classList.contains('navigeerTerug');
    
    if (terugGenavigeerd) {
        beagleCarousel.classList.remove('navigeerVerder');
    }
    console.log(beagleCarousel.classList.contains);
}

// functie aanmaken voor wat er gebeurt wanneer je op de verder button drukt
function navigatieVerder() {
    beagleCarousel.classList.add('navigeerVerder');
    var verderGenavigeerd = beagleCarousel.classList.contains('navigeerVerder');

    if (verderGenavigeerd) {
        beagleCarousel.classList.remove('navigeerTerug');
    }
    console.log(beagleCarousel.classList.contains);
}

//buttonTerug.addEventListener('keydown', pressNavigeer);
//buttonVerder.addEventListener('keydown', pressNavigeer);
