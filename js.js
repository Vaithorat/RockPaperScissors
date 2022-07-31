function getComputerChoice() {
  const PCchoice = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * PCchoice.length);
  return PCchoice[random];
}
console.log(getComputerChoice());

function userInput() {
  let userChoice = prompt("Choose Rock, Paper or Scissor");
  return userChoice;
}
// console.log(userInput());

function game(userSelection, computerSelection) {
  if (userSelection == computerSelection) {
    return "Draw";
  } else if (
    (userSelection == "Rock" && computerSelection == "Scissor") ||
    (userSelection == "Paper" && computerSelection == "Rock") ||
    (userSelection == "Scissor" && computerSelection == "Paper")
  ) {
    return "Winner";
  } else if (
    (userSelection == "Rock" && computerSelection == "Paper") ||
    (userSelection == "Paper" && computerSelection == "Scissor") ||
    (userSelection == "Scissor" && computerSelection == "Rock")
  ) {
    return "Loser";
  } else {
    return "Not a valid input";
  }
}

let result = game(userInput(), getComputerChoice());
console.log(result);
