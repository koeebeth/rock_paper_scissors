const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
let user = 0;
let computer = 0;
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => button.addEventListener('click', game));
//play round

function playRound(userChoice, computerChoice) {
//get user choice
    switch(userChoice){
        case "rock":
            userChoice = ROCK;
            break;
        case "paper":
            userChoice = PAPER;
            break;
        case "scissors":
            userChoice = SCISSORS;
            break;
        default:
            console.error("Invalid input");
            return;
    }
    let winner;
    //print winner
    if (userChoice == computerChoice) {
        winner = "draw";
    }
    else if ((userChoice == ROCK && computerChoice == SCISSORS) || (userChoice == PAPER && computerChoice == ROCK) || (userChoice == SCISSORS && computerChoice == PAPER)) {
        winner = "user";
    }
    else {
        winner = "computer";
    }

    return winner;
}

function game(e) {
    //insert computer choice into div and delete previous one
    let outcome = document.querySelector('.outcome');
    if (outcome.firstChild) outcome.removeChild(outcome.firstChild);
    
    let divider = document.createElement('div');
    divider.classList.add('choice_display');
    let cmpChoiceDisplay = document.createElement('h3');
    let image = document.createElement('img');
    let winnerDisplay = document.createElement('h2');
    let userScore = document.querySelector('span.player');
    let computerScore = document.querySelector('span.computer');
    //play round
    let userChoice = e.currentTarget.value;
    let computerChoice = Math.floor(Math.random() * 3);
    let winner = playRound(userChoice, computerChoice);

    //display computer choice
    if (computerChoice == ROCK){
        image.src = './images/rock.png';
        cmpChoiceDisplay.textContent = 'Rock!';
    }
    else if (computerChoice == PAPER){
        image.src = './images/paper.png';
        cmpChoiceDisplay.textContent = 'Paper!';
    }
    else if (computerChoice == SCISSORS){
        image.src = './images/scissors.png';
        cmpChoiceDisplay.textContent = 'Scissors!';
    }
    divider.appendChild(image);
    divider.appendChild(cmpChoiceDisplay);
    outcome.appendChild(divider);
    //update scores and display winner
    if (winner == 'draw'){
        winnerDisplay.textContent = 'Tie!';
    }
    else if (winner == 'computer'){
        computer++;
        winnerDisplay.textContent = 'Computer +1';
        computerScore.textContent = `${computer}`;
    }
    else {
        user++;
        winnerDisplay.textContent = 'User +1';
        userScore.textContent = `${user}`;
    }
    divider.appendChild(winnerDisplay);

    if (computer >= 5 || user >= 5){
        winner = (computer == 5) ? 'Computer' : 'User';
        winnerAnnounce = document.createElement('h2');
        winnerAnnounce.textContent = `${winner} won!`;
        divider.appendChild(winnerAnnounce);
        buttons.forEach((button) => button.removeEventListener('click', game));
    }
}

let userChoice;
let computerChoice;
//get user choice on click
buttons.forEach((button) => button.addEventListener('click', game));



