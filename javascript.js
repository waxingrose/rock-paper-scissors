const computerSelection = getComputerChoice();

function getComputerChoice() {
    switch ((Math.floor(Math.random()*3))) {  /* randomizer 0, 1, 2 */
        case 0:
            return 'Rock';
            break;
        case 1:
            return 'Paper';
            break;
        case 2:
            return 'Scissors';
        break;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
        console.log('You:' + playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('You lose! Scissors beats Paper.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else {
        null
        alert('Null');
        console.log('Null');
    }
}

/* Assigned variables */
let playerSelection
let playerScore = 0;
let computerScore = 0;

function Game() {
    if (playerScore > computerScore) {
        alert('Congratulations! You beat the computer!')
        console.log('Congratulations! You beat the computer!')
    }
    else if (playerScore < computerScore) {
        alert('You lost against the computer!')
        console.log('You lost against the computer!')
    }   
    else if (playerScore == computerScore) {
        alert('Game is a tie!')
        console.log('Game is a tie!')
    }
    else {
        null;
    }
}

playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice()); 
playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice()); 
playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice());  
playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice());  
Game(playRound(prompt('Rock, Paper, or Scissors?'), getComputerChoice())); 
