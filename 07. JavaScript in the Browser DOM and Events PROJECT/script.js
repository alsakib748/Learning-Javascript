"use strict";

// console.log(document.querySelector(".message"));

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;

// document.querySelector(".score").textContent = 20;

// const guess_value = document.querySelector(".guess").value;

// console.log(guess_value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // todo: When there is no input
  if (!guess) {
    // document.querySelector(".message").textContent = "❌ No Number!";
    displayMessage("❌ No Number!");

    // todo: When Player wins
  } else if (guess === secretNumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");

    document.querySelector(".number").textContent = secretNumber;

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "60rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // todo: When guess is too high
  }
  // todo: When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > secretNumber ? "📉 Too High!" : "📈 Too Low!";

      // guess > secretNumber
      //   ? displayMessage("📉 Too High!")
      //   : displayMessage("📈 Too Low!");

      displayMessage(guess > secretNumber ? "📉 Too High!" : "📈 Too Low!");

      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = "💥 You lost the game!";
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Too High!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   // todo: When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Too Low!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "💥 You lost the game!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;

  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector(".message").textContent = "Start guessing...";

  displayMessage("Start guessing...");

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector("body").style.color = "#fff";

  document.querySelector(".number").style.width = "15rem";
});
