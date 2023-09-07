let computerSelection = function getComputerChoice () { 
    switch (Math.floor(Math.random() * 3)) {  /* randomizer 0, 1, 2 */
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
    Return;
};
console.log(Return);

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'Paper' && Return == 'Rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Scissors' && Return == 'Paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Rock' && Return == 'Scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        console.log('You:' + ++playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == Return) {
        alert('Tie!');
        console.log('Tie!');
        console.log('You:' + playerScore);
        console.log('Computer:' + computerScore);
    }
    else if (playerSelection == 'Scissors' && Return == 'Rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection == 'Rock' && Return == 'Paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        console.log('You:' + playerScore);
        console.log('Computer:' + ++computerScore);
    }
    else if (playerSelection == 'Paper' && Return == 'Scissors') {
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

playRound(prompt('Rock, Paper, or Scissors?'), computerSelection()); 
playRound(prompt('Rock, Paper, or Scissors?'), computerSelection()); 
playRound(prompt('Rock, Paper, or Scissors?'), computerSelection());  
playRound(prompt('Rock, Paper, or Scissors?'), computerSelection());  
Game(playRound(prompt('Rock, Paper, or Scissors?'), computerSelection())); 
