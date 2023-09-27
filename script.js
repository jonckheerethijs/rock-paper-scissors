const choices = ["Rock", "Paper", "Scissors"];
let playerScore = 0
let computerScore = 0

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
        return "draw"
    }
    switch (computerSelection) {
        case "Rock":
            if (userSelection == "Paper") {
                playerScore++
                return "user";
            } else if (userSelection == "Scissors") {
                computerScore++
                return "computer";
            } else {
                return "draw";
            }
        case "Paper":
            if (userSelection == "Scissors") {
                playerScore++
                return "user";
            } else if (userSelection == "Rock") {
                computerScore++
                return "computer";
            } else {
                return "draw";
            }
        case "Scissors":
            if (userSelection == "Paper") {
                computerScore++
                return "computer";
            } else if (userSelection == "Rock") {
                playerScore++
                return "user";
            } else {
                return "draw";
            }
    }
}

function game(userChoice) {
    let computerChoice = getComputerChoice();
    result = evaluate(computerChoice, userChoice)
    console.log(`Computer:  ${computerChoice}     User:  ${userChoice}`)
    if (result == "draw") {
        resultbox.textContent = `It was a draw`
    } else {
        resultbox.textContent = `The ${result} won`
    }
}


const rockbtn = document.getElementById('rock')
const paperbtn = document.getElementById('paper')
const scissorsbtn = document.getElementById('scissors')
const resultbox = document.getElementById('result')
rockbtn.addEventListener('click', () => game('Rock'))
paperbtn.addEventListener('click', () => game('Paper'))
scissorsbtn.addEventListener('click', () => game('Scissors'))
