const choices = ["Rock", "Paper", "Scissors"];

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    userInput = prompt("What do you want to choose?");
    userChoice = capitalizeFirstLetter(userInput)
    return userChoice;
}

function evaluate(computerSelection, userSelection) {
    if (userSelection == computerSelection) {
        return "Draw"
    } else {
        return "NoDraw"
    }
}
