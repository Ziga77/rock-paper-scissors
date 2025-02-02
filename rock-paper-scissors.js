console.log('hi');

let computerResult;

function getComputerChoice() {
  let random = Math.floor(Math.random() * 100)

  if (random <= 33) {
    computerResult = 'rock';
  } else if (random <= 66 && random > 33) {
    computerResult = 'paper';
  } else if (random > 66) {
    computerResult = 'scissors';
  }
  return computerResult;
}

let humanPick = parseInt(prompt('1 is rock, 2 is paper, 3 is scissors'));

// console.log();

let humanResult;

function getHumanChoice() {
  if (humanPick == 1) {
    humanResult = 'rock';
  } else if (humanPick == 2) {
    humanResult = 'paper';
  } else if (humanPick == 3) {
    humanResult = 'scissors';
  } else {
    humanPick = parseInt(prompt('please pick a number from 1 to 3'));
    getHumanChoice();
  }
  return humanResult;
}

getHumanChoice();

getComputerChoice();

console.log(computerResult);

console.log(humanResult);

let computerScore = 0;

let humanScore = 0;

function playRound(humanResult, computerResult) {
  if (humanResult === 'rock' && computerResult === 'rock') {
    alert(`It's a tie!`);
  } else if (humanResult === 'rock' && computerResult === 'paper') {
    alert(`You lost!`);
    computerScore++;
  } else if (humanResult === 'rock' && computerResult === 'scissors') {
    alert(`You won!`);
    humanScore++;
  }

  if (humanResult === 'paper' && computerResult === 'paper') {
    alert(`It's a tie!`);
  } else if (humanResult === 'paper' && computerResult === 'scissors') {
    alert(`You lost!`);
    computerScore++;
  } else if (humanResult === 'paper' && computerResult === 'rock') {
    alert(`You won!`);
    humanScore++;
  }

  if (humanResult === 'scissors' && computerResult === 'rock') {
    alert(`It's a tie!`);
  } else if (humanResult === 'scissors' && computerResult === 'rock') {
    alert(`You lost!`);
    computerScore++;
  } else if (humanResult === 'scissors' && computerResult === 'paper') {
    alert(`You won!`);
    humanScore++;
  }
  return humanScore, computerScore;
}

playRound(humanResult, computerResult);

console.log(computerScore, humanScore);