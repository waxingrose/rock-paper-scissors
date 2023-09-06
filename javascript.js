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
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
    }
    else if (playerSelection == computerSelection) {
        alert('Tie!');
        console.log('Tie!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('You lose!');
        console.log('You lose!');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('You lose!');
        console.log('You lose!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('You lose!');
        console.log('You lose!');
    }
    else {
        null
        alert('Null');
        console.log('Null');
    }
}

let playerSelection = prompt('Rock, Paper, or Scissors?')
let Score = 0;
function newGame(playRound) {
if (playerSelection == 'Paper' && getComputerChoice == 0) {
    console.log('Your score:' + ' ' + ++Score);
}
else if (playerSelection == 'Scissors' && getComputerChoice == 1) {
    console.log('Your score:' + ' ' + ++Score);
}
else if (playerSelection == 'Rock' && getComputerChoice == 2) {
    console.log('Your score:' + ' ' + ++Score);
}
else {
    Score;
    console.log('Your score:' + ' ' + Score);
    }
}

newGame(playRound(playerSelection, Return))
