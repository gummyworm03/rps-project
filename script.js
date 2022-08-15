/*Get computer choice - random
    Create array of computer choices
    Randomly select item from array
Get player choice - input
    prompt
    standardize case sensitivity
Compare computer and player choices
    if player choice > computer choice
        you win!
    if computer choice > player choice
        you lose!
    if computer choice = player choice
        tie! 
        start new round*/



function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}
const choices = ['rock', 'paper', 'scissors'];

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection && computerSelection === choices[1]) {
        return "You Lose! Paper beats Rock"
    } else if (playerSelection !== computerSelection && computerSelection === choices[2]) {
        return "You Win! Rock beats Scissors"
    } else {
        return "It's a tie! Play another round...";
    }
}
const playerSelection = 'rock';
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))