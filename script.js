const gameChoices = ['rock', 'paper', 'scissors'];
function computerPlay() {
    // console.log(Math.floor(Math.random()*gameChoices.length));
    return gameChoices[Math.floor(Math.random()*gameChoices.length)];
    
}
// console.log(computerPlay());
// let computerSelection = computerPlay();
// let playerSelection = computerPlay();

// console.log('Player: ' + playerSelection, 'Computer: ' +computerSelection);

let pScore = 0;
let cScore = 0;
function playRound(playerSelection, computerSelection) {
    let result = '';
    
    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'rock') {
            result += 'You won this round!';
            pScore++;
        }
    else if (playerSelection === computerSelection)
        result += 'It\'s a draw';
    else {
        result += "You lost!";
        cScore++;
    }
        
    return result;
}

// console.log(playRound(playerSelection, computerSelection));
const str = '*';
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = computerPlay();
        let computerSelection = computerPlay();
        console.log('Player: ' + playerSelection, 'Computer: ' +computerSelection);
        const res = playRound(playerSelection, computerSelection);
        console.log(res);
        console.log(str.repeat(40));
    }
    console.log('pScore: ' + pScore, 'cScore: ' + cScore);

}
console.log(game());
