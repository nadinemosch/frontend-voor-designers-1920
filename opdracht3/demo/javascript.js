// variabelen met de html elementen uit de pagina
// const is een constante variabele, dus ongeveer hetzelfde als var

const header = document.querySelector('header'); // variabele aangemaakt voor de header
const section = document.querySelector('section'); // variabele aangemaakt voor de section

// variabele met de url waar de JSON vandaan komt
let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json';
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
    const movies = request.response;
    //functie aanroepen en json data aan meegeven als parameter
    // console.log(movies);
    showMovies(movies);
}

function showMovies(jsonObj) {
    // console.log("showHeroes", jsonObj["members"]);
    // var heroes = jsonObj['members'];
    // console.log("function Showmovies", jsonObj);
    //console.log(jsonObj[0].title);

    for (let i = 0; i < jsonObj.length; i++) {
        //html elementen aanmaken
        const myArticle = document.createElement('article');

        const myH2 = document.createElement('h2');
        myH2.textContent = jsonObj[i].title;

        const plot = document.createElement('p');
        plot.textContent = jsonObj[i].plot;
        
        const plaatje = document.createElement('img');
        plaatje.src = jsonObj[i].cover;

        // json data koppelen aan html elementen
        //myH2.textContent = heroes[i].name;

        // html elementen genest
        myArticle.appendChild(myH2);
        myArticle.appendChild(plot);
        myArticle.appendChild(plaatje);

        // nieuwe html elementen aan de section in de html
        section.appendChild(myArticle);
    }
}
