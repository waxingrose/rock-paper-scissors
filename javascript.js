const computerSelection = getComputerChoice();

function getComputerChoice() {
    switch ((Math.floor(Math.random()*3))) {  /* randomizer 0, 1, 2 */
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
        return win;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        return win;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        return win;
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
        return tie;
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        return lose;
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        return lose;
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        alert('You lose! Scissors beats Paper.');
        console.log('You lose!');
        return lose;
    }
    else {
        null
        alert('Null');
        console.log('Null');
    }
}

/* Assigned variables */
let playerSelection = 'rock'
let playerScore = 0;
let computerScore = 0;
let win = 'win'; 
let lose = 'lose'; 
let tie = 'tie';

function game(playRound) {
    if (playRound == win) {
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playRound == lose) {
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playRound == tie) {
        console.log('You:' + playerScore);
        console.log('Computer:' + computerScore);
    }
}

function results() {
    if (playerScore > computerScore) {
        alert(`Congratulations! You beat the computer with a score of ${playerScore}:${computerScore}!`)
        console.log(`Congratulations! You beat the computer with a score of ${playerScore}:${computerScore}!`)
    }
    else if (playerScore < computerScore) {
        alert(`You lost against the computer with a score of ${playerScore}:${computerScore}!`)
        console.log(`You lost against the computer with a score of ${playerScore}:${computerScore}!`)
    }   
    else if (playerScore == computerScore) {
        alert(`Game is tied with a score of ${playerScore}:${computerScore}!`)
        console.log(`Game is a draw with a score of ${playerScore}:${computerScore}!`)
    }
    else {
        null;
    }   
}

game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
results();