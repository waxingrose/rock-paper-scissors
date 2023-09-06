let getComputerChoice = Math.floor(Math.random() * 3); /* randomizer 0, 1, 2 */
console.log(getComputerChoice);
switch (getComputerChoice) {
  case 0:
        Return = 'Rock';
    break;
  case 1:
        Return = 'Paper';
    break;
  case 2:
        Return = 'Scissors';
    break;
}
console.log(Return);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
        ++score;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        ++score;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        ++score;
    }
    else if (playerSelection == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
        score;
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        score;
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        score;
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('You lose! Scissors beats Paper.');
        console.log('You lose!');
        score;
    }
    else {
        null
        alert('Null');
        console.log('Null');
    }
}

/* Assigned variables */
let playerSelection
let score = 0;

function Game() {
    if (score > 3) {
        console.log('You win!')
    }
}

Game(playRound(prompt('Rock, Paper, or Scissors?'), Return)); 
Game(playRound(prompt('Rock, Paper, or Scissors?'), Return)); 
Game(playRound(prompt('Rock, Paper, or Scissors?'), Return)); 
Game(playRound(prompt('Rock, Paper, or Scissors?'), Return)); 
