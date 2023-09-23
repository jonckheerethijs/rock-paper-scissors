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
    }
    switch (computerSelection){
        case "Rock": 
            if (userSelection=="Paper"){
                return "user";
            } else if (userSelection=="Scissors"){
                return "computer";
            } else {
                return "draw";
            }
        case "Paper":
            if (userSelection=="Scissors"){
                return "user";
            } else if (userSelection=="Rock"){
                return "computer";
            } else {
                return "draw";
            }
        case "Scissors":
            if (userSelection=="paper"){
                return "computer";
            } else if (userSelection=="rock"){
                return "user";
            } else {
                return "draw";
            }
    }
}

function game(rounds){
    for (let i = 0;i<rounds;i++){
        let computer = getComputerChoice();
        let user = getUserChoice();
        result = evaluate(computer, user)
        console.log(`Computer:  ${computer}     User:  ${user}.`)
        if (result == "draw"){
            console.log("It was a draw");
        } else {
            console.log(`The ${result} won.`)
        }
    }
}

game(5);