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
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection.toLowerCase() == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
        console.log('You:' + playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
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
let playerSelection = 'rock'
let playerScore = 0;
let computerScore = 0;

function Game() {
    if (playerScore > computerScore) {
        alert(`Congratulations! You beat the computer with a score of ${playerScore}:${computerScore}!`)
        console.log('Congratulations! You beat the computer!')
    }
    else if (playerScore < computerScore) {
        alert(`You lost against the computer with a score of ${playerScore}:${computerScore}!`)
        console.log('You lost against the computer!')
    }   
    else if (playerScore == computerScore) {
        alert(`Game is tied with a score of ${playerScore}:${computerScore}!`)
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
