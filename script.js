const choices = ["Rock", "Paper", "Scissors"];

function capitalizeFirstLetter(string) {
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function getUserChoice() {
    userChoice = ""
    let userInput = prompt("What do you want to choose?");
    userInput = capitalizeFirstLetter(userInput)
    if (choices.includes(userInput)) {
        console.log("Valid choice!")
        userChoice = userInput
    }
    while (userChoice == "") {
        if (choices.includes(userInput)) {
            console.log("Valid choice!")
            userChoice = userInput
        } else {
            console.log("Invalid choice!")
            userInput = prompt(`Invalid choice. What do you want to choose?\nChoices are ${choices}`)
            userInput = capitalizeFirstLetter(userInput)
        }
    }
    return userChoice;
}

let computerSelection = getComputerChoice();
let userSelection = getUserChoice();
console.log(`Computer: ${computerSelection}, User: ${userSelection}`)

function evaluate(computerSelection, userSelection) {
    if (userSelection == computerSelection) {
        return "Draw"
    } else {
        return "NoDraw"
    }
}
