var beagleButton = document.getElementById('beagleButton');
beagleButton.addEventListener('click', goBeagles);

function goBeagles() {
    // JSON DATA INLADEN MET 3 AFBEELDINGEN VAN BEAGLES

    // variabelen met de html elementen uit de pagina
    // const is een constante variabele, dus ongeveer hetzelfde als var
    const section = document.querySelector('section'); // variabele aangemaakt voor de section

    // variabele met de url waar de JSON vandaan komt
    let requestURL = 'https://dog.ceo/api/breed/beagle/images/random/3';

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
