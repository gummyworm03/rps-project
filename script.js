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
    if (playerSelection !== computerSelection && computerSelection === choices[1] && playerSelection === choices[0]) {
        computerScore++;
        return "You Lose! Paper beats Rock" //computer chooses paper, player chooses rock
    } else if (playerSelection !== computerSelection && computerSelection === choices[1] && playerSelection === choices[2]) {
        playerScore++;
        return "You Win! Scissors beats Paper" //computer chooses paper, player chooses scissors
    } else if (playerSelection !== computerSelection && computerSelection === choices[2] && playerSelection === choices[0]) {
        playerScore++;
        return "You Win! Rock beats Scissors" //computer chooses scissors, player chooses rock
    } else if (playerSelection !== computerSelection && computerSelection === choices[2] && playerSelection === choices[1]) {
        computerScore++;
        return "You Lose! Rock beats Scissors" //computer chooses scissors, player chooses paper
    } else if (playerSelection !== computerSelection && computerSelection === choices[0] && playerSelection === choices[1]) {
        playerScore++;
        return "You Win! Paper beats Rock" //computer chooses rock, player chooses paper
    } else if (playerSelection !== computerSelection && computerSelection === choices[0] && playerSelection === choices[2]) {
        computerScore++;
        return "You Lose! Rock beats Scissors" //computer chooses rock, player scissors
    } else {
        return "It's a tie! Play another round...";
    }
}

let playerScore = 0;
let computerScore = 0;

//console.log(playRound(playerSelection, computerSelection))

/*function scoreBoard() {
    return score = [playerScore, computerScore];
}
let score = 0;*/

function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Let's play!").toLowerCase();
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));  
    } 
   if (playerScore > computerScore) {
        return "You win the game!"
        } else if (computerScore > playerScore) {
        return "You lose the game :("
        } else {
        return "You tied! Play again."
        }
   
}
console.log(game())


