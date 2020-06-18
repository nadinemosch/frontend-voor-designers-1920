# Frontend voor Designers - opdracht 3: Een interactie uitwerken met externe data

Voor deze opdracht ga je een functionaliteit ontwerpen met externe data. De data is JSON die met een [REST API](https://developer.mozilla.org/en-US/docs/Glossary/REST) van een externe bron wordt ingeladen met Javascript.  Als de data geladen is moeten gebruikers je ontwerp op verschillende manieren kunnen bedienen. Verschillende states zijn vormgeven en worden op het juiste moment getoond.

Lees hier de [opdrachtbeschrijving](./opdrachtbeschrijving.md).


# Project titel
WAT HAD IK NOG WILLEN DOEN?
• 1 afbeelding tonen ipv 3 (iets met overflow maar waar moet ik die exact neerzetten? (Als ik 'm op de section zet waar de afbeeldingen ingeladen worden krijg ik niet het gewenste resultaat)
• de terug en verder buttons vervolgens bijna direct naast de afbeelding krijgen ipv zoveel whitespace ertussen
• Je kan nu door blijven klikken waardoor de afbeeldingen helemaal het scherm uit verplaatst kunnen worden, kan ik op de verplaatsing iets van een limiet zetten?

Beagle carrousel

Bekijk de pagina op desktop!

Beschrijving en link
https://nadinemosch.github.io/frontend-voor-designers-1920/opdracht3/demo/index.html

Ik heb een pagina gemaakt waar er afbeeldingen van Beagles ingeladen worden als je op de button klikt, wanneer je op de buttons links en rechts klikt kan je navigeren tussen de afbeeldingen. Hetzelfde geldt voor wanneer je de pijltjes op je toetsenbord gebruikt. 

## interface
Leg de interface uit.

In de demo heb je interface design principles 04, 08, 09 & 11 van [Principles of User Interface Design](http://bokardo.com/principles-of-user-interface-design/) toegepast. Hoe heb je dat gedaan?

#04 > Er zullen geen events plaatsvinden die niet veroorzaakt worden door de gebruiker zelf, hierdoor voelt de gebruiker zich volledig in controle
#08 > Wanneer ze op de pagina belanden zijn er meerdere opties die ze kunnen doen (navigeren tussen de afbeeldingen of de pagina refreshen) dus er is altijd een next step die de gebruiker kan nemen
#09 > De visuele vormgeving zal ervoor zorgen dat de gebruiker kan raden wat er gebeurt wanneer zij hierop klikken of wanneer zij gebruik maken van de pijltjes op hun toetsenbord. Buttons zullen eruitzien als buttons en zich dus ook zo gedragen.
#11 > Door een titel + subtitel + CTA toe te voegen zal er een duidelijke hierarchie ontstaan, deze zijn gestyled zodat het duidelijk is voor de gebruiker wat de hierarchie hiervan is.

In de demo heb je meerdere [UI events](https://developer.mozilla.org/en-US/docs/Web/API/UIEvent) toegepast. Hoe heb je dat gedaan?
1. Wanneer je op de buttons met pijlen klikt kan je naar links of rechts navigeren (onclick event)
2. Wanneer je op de pijltjes op je toetsenbord klikt kan je naar links of rechts navigeren (keypress event)
3. Wanneer je op de 'add beagles' button klikt zullen de beagle afbeeldingen inladen (onclick event)

IN de demo heb je een aantal states van de [UI stack](https://www.scotthurff.com/posts/why-your-user-interface-is-awkward-youre-ignoring-the-ui-stack/) toegepast. Hoe heb je dat gedaan?

• Wanneer je op de pagina landt is de 'add beagles' knop een CTA en wanneer je deze hebt ingedrukt dan wordt hij grijs en kan je er niet meer op klikken. (blank state en ideal state)


## code

De uitleg over de code staat in comments in de bestanden (HTML/CSS en JS)
