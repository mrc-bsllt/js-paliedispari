// Palindroma
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

// chiedo all'utente di inserire una Parola
var userInput = prompt("inserisci una parola");

// inverto la parola inserita
var reverseUserInput = userInput.split("").reverse().join("");
console.log(reverseUserInput);
if (userInput == reverseUserInput) {
  alert("parola palindroma");
} else {
  alert("parola non palindroma");
}
