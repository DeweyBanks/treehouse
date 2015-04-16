var randomNumber = getRandomNumber(10);
var guess;
var attempts = 0;
var correctGuess = false;

function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
}

do {
  guess = prompt('I am thinking of a number between 1 & 10. What is it?');
  attempts += 1;
  if (parseInt(guess) === randomNumber) {
    correctGuess = true;
  }
} while ( ! correctGuess )

document.write("<div class='headliner'><h1>You guessed the number!</h1></div>");
document.write("<div class='results'><h3>It took you " + attempts + " tries to guess the number " + randomNumber + "</h3></div>")


