

let userChoice = prompt("Choose Rock, Paper or Scissor");
console.log(userChoice)

let result = game(userChoice, getComputerChoice());
console.log(result);

function game(userSelection, computerSelection) {
  if (userSelection === computerSelection) {
    return "Draw";
  } else if ( //logic for winner
    (userSelection === "Rock" && computerSelection === "Scissor") ||
    (userSelection === "Paper" && computerSelection === "Rock") ||
    (userSelection === "Scissor" && computerSelection === "Paper")
  ) {
    return "Winner";
  } else if ( //logic for losers
    (userSelection === "Rock" && computerSelection === "Paper") ||
    (userSelection === "Paper" && computerSelection === "Scissor") ||
    (userSelection === "Scissor" && computerSelection === "Rock")
  ) {
    return "Loser";
  } else { //for any invalid string submitted by user
    return "Not a valid input";
  }
}


function getComputerChoice() {
  const PCchoice = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * PCchoice.length);
  return PCchoice[random];
} //takes random number from Computer