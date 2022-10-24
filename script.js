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
    console.log("Player selection is: " + playerSelection);
    console.log("Computer selection is: " + computerSelection);

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You WIN! " + playerSelection + " beats " + computerSelection;
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