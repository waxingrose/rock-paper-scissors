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
    if (playerSelection == 'Rock' && computerSelection == 'Paper') {
        alert('You lose! Paper beats Rock!');
        console.log('You lose! Paper beats Rock!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Rock') {
        alert('You win! Paper beats Rock!');
        console.log('You win! Paper beats Rock!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Rock') {
        alert('You lose! Rock beats Scissors!');
        console.log('You lose! Rock beats Scissors!');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Scissors') {
        alert('You win! Rock beats Scissors');
        console.log('You win! Rock beats Scissors!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Scissors') {
        alert('You lose! Scissors beats Paper!');
        console.log('You lose! Scissors beats Paper!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Paper') {
        alert('You win! Scissors beats Paper!');
        console.log('You win! Scissors beats Paper!');
    }
    else if (playerSelection == 'Paper' && computerSelection == 'Paper') {
        alert('Tie!');
        console.log('Tie!');
    }
    else if (playerSelection == 'Rock' && computerSelection == 'Rock') {
        alert('Tie!');
        console.log('Tie!');
    }
    else if (playerSelection == 'Scissors' && computerSelection == 'Scissors') {
        alert('Tie!');
        console.log('Tie!');
    }
    else {
        null
        alert('Null');
        console.log('Null');
    }
}
playRound(prompt('Rock, Paper, or Scissors?'), Return)

function newGame() {
    /* Code here */
}
console.log(newGame);

