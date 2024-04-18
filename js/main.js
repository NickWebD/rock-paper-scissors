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
  let winner = "";
  if (playerSelection === computerSelection) {
    winner = "It's a tie";
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    winner = `You win! ${playerSelection} beats ${computerSelection}`;
    return "player";
  } else {
    winner = `You lose! ${computerSelection} beats ${playerSelection}`;
    return "computer";
  }
}

//function to play a game
function game() {
  let result;
  let count = 0;
  let playerScore = 0;
  let computerScore = 0;
  //do {
  //  result = playRound(getPlayerChoice(), getComputerChoice());
  //  if (result === "player") playerScore++;
  //  if (result === "computer") computerScore++;

  //  count++;
  //  console.log(count && result);
  //} while (count < 5);

  if (playerScore > computerScore) {
    alert("You win");
  } else if (playerScore === computerScore) {
    alert("It's a draw!");
  } else {
    alert("Computer wins!");
  }
}

//game();
