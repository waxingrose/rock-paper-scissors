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

/*pass argument into newGame function*/
let playerSelection = prompt('Rock, Paper, or Scissors?')
let score = 0;

function newGame(playRound) { /*used playRound function as a parameter*/
if (playerSelection == 'Paper' && getComputerChoice == 0) {
    console.log('Your score:' + ' ' + ++score);
}
else if (playerSelection == 'Scissors' && getComputerChoice == 1) {
    console.log('Your score:' + ' ' + ++score);
}
else if (playerSelection == 'Rock' && getComputerChoice == 2) {
    console.log('Your score:' + ' ' + ++score);
}
else {
    score;
    console.log('Your score:' + ' ' + score);
    }
}

newGame(playRound(playerSelection, Return)) /*playRound function as an argument is copied onto the parameter*/

let repeat = prompt('New Game?')
function loop(repeat) {
    if (repeat == 'Yes') {
        return newGame(playRound(playerSelection, Return));
    }
    else if (repeat == 'No') {
        null;
    }
    else {
        null;
        console.log('Invalid');
    }
}
loop(prompt())