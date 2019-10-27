var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = "";
var losses = "";
var guessLeft = "";
var guessFar = "";
var compGuess = "";
var youGuess = [];


function compGuesser() {
  if (compGuess == "") {
    compGuess = alphabet.substr(Math.floor(Math.random() * 26), 1);
    console.log("Computer's Guess: " + compGuess)
    return compGuess;
  }
}

function checker() {
if (youGuess.length == 0) {
  youGuess = [event.key];
  document.getElementById("guess-far").innerHTML = this;
  console.log("Your Guess: " + youGuess[0]);
  
}
else {
  youGuess.push(event.key);
  console.log("Your Guess: " + youGuess);
}
}