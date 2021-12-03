// Player and computer scores

let playerPoints = 0;
let computerPoints = 0;

//Catching the DOM

let playerPoints_span = document.getElementById("user-score");
let computerPoints_span= document.getElementById("computer-score");
let scoreChart_div = document.querySelector(".score-chart");
let result_div = document.querySelector(".round-result");
let rock_button = document.getElementById("rock");
let paper_button = document.getElementById("paper");
let scissors_button = document.getElementById("scissors");
let endTitle_h1 = document.getElementById("end-title")
let endMessage_h2 = document.getElementById("end-message")
let message_p = document.getElementById("message");
let resetButton = document.getElementById("button-replay");




//Function computerPlay that randomly returns RPS

function computerPlay() {
    let randomRockPaperScissors = ["rock", "paper", "scissors"];
    return randomRockPaperScissors[Math.floor(Math.random() * randomRockPaperScissors.length)];
}

function win(userChoice, computerChoice){
    playerPoints++;
    playerPoints_span.innerHTML = playerPoints;
    result_div.innerHTML = "You chose " + userChoice + " and computer chose " + computerChoice + ". You win this round!";
}

function lose(userChoice, computerChoice){
    computerPoints++;
    computerPoints_span.innerHTML = computerPoints;
    result_div.innerHTML = "You chose " + userChoice + " and computer chose " + computerChoice + ". Computer wins this round!"
}

function draw(userChoice, computerChoice){
    result_div.innerHTML = "You chose " + userChoice + " and computer chose " + computerChoice + ". This round is tie!";
}

function PlayRound(userChoice) {
    let computerChoice = computerPlay();
     if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
        endGame();
        
    } else if (userChoice == "rock" && computerChoice == "scissors" || userChoice == "paper" && computerChoice == "rock" || userChoice == "scissors" && computerChoice == "paper"){
        win(userChoice, computerChoice);
        endGame();
       
    } else {
        lose(userChoice, computerChoice);
        endGame();
    } 

}


function main() {
rock_button.addEventListener('click', function () {
    PlayRound("rock")
} )

paper_button.addEventListener('click', function () {
    PlayRound("paper")
} )

scissors_button.addEventListener('click', function () {
    userInput = "scissors";
    PlayRound("scissors")
} )

}

function endGame() {
if (playerPoints === 5) {
    
    endTitle_h1.innerHTML = "You win the game, yay!";
    document.getElementById('end-screen').style.display = "block";
    
    

} else if (computerPoints === 5) {
    
    endTitle_h1.innerHTML = "You lose, computer wins the game. Sorry...";
    document.getElementById('end-screen').style.display = "block";
    

}
}

function replay () {
    location.reload();
}
    main();