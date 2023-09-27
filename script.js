//game logic

let playerScore = 0
let computerScore = 0
let roundWinner = ""

function evaluate(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper') ||
        (playerSelection === 'Paper' && computerSelection === 'Rock')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'Rock' && playerSelection === 'Scissors') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper') ||
        (computerSelection === 'Paper' && playerSelection === 'Rock')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'Rock'
        case 1:
            return 'Paper'
        case 2:
            return 'Scissors'
    }
}

function isGameOver() {
    return playerScore === 5 || computerScore === 5
}

function capitalizeFirstLetter(string) {
    string = string.toLowerCase()
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// UI

const rockbtn = document.getElementById('rock')
const paperbtn = document.getElementById('paper')
const scissorsbtn = document.getElementById('scissors')


const scoreInfo = document.getElementById('scoreInfo')
const scoreMessage = document.getElementById('scoreMessage')

const playerSign = document.getElementById('playerSign')
const playerScorePara = document.getElementById('playerScore')
const computerSign = document.getElementById('computerSign')
const computerScorePara = document.getElementById('computerScore')

rockbtn.addEventListener('click', () => game('Rock'))
paperbtn.addEventListener('click', () => game('Paper'))
scissorsbtn.addEventListener('click', () => game('Scissors'))

function game(playerChoice) {
    let computerChoice = getRandomChoice()
    evaluate(playerChoice, computerChoice)
    updateChoices(playerChoice, computerChoice)
    updateScoreInfo()
}

function updateScoreInfo() {
    if (roundWinner === 'tie') {
      scoreInfo.textContent = "It's a tie!"
    } else if (roundWinner === 'player') {
      scoreInfo.textContent = 'You won!'
    } else if (roundWinner === 'computer') {
      scoreInfo.textContent = 'You lost!'
    }
  
    playerScorePara.textContent = `Player: ${playerScore}`
    computerScorePara.textContent = `Computer: ${computerScore}`
  }

function updateScoreMessage(winner, playerSelection, computerSelection) {
    if (winner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} 
        beats ${computerSelection.toLowerCase()}`
        return
    }
    if (winner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(playerSelection)} 
        is beaten by ${computerSelection.toLowerCase()}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
}

function updateScoreMessage(roundWinner, playerSelection, computerSelection) {
    if (roundWinner === 'player') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} beats ${computerSelection.toLowerCase()}`
        return
    }
    if (roundWinner === 'computer') {
        scoreMessage.textContent = `${capitalizeFirstLetter(
            playerSelection
        )} is beaten by ${computerSelection.toLowerCase()}`
        return
    }

    scoreMessage.textContent = `${capitalizeFirstLetter(
        playerSelection
    )} ties with ${computerSelection.toLowerCase()}`
}


function updateChoices(computerSelection, playerSelection) {
    switch (playerSelection) {
        case 'Rock':
            playerSign.textContent = '✊'
            break
        case 'Paper':
            playerSign.textContent = '✋'
            break
        case 'Scissors':
            playerSign.textContent = '✌'
            break
    }

    switch (computerSelection) {
        case 'Rock':
            computerSign.textContent = '✊'
            break
        case 'Paper':
            computerSign.textContent = '✋'
            break
        case 'Scissors':
            computerSign.textContent = '✌'
            break
    }
}


