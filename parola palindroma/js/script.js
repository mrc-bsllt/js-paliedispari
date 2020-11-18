// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// chiedo all'utente di inserire una Parola
var userInput = prompt("inserisci una parola");

// inverto la parola inserita
var reverseUserInput = userInput.split("").reverse().join("");

function palindroma (word1, word2) {
  var risultato;
  if (word1 == word2) {
    risultato = true;
  } else {
    risultato = false;
  }
  return risultato;
}

if (palindroma(userInput, reverseUserInput)) {
  alert("parola palindroma");
} else {
  alert("parola non palindroma");
}
