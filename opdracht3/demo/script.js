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

// VARIABELEN VOOR HET GEBRUIK VAN DE TERUG EN VERDER BUTTON
var buttonTerug = document.querySelector('#terugButton');
var buttonVerder = document.querySelector('#verderButton');
var beagleCarousel = document.querySelector('section');

buttonTerug.addEventListener('click', navigatieTerug);
buttonVerder.addEventListener('click', navigatieVerder);


buttonTerug.addEventListener('keydown', pressNavigeer);
buttonVerder.addEventListener('keydown', pressNavigeer);


function navigatieTerug() {
    beagleCarousel.style.transform = "translateX(332px)";
}

function navigatieVerder() {
    beagleCarousel.style.transform = "translateX(-332px)";
}
