const choices = ["rock", "paper", "scissors"];
const winners =[];
function game() {
  for (let i =1; i <=5 ; i++){
    playRound(i);
  }
  document.querySelector("button").textContent = 'Play new Game'
  logWins();
}

function playRound(round) {
  const playerSelection = playerChoice();
  const computerSelection = computerChoice();
  const winner = checkWinner(playerSelection, computerSelection);
  winners.push(winner);
  logRound(playerSelection,computerSelection,winner)
}

function playerChoice() {
  let input = prompt("Type Rock, Paper or Scissors");
  while (input == null) {
    input = prompt("Type Rock, Paper or Scissors");
  }
  input = input.toLowerCase();
  let check = validateInput(input);
  while (check == false) {
    input = prompt("Type Rock, Paper or Scissors with exact spelling");
    while (input == null) {
      input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    check = validateInput(input);
  }
  return input;
}

function computerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function validateInput(choice) {
  if (choices.includes(choice)) {
    return true;
  }
  return false;
}

function checkWinner(choiceP, choiceC) {
  if (choiceP === choiceC) {
    return `Tie`;
  } else if (
    (choiceP === "rock" && choiceC == "scissors") ||
    (choiceP === "paper" && choiceC == "rock") ||
    (choiceP === "scissors" && choiceC == "paper")
  ) {
    return "player";
  } else {
    return " Computer";
  }
}
function logWins(){
let playerWins = winners.filter((item) => item == "player").length;
let computerWins = winners.filter((item) => item == "computer").length;
let ties = winners.filter((item) => item == "tie").length;
console.log("Results:")
console.log("Player Wins:")
console.log("Computer Wins]:")
}

function logRound(playerChoice,computerChoice,winner){
  console.log("Player Chose:",playerChoice)
  console.log("Computer Chose:",computerChoice)
  console.log(winner, "Won the Round")
  console.log("----------------------------------")
}

