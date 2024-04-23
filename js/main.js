"use strict";
const buttons = document.querySelectorAll(".btn");
const result = document.querySelector(".result");

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
  } else {
    winner = `You lose! ${computerSelection[0]
      .toUpperCase()
      .concat(computerSelection.slice(1))} beats ${playerSelection}.`;
  }

  result.textContent = winner;
}

//Attach event listeners to buttons to define a player selection
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let playerSelection = e.target.id;
    playRound(playerSelection);
  });
});
//function to play a game
//function game() {
//  let result;
//  let count = 0;
//  let playerScore = 0;
//  let computerScore = 0;
//do {
//  result = playRound(getPlayerChoice(), getComputerChoice());
//  if (result === "player") playerScore++;
//  if (result === "computer") computerScore++;

//  count++;
//  console.log(count && result);
//} while (count < 5);

//  if (playerScore > computerScore) {
//    alert("You win");
//  } else if (playerScore === computerScore) {
//    alert("It's a draw!");
//  } else {
//    alert("Computer wins!");
//  }
//}

//game();
