function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomValue = Math.floor(Math.random() * choice.length);
    return choice[randomValue];
}

function playRound (playerSelection, computerSelection, playerScore, computerScore) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "paper") {
        computerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "scissors") {
        playerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection.toLowerCase() === "rock") {
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "Draw! You and the Computer chose Rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "scissors") {
        computerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Scissors beats Paper.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "rock") {
        playerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Paper beats Rock.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "Draw! You and the Computer chose Paper.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "rock") {
        computerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You lose! Rock beats Scissors.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection.toLowerCase() === "paper") {
        playerScore++;
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "You win! Scissors beat Paper.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection.toLowerCase() === "paper") {
        console.log("Player Score: ", playerScore);
        console.log("Computer Score: ", computerScore);
        return "Draw! You and the Computer chose Paper.";
    }
}

function game() {
    let round = 0;
    let playerScore = 0;
    let computerScore = 0;
    while (round < 5) {
        playerSelection = window.prompt("Player: ");
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection, playerScore, computerScore));
        round++;
    }
}

game();