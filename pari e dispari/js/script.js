// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

// chiedo all'utente pari o Dispari
var userInput = prompt("Pari o Dispari?");

// chiedo all'utente un numero da 1 a 5
var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));

// creo la funzione per il numero casuale del computer
function randomNumber (min, max) {
  var randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
}

var pcNumber = randomNumber(1, 6);
console.log(pcNumber);
var addition = pcNumber + userNumber;
console.log(addition);

// creo la funzione per stabilire se il numero sommato è pari o dispari
function isEven (num) {
  var risultato = false;
  if (num % 2 == 0) {
    risultato = true;
  }
  return risultato;
}

// comparo la somma con il risultato
if (isEven(addition)) {
  alert("numero pari")
} else {
  alert("numero dispari")
}
