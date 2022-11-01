let player_score = 0;
let computer_score = 0;

function getComputerChoice() {
    /* select randomly between Rock Paper and Scissors and return it */
    let choice = Math.floor(Math.random() * 3 + 1);
    switch(choice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
        default:
            console.log("Something went wrong!");
    }
}

function add_score() {
    const player_score_div = document.querySelector('#player-score');
    const score_div = document.createElement('div');
    score_div.classList.add('score');
    player_score_div.appendChild(score_div);
}

function playRound() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    const results_div = document.querySelector('#results');
    const score = document.querySelector('#score');
    const winner = document.querySelector('#winner');

    if (playerSelection === "rock" && computerSelection === "scissors") {
        player_score++;
        add_score();
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        player_score++;
        add_score();
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        player_score++;
        add_score();
    } else if (playerSelection === computerSelection) {
        console.log("TIE;");
    } else {
        computer_score++;
    }

    results_div.innerHTML = "Player selection is: " + playerSelection;
    results_div.innerHTML += "<br>Computer selection is: " + computerSelection;

    score.textContent = "Player/computer score is: " + player_score + "/" + computer_score;

    console.log("Player selection is: " + playerSelection);
    console.log("Computer selection is: " + computerSelection);

    if (player_score == 5 || computer_score == 5) {
        // display winner
        if (player_score > computer_score) {
            winner.textContent = "YOU WIN!";
        } else {
            winner.textContent = "COMPUTER WINS!";
        }
        
        player_score = 0;
        computer_score = 0;
    } else {
        winner.textContent = "";
    }
}

const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

rock_btn.addEventListener('click', playRound);
paper_btn.addEventListener('click', playRound);
scissors_btn.addEventListener('click', playRound);

