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

    if (playerSelection == 'paper' && computerSelection == 'rock') {
        p.textContent = 'You win! Paper beats Rock!';
        console.log('You win! Paper beats Rock!');
        return 'win';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        p.textContent = 'You win! Scissors beats Paper!';
        console.log('You win! Scissors beats Paper!');
        return 'win';
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        p.textContent = 'You win! Rock beats Scissors';
        console.log('You win! Rock beats Scissors!');
        return 'win';
    } else if (playerSelection == computerSelection) {
        p.textContent = 'Tie!';
        console.log('Tie!');
        return 'tie';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        p.textContent = 'You lose! Rock beats Scissors.';
        console.log('You lose!');
        return 'lose';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        p.textContent = 'You lose! Paper beats Rock.';
        console.log('You lose!');
        return 'lose';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        p.textContent = 'You lose! Scissors beats Paper.';
        console.log('You lose!');
        return 'lose';
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

    if (playRound === 'win') {
        div.textContent = `You: ${++playerScore} 
        Computer: ${computerScore}`;
        ++ round;
    } else if (playRound === 'lose') {
        div.textContent = `You: ${playerScore} 
        Computer: ${++computerScore}`;
        ++ round;
    } else if (playRound === 'tie') {
        div.textContent = `You: ${playerScore} 
        Computer: ${computerScore}`;
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

const div = document.querySelector('div');
const p = document.querySelector('p');