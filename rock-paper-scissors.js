//Player and computer scores
let playerPoints = 0;
let computerPoints = 0;

function playerScore(){
    playerPoints++;
}

function computerScore(){
    computerPoints++;
}

//Function computerPlay that randomly returns RPS

function computerPlay() {
    let randomRockPaperScissors = ["rock", "paper", "scissors"];
    return randomRockPaperScissors[Math.floor(Math.random() * randomRockPaperScissors.length)];
}

//Function that gets the user input

function getInputFromUser() {
    
    let playerInput = "";
    while (playerInput !== "rock" || playerInput !== "paper" || playerInput !== "scissors") {
    playerInput = prompt("Rock, paper, or scissors?").toLowerCase();
        if (playerInput == "rock" || playerInput == "paper" || playerInput == "scissors") {
            return(playerInput); 
            } else {
            alert("Not a valid option");}
            }
         }

//Function that plays one round of the game

function playRound(getInputFromUser, computerPlay, playerScore, computerScore) {
    
    

    if (getInputFromUser === computerPlay) {
        return("You chose " + getInputFromUser + " and computer chose " + computerPlay + ". This round is tie!");
    } else if (getInputFromUser == "rock" && computerPlay == "scissors" || getInputFromUser == "paper" && computerPlay == "rock" || getInputFromUser == "scissors" && computerPlay == "paper"){
        playerPoints++;
        playerScore; 
        return("You chose " + getInputFromUser + " and computer chose " + computerPlay + ". You win this round!");
       
    } else {
        computerPoints++;
        computerScore;
        return("You chose " + getInputFromUser + " and computer chose " + computerPlay + ". Computer wins this round!");
        
    } 

}


//Function called game(). 

function game() {
    //play game 5 times
    for (let i = 0; i < 5; i++) {

        let playerSelection = getInputFromUser();
        let computerSelection = computerPlay();
        //Call playround function, passing in newly returned values from the playerPlay and computerplay functions
        let currentRound = playRound(playerSelection, computerSelection);

        //Log our result
        console.log(currentRound);
    }
    
    if (playerPoints > computerPoints) {
        console.log("The result is: Player: "+ playerPoints + " Computer: " + computerPoints + ". You win the game!")
    } else {
        console.log("The result is: Player: "+ playerPoints + " Computer: " + computerPoints + ". Computer wins the game, sorry")
    }
    

    
}


game();
