let userChoice = prompt("Choose Rock, Paper or Scissor");
console.log(userChoice.toLocaleLowerCase("en-US"));
// getComputerChoice();
let rock = "Rock"
let str1 = rock.toLocaleLowerCase("en-US");
let paper = "Paper"
let str2 = paper.toLocaleLowerCase("en-US");
let scissor = "Scissor"
let str3 = scissor.toLocaleLowerCase("en-US");

let result = playRound(userChoice, getComputerChoice());

// let result = game();
console.log(result);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Draw";
  } else if (
    (playerSelection === str1 && computerSelection === str3) ||
    (playerSelection === str2 && computerSelection === str1) ||
    (playerSelection === str3 && computerSelection === str2)
  ) {
    return "Winner";
  } else if (
    (playerSelection === str1 && computerSelection === str2) ||
    (playerSelection === str2 && computerSelection === str3) ||
    (playerSelection === str3 && computerSelection === str1)
  ) {
    return "Loser";
  } else {
    return "Not a valid input";
  }
}

function getComputerChoice() {
  const PCchoice = ["Rock", "Paper", "Scissor"];
  const random = Math.floor(Math.random() * PCchoice.length);
  console.log(PCchoice[random]);
  return PCchoice[random].toLocaleLowerCase("en-US");
} //takes random number from Computer

// function game() {
//   for (let i = 0; i < 5; i++)

//   playRound();
// }
