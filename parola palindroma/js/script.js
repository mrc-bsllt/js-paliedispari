// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// chiedo all'utente di inserire una Parola
// var userInput = prompt("inserisci una parola");

// inverto la parola inserita
// var reverseUserInput = userInput.split("").reverse().join("");
//
//
// // stampo il risultato
// if (palindroma(userInput, reverseUserInput)) {
//   alert("parola palindroma");
// } else {
//   alert("parola non palindroma");
// }


// seconda soluzione
var inputUtente = prompt("Inserisci una parola");
var inputReverse;

for (i = inputUtente.length - 1; i >= 0; i-- ) {
  inputReverse += inputUtente[i];
  console.log(inputUtente[i]);
}

if (palindroma(inputUtente, inputReverse)) {
  alert("Parola palindroma");
}
else {
  alert("Parola non palindroma")
}

// creo la funzione
function palindroma (word1, word2) {
  var risultato;
  if (word1 == word2) {
    risultato = true;
  } else {
    risultato = false;
  }
  return risultato;
}
