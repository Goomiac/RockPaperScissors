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

/* Write a function that plays a single round of Rock Paper Scissors.
The function should take two parameters:
the playerSelection
the computerSelection
then return a string that declares the winner of the round like so:
"You Lose! Paper beats Rock"
*/

let playerSelection = prompt("Select your move (rock, paper or scissors): ").toLowerCase();
let computerSelection = getComputerChoice();
console.log("Player selection is: " + playerSelection);
console.log("Computer selection is: " + computerSelection);

function playRound(playerSelection, computerSelection) {
    // compare two values
    // rock beats scissors
    // scissors beats paper
    // paper beats rock
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

console.log(playRound(playerSelection, computerSelection));

/*
Important note: you want to return the results of this function call, not console.log() them.
You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

function playRound(playerSelection, computerSelection) {
  // your code here!
}
 
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
Write a NEW function called game(). Call the playRound function inside of this one to play a
5 round game that keeps score and reports a winner or loser at the end.
Remember loops? This is a great opportunity to use one to play those five rounds:

for (let i = 0; i < 5; i++) {
   // your code here!
}
At this point you should be using console.log() to display the results of each round and the winner at the end.
Use prompt() to get input from the user. Read the docs here if you need to.
Feel free to re-work your previous functions if you need to. Specifically, you might want to change
the return value to something more useful.
Feel free to create more “helper” functions if you think it would be useful.
*/