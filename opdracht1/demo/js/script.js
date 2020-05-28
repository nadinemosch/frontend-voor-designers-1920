/*
  Wat doe je ook alweer in Javascript voor een micro-interactie?
  1. Gebruik de querySelector om een element in je html te selecteren
  2. Koppel een evenListener aan het element om een mouse-event te detecteren
  3. Gebruik het Classlist object om een css class aan een element toe te voegen of weg te halen.
*/
var button = document.querySelector('button');

button.addEventListener('click', filmToevoegen);

function filmToevoegen(){
	button.classList.toggle('welToegevoegd');
    var isToegevoegd = button.classList.contains('welToegevoegd')
    
    if(isToegevoegd){
        button.textContent='REMOVE'
    }
    else{
        button.textContent='ADD'
    }
}