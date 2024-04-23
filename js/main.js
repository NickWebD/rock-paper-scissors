"use strict";
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");

let playerWins = 0;
let computerWins = 0;

// function to define a computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

//function to play a round
function playRound(playerSelection) {
  const computerSelection = getComputerChoice();
  let winner = "";

  //compare player and computer choices
  if (playerSelection === computerSelection) {
    winner = "It's a tie.";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winner = `You win! ${playerSelection[0]
      .toUpperCase()
      .concat(playerSelection.slice(1))} beats ${computerSelection}.`;
    playerWins++;
  } else {
    winner = `You lose! ${computerSelection[0]
      .toUpperCase()
      .concat(computerSelection.slice(1))} beats ${playerSelection}.`;
    computerWins++;
  }

  //display result and scores on the page
  result.textContent = winner;
  playerScore.textContent = `Your score: ${playerWins}`;
  computerScore.textContent = `Computer score: ${computerWins}`;

  //check for end game
  if (playerWins === 5 || computerWins === 5) {
    endGame();
  }
}

//function to check if any of players has 5 points
function endGame() {
  if (playerWins === 5) {
    alert("Congratulations! You have won the game!");
  } else {
    alert("Sorry, you have lost the game. Better luck next time!");
  }

//disable buttons to prevent playing game
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

//Attach event listeners to buttons to define a player selection
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    playRound(playerSelection);
  });
});
