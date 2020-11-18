// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri.
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).

// chiedo all'utente pari o Dispari
var userInput = prompt("Pari o Dispari?");
// mi accerto che scelga correttamente
if (!isNaN(userInput) || (userInput != "Pari") && (userInput != "Dispari")) {
  alert("Errore!")
}

// chiedo all'utente un numero da 1 a 5
var userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
// mi accerto che scelga correttamente
if (isNaN(userNumber) || (userNumber < 1) || (userNumber > 5)) {
  alert("Errore! Inserisci un numero da 1 a 5");
}

// creo la funzione per il numero casuale del computer
function randomNumber (min, max) {
  var pcRandomNumber = Math.floor(Math.random() * (max - min) + min);
  return pcRandomNumber;
}
