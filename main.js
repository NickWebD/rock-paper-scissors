"use strict";
// function to define a computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

//function to define a payer choice
function getPlayerChoice() {
  const choices = ["rock", "paper", "scissors"];

  while (true) {
    let playerChoice = prompt("Chose: rock, paper, scissors");

    if (playerChoice === null) {
      alert("Bye!");
      return;
    }

    playerChoice = playerChoice.toLowerCase();

    if (choices.includes(playerChoice)) {
      return playerChoice;
    } else {
      alert("You NEED to choose: rock, paper, scissors");
    }
  }
}

//function to play a single round of RPS
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    alert(`You win! ${playerSelection} beats ${computerSelection}`);
  } else {
    alert(`You lose! ${computerSelection} beats ${playerSelection}`);
  }
}

playRound(getPlayerChoice(), getComputerChoice());
