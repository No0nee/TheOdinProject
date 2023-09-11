function getComputerChoice () {
    let choice = ["Rock", "Paper", "Scissors"];
    let randomValue = Math.floor(Math.random() * choice.length);
    return console.log(choice[randomValue]);
}