"use strict";
// function to define a computer choice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let computerChoice = choices[Math.floor(Math.random() * 3)];
  return computerChoice;
}
