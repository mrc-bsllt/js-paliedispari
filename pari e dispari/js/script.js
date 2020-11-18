// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).


// nuova versione
var userInput = capitalizerFirstLetter(prompt("Scegli, Pari o Dispari?"));

while ((userInput != "Pari") && (userInput != "Dispari")) {
  alert("Errore");
  var userInput = capitalizerFirstLetter(prompt("Scegli, Pari o Dispari?"));
}

var userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
while ((isNaN(userNumber)) || (userNumber < 1) || (userNumber > 5)) {
  alert("Errore");
  userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
}
var pcNumber = randomNumber(1, 6);
var somma = userNumber + pcNumber;

if (isEven(somma) && userInput == "Pari") {
  alert("Hai vinto");
} else if (!isEven(somma) && userInput == "Dispari") {
  alert("Hai vinto");
} else {
  alert("Hai perso!")
}

// funzioni
function randomNumber (min, max) {
  var j = Math.floor(Math.random() * (max - min) + min);
  return j;
}

function isEven (result) {
  var j = false;
  if (result % 2 == 0) {
    j = true;
  }
  return j;
}

function capitalizerFirstLetter (word) {
  word = word.toLowerCase();
  word = word[0].toUpperCase() + word.slice(1);
  return word;
}
