const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
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


function playGame(){
    user = 0;
    computer = 0;
    let userChoice;
    let computerChoice;
    //get user choice on click
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => button.addEventListener('click', function (e) {
        //insert computer choice into div and delete previous one
        let outcome = document.querySelector('.outcome');
        if (outcome.firstChild) outcome.removeChild(outcome.firstChild);
        
        let divider = document.createElement('div');
        divider.classList.add('choice_display');
        let cmpChoiceDisplay = document.createElement('h3');
        let image = document.createElement('img');
        //play round
        userChoice = e.currentTarget.value;
        computerChoice = Math.floor(Math.random() * 3);
        winner = playRound(userChoice, computerChoice);

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


        
    }));

}

playGame();