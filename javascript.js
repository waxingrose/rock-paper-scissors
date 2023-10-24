let computerSelection = getComputerChoice();

function getComputerChoice() {
    switch ((Math.floor(Math.random() * 3))) { /* randomizer 0, 1, 2 */
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

    computerSelection = getComputerChoice();

    if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
        return 'win';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
        return 'win';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
        return 'win';
    } else if (playerSelection.toLowerCase() == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
        return 'tie';
    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
        alert('You lose! Rock beats Scissors.');
        console.log('You lose!');
        return 'lose';
    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
        alert('You lose! Paper beats Rock.');
        console.log('You lose!');
        return 'lose';
    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
        alert('You lose! Scissors beats Paper.');
        console.log('You lose!');
        return 'lose';
    } else {
        null
        console.log('Null');
    }
}

/* Assigned variables */
let playerSelection;
let playerScore = 0;
let computerScore = 0;
let round = 0;

function results() {
    if (playerScore > computerScore && round == 5) {
        alert(`Congratulations! You beat the computer with a score of ${playerScore}:${computerScore}!`)
        console.log(`Congratulations! You beat the computer with a score of ${playerScore}:${computerScore}!`)
    } else if (playerScore < computerScore && round == 5) {
        alert(`You lost against the computer with a score of ${playerScore}:${computerScore}!`)
        console.log(`You lost against the computer with a score of ${playerScore}:${computerScore}!`)
    } else if (playerScore == computerScore && round == 5) {
        alert(`Game is a draw with a score of ${playerScore}:${computerScore}!`)
        console.log(`Game is a draw with a score of ${playerScore}:${computerScore}!`)
    } else {
        null;
    }
}

function game(playRound) {

    const div = document.querySelector('div');
    let score = '';
    div.textContent = score;

    if (playRound === 'win') {
         score = 'You:' + ++ playerScore + ' ' +
        'Computer:' + computerScore;
        ++ round;
    } else if (playRound === 'lose') {
         score = 'You:' + playerScore + ' ' +
        'Computer:' + ++ computerScore;
        ++ round;
    } else if (playRound === 'tie') {
         score = 'You:' + playerScore + ' ' +
        'Computer:' + computerScore;
        ++ round;
    }
    return results();
}

const rockbtn = document.querySelector('#rock');
rockbtn.addEventListener('click', () => { game(playRound('rock', computerSelection)) });

const paperbtn = document.querySelector('#paper');
paperbtn.addEventListener('click', () => { game(playRound('paper', computerSelection)) });

const scissorbtn = document.querySelector('#scissors');
scissorbtn.addEventListener('click', () => { game(playRound('scissors', computerSelection)) });