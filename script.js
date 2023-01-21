let startButtonEl = document.getElementById("start-btn");
let guessButtonEl = document.getElementById("guess-btn");
let restartButtonEl = document.getElementById("restart-btn");

startButtonEl.disabled = false;
guessButtonEl.disabled = true;
restartButtonEl.disabled = true;

let message = "";
let messageEl = document.getElementById("message-el");

let enterGuessEl = document.getElementById("enter-guess-el");
/* enterGuestMessage is the number guessed that appears above the input field; a better name would be guessedNumEl*/
let enterGuessMessage = document.getElementById("guessed-num");

let numbersGuessedList = document.getElementById("numbers-guessed");

let randomNumber;

function generateRandomNumber() {
  randomNumber = Math.floor(Math.random() * 100);
  return randomNumber;
}

startButtonEl.addEventListener("click", function () {
  generateRandomNumber();
  console.log(randomNumber);
  message = "Guess a number between 1 and 100!";
  guessButtonEl.disabled = false;
  messageEl.textContent = message;
  startButtonEl.disabled = true;
});

guessButtonEl.addEventListener("click", function() {
  let result = enterGuessEl.valueAsNumber;
  enterGuessEl.value = "";
  enterGuessMessage.textContent = result;
  numbersGuessedList.textContent += result + " ";
  if (randomNumber < result) {
    message = "Lower";
    messageEl.textContent = message;
  } else if (randomNumber > result) {
    message = "Higher";
    messageEl.textContent = message;
  } else if (randomNumber === result) {
    message = "You guessed the correct number!";
    messageEl.textContent = message;
    shootConfetti()
    guessButtonEl.disabled = true;
    restartButtonEl.disabled = false;

    //startButtonEl.disabled = false;
  }
});

restartButtonEl.addEventListener("click", function() {
  startButtonEl.disabled = false;
  message = "Want to play a round?";
  messageEl.textContent = message;
  enterGuessMessage.textContent = "";
  numbersGuessedList.textContent = "Numbers guessed: " + "";
  //history.go(0);
  
});

/* This section is code for the confetti activated upon guessing the correct number */

function shootConfetti() {
  var count = 200;
var defaults = {
  origin: { y: 0.7 }
};

function fire(particleRatio, opts) {
  confetti(Object.assign({}, defaults, opts, {
    particleCount: Math.floor(count * particleRatio)
  }));
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});
fire(0.2, {
  spread: 60,
});
fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8
});
fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2
});
fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}