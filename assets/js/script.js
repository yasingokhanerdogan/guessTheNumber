"use strict";

const body = document.querySelector("body");
const guessInput = document.querySelector(".guess");

const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");

const messageText = document.querySelector(".message");
const numberText = document.querySelector(".number");
const highScoreText = document.querySelector(".highScore");
const scoreText = document.querySelector(".score");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  messageText.textContent = message;
};

checkButton.addEventListener("click", function () {
  const guess = Number(guessInput.value);

  if (0 > guess || guess > 20) {
    displayMessage("Guess must be between 1 and 20");
    guessInput.value = "";
    return;
  }

  if (!guess) {
    displayMessage("⛔️ No number!");
    return;
  }

  if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    numberText.textContent = secretNumber;

    body.style.backgroundColor = "#60b347";
    numberText.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreText.textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      scoreText.textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      scoreText.textContent = 0;
    }
  }
});

againButton.addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  scoreText.textContent = score;
  numberText.textContent = "?";
  guessInput.value = "";

  body.style.backgroundColor = "#222";
  number.style.width = "15rem";
});
