const ROCK = 0;
const PAPER = 1;
const SCISSORS = 2;
//play round
//get random computer choice
function playRound(userChoice) {
    let computerChoice = Math.floor(Math.random() * 2);

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


//play round 5 times
function game() {
    let user = 0;
    let computer = 0;
    let winner;

    for (let i = 0; i < 5; i++) {
        let userChoice = prompt("Rock, paper, scissors?").toLowerCase;
        winner = playRound(userChoice);
        if (winner == "user"){
            user++;
        }
        else if (winner == "computer"){
            computer++;
        }
        console.log(`Winner: ${winner}`)
    }
    
    if (user == computer){
        return console.log("Draw!");
    }
    else if (user > computer){
        return console.log("User wins!");
    }
    else {
        return console.log("Computer wins!");
    }

    //print the winner
}

