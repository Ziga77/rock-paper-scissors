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

let humanResult;

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
}

function playGame(humanResult) {

  getComputerChoice();

  console.log(computerResult);

  console.log(humanResult);

  playRound(humanResult, computerResult);

  console.log(humanScore, computerScore);
}

let gameRound = 0;

const rock = document.querySelector('.rock')
const paper = document.querySelector('.paper')
const scissors = document.querySelector('.scissors')

function gameEnd() {
  if (humanScore === 5) {
    alert('You won the game!');
  } else if (computerScore === 5) {
    alert('You lost the game!')
  }
}

const result = document.querySelector('p');

rock.addEventListener('click', () => {
  playGame('rock');
  gameEnd();
  result.textContent = `Player ${humanScore}:${computerScore} Computer`;
});
paper.addEventListener('click', () => {
  playGame('paper');
  gameEnd();
  result.textContent = `Player ${humanScore}:${computerScore} Computer`;
});
scissors.addEventListener('click', () => {
  playGame('scissors');
  gameEnd();
  result.textContent = `Player ${humanScore}:${computerScore} Computer`;
});