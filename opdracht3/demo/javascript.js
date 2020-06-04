const header = document.querySelector('header'); // variabele aangemaakt voor de header
const section = document.querySelector('section'); // variabele aangemaaky voor de section

let requestURL = 'https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json'; // variabele aangemaakt voor de URL van de JSON data die we willen ophalen 
let request = new XMLHttpRequest(); // request maken

request.open('GET', requestURL); // request openen
request.responseType = 'json'; // Zo weet de server dat de response type json is
request.send(); // responseType naar JSON

request.onload = function () {
    const movies = request.response;
    showMovies(movies);
}
// Hier sla ik de response naar mn request op in een variabele genaamd movies

function showId(jsonObj) {
    var i;
    for (i = 0; i < 20; i++) {
        const id = document.createElement('p'); //maakt n <p> element
        id.textContent = jsonObj[i]['id']; // stores de id in <p>
    }
}

function showMovies(jsonObj) {
    const list = jsonObj; // zorgt ervoor dat js snapt dat het json is
    for (let i = 0; i < list.length; i++) {
        console.log(list[i]);
        const myArticle = document.createElement('article');
        const myH1 = document.createElement('h1'); // maakt h1 aan
        const myH2 = document.createElement('h2'); // maakt h2 aan
        const myPara1 = document.createElement('p'); // maakt p aan
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myPara4 = document.createElement('p');
        const myPara9 = document.createElement('p');
        const myList = document.createElement('ul'); // maakt ul aan

        myH1.textContent = list[i].id;
        myH2.textContent = list[i].title;

        myPara1.textContent = 'plot: ' + list[i].plot;
        myPara2.textContent = 'simple plot: ' + list[i].simple_plot;
        myPara3.textContent = 'release date: ' + list[i].release_date;
        myPara4.textContent = 'cover: ' + list[i].cover;
        myPara9.textContent = 'actors:';

        // hier haalt ie alle list items op die in de actors zitten 
        const actors = list[i].actors;
        for (let j = 0; j < actors.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = actors[j].actor_name;
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH1); // voegt h1 toe en maakt m zichtbaar
        myArticle.appendChild(myH2); // voegt h2 toe en maakt m zichtbaar
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myPara4);
        myArticle.appendChild(myPara9);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}
