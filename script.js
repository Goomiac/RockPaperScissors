let score_value = 0;
let round = 0;

function getComputerChoice() {
    /* select randomly between Rock Paper and Scissors and return it */
    let choice = Math.floor(Math.random() * 3 + 1);
    switch(choice) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            console.log("Something went wrong!");
    }
}

function playRound() {
    let playerSelection = this.id;
    let computerSelection = getComputerChoice();
    const results_div = document.querySelector('#results');
    const score = document.querySelector('#score');

    results_div.innerHTML = "Player selection is: " + playerSelection;
    results_div.innerHTML += "<br>Computer selection is: " + computerSelection;

    score.textContent = "Round/score is: " + round + "/" + score_value;

    console.log("Player selection is: " + playerSelection);
    console.log("Computer selection is: " + computerSelection);

    if (round == 5) {
        // display winner
        round = 0;
        score_value = 0;
    }

    round++;

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
        score_value++;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
        score_value++;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
        score_value++;
    } else if (playerSelection === computerSelection) {
        return "It's a TIE!";
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
}

const rock_btn = document.querySelector('#rock');
const paper_btn = document.querySelector('#paper');
const scissors_btn = document.querySelector('#scissors');

rock_btn.addEventListener('click', playRound);
paper_btn.addEventListener('click', playRound);
scissors_btn.addEventListener('click', playRound);

