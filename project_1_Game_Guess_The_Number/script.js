//Game: Guess the number
   
var userName = prompt("Welkom! Wat is je naam?");
var inputNumber = prompt("Hey " + userName + ", voer een nummer in van 0 tot 25 om te beginnen met raden...");
let minNum = 0;
let maxNum = 25;
let numberToBeGuessed = Math.floor(Math.random() * (maxNum - minNum)) + minNum;

    while (inputNumber != numberToBeGuessed){
        prompt("Dat is niet correct. Probeer het nog een keer:");
        inputNumber++;
    }

    while (inputNumber === numberToBeGuessed){
        alert("Gefeliciteerd, je hebt gewonnnen! Het nummer was inderdaad " + numberToBeGuessed);
        alert("Dag " + userName + ". Tot de volgende keer.")
        inputNumber++;
    }

    