const winner = document.querySelector('.winner');
const pScore = document.querySelector(".playerScore");
const cScore = document.querySelector(".computerScore");
const ties = document.querySelector('.ties');
const pChoice = document.querySelector(".playerChoice");
const cChoice = document.querySelector(".computerChoice");
const resetButton = document.querySelector(".reset");
const choices = ['rock', 'paper', 'scissors'];


function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
};

let playerScore = 0;
let computerScore = 0;
let numTies = 0;


const pImgs = document.querySelectorAll('.pImg');

pImgs.forEach((pImg) => {
    pImg.addEventListener('click', () => {
        computerSelection = getComputerChoice();
        playRound(pImg.id, computerSelection);
        updateWinner();
        console.log('1', computerSelection, '2', pImg.id)
    });
});


function playRound(playerSelection, computerSelection) {
    if (playerSelection !== computerSelection && computerSelection === choices[1] && playerSelection === choices[0]) {
        computerScore++;
        winner.innerText = "The computer won the round...";
    } else if (playerSelection !== computerSelection && computerSelection === choices[1] && playerSelection === choices[2]) {
        playerScore++;
        winner.innerText = "You won the round!";
    } else if (playerSelection !== computerSelection && computerSelection === choices[2] && playerSelection === choices[0]) {
        playerScore++;
        winner.innerText = "You won the round!";
    } else if (playerSelection !== computerSelection && computerSelection === choices[2] && playerSelection === choices[1]) {
        computerScore++;
        winner.innerText = "The computer won the round...";
    } else if (playerSelection !== computerSelection && computerSelection === choices[0] && playerSelection === choices[1]) {
        playerScore++;
        winner.innerText = "You won the round!";
    } else if (playerSelection !== computerSelection && computerSelection === choices[0] && playerSelection === choices[2]) {
        computerScore++;
        winner.innerText = "The computer won the round...";
    } else {
        numTies++;
        winner.innerText = "It's a tie!";
    }
};


function updateWinner() {
    pScore.innerText = `Score: ${playerScore}`;
    cScore.innerText = `Score: ${computerScore}`;
    ties.innerText = `Ties: ${numTies}`;
};


