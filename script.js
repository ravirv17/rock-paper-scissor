let playerScore = 0;
let computerScore = 0;

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

function computerPlay() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    playerScore++;
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    computerScore++;
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function updateScore() {
  scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function checkWinner() {
  if (playerScore === 5) {
    resultDiv.textContent = "Congratulations! You won the game!";
    disableButtons();
  } else if (computerScore === 5) {
    resultDiv.textContent = "Sorry, you lost the game!";
    disableButtons();
  }
}

function disableButtons() {
  document.getElementById('rock').disabled = true;
  document.getElementById('paper').disabled = true;
  document.getElementById('scissors').disabled = true;
}

function handleClick(playerSelection) {
  const computerSelection = computerPlay();
  const result = playRound(playerSelection, computerSelection);
  resultDiv.textContent = result;
  updateScore();
  checkWinner();
}

document.getElementById('rock').addEventListener('click', () => handleClick('rock'));
document.getElementById('paper').addEventListener('click', () => handleClick('paper'));
document.getElementById('scissors').addEventListener('click', () => handleClick('scissors'));
