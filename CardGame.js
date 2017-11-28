var cardStack;          //ursprüngliches Deck
var mixedCardStack;     //gemischtes Deck
var numberOfPlayers;    //anzahl der Spieler
var numberOfHandCards;  //anzahl der Handkarten
var playerCards = [];   //array um Spielerkarten zu speichern
var enemyCards = [];    //array um Gegnerkarten zu speichern



function startGame(button) {            //funktion um das spiel nach klicken des "Spielstarten"-Buttons zu starten

    button.style.display = "none";      //start-button ausblednen
    numberOfHandCards = 5;              //anzahl der starthand festlegen
    shuffleNewDeck();                   //funktion für ein "gemischtes" array an Elementen

}





function shuffleNewDeck(){
    //deckSize = 20;                      //Deckkartenzahl
    cardStack = ["a1","a2","a3","a4","a5","b1","b2","b3","b4","b5","c1","c2","c3","c4","c5","d1","d2","d3","d4","d5"];      //ursprünglichers sortierter Kartenstapel
    shuffle(cardStack);                 //funktion sortiertes Deck => unsortiertes Deck


}

function shuffle(cardStack){

    var n = cardStack.length, i;        //nötige variablen für das "mischen"
    mixedCardStack = [];                //mixedCardStack als leeres Array zu deklarieren

        while (n) {
            i = Math.floor(Math.random() * cardStack.length);   //random karte aus dem noch vorhandenen sortierten Kartenstapel

            if (i in cardStack) {
                mixedCardStack.push(cardStack[i]);      //random Element i aus dem sortierten Kartenstapel auf den gemixten Stapel "legen"
                delete cardStack[i];                    //element i aus sortierten Stapel entfernen
                n--;
            }
           console.log(mixedCardStack);
            console.log(cardStack);
        }
    giveStartingHands();                //starthände verteilen
}

function giveStartingHands(){

    for (var i = 0; i < numberOfHandCards; i++)         //nötige Variablen zum Starthand ausgeben
    {
        playerCards.push(mixedCardStack[mixedCardStack.length - 1]);    //oberste Karte
        mixedCardStack.length = mixedCardStack.length - 1;
        enemyCards.push(mixedCardStack[mixedCardStack.length - 1]);     //und zweitobreste Karte an Spieler und danach gegner verteilen
        mixedCardStack.length = mixedCardStack.length - 1;
        //delete mixedCardStack[mixedCardStack.length - 1];               //oberste Karte
        //delete mixedCardStack[mixedCardStack.length - 1];               //und zweitoberste Karte aus dem Stapel löschen
        console.log(mixedCardStack);
        document.getElementById("playerCardsDisplay").innerHTML = playerCards;
    }

    gameActuallyStarts();               //Spiel beginnt, spieler kann Karten ziehen
}

function gameActuallyStarts() {

    document.getElementById("drawCardButton").style.display = "block";  //"Karte-ziehen"-Button einblenden


}



function drawCard(button) {


    //document.getElementById("drawCardButton")
        button.style.display = "none";                  //"Karte-ziehen"-Button ausblenden

    if (mixedCardStack.length > 0) {                    //solange noch Karten im Stapel sind,...
        playerCards.push(mixedCardStack[mixedCardStack.length - 1]) //...gib dem Spieler die oberste Karte,...
        mixedCardStack.length = mixedCardStack.length - 1;          //...und entferne sie aus dem Stapel
        console.log(mixedCardStack);
        document.getElementById("playerCardsDisplay").innerHTML = playerCards;      //Spielerkarten in Textfeld übertragen
        giveCardToEnemy();                               //funktion um Gegner eine Karte auszuteilen
        button.style.display = "block";                  //"Karte-ziehen"-Button einblenden
    }
    else {
        document.getElementById("gameFinishedText").style.display = "block";//Sobald der Stapel leer ist
        document.getElementById("newStartButton").style.display = "block";                              //lade die Seite und somit das Spiel neu

    }
}

function giveCardToEnemy() {

    if (mixedCardStack.length > 0) {                    //solange noch Karten im Stapel sind,...
        enemyCards.push(mixedCardStack[mixedCardStack.length - 1])      //...gib dem Gegner die oberste Karte,...
        mixedCardStack.length = mixedCardStack.length - 1;              //...und entferne sie aus dem Stapel
        console.log(mixedCardStack);
    }
    else {
        document.getElementById("gameFinishedText").style.display = "block";
        document.getElementById("newStartButton").style.display = "block";                              //lade die Seite und somit das Spiel neu

    }
}
