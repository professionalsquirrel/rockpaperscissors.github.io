//Initializing scores
let playerScore = 0;
let computerScore = 0;

//Initializing round count. Game stops at a count of 5.
let numberOfRounds = 0;

//Storing elements involved in text changes:
//Player box
let playerScoreText = document.querySelector(".player-score");
let playerSelectionText = document.querySelector(".player-selection");
//Computer box
let computerScoreText = document.querySelector(".computer-score");
let computerSelectionText = document.querySelector(".computer-selection");
//Round result box
let resultText = document.querySelector(".results");

//Add eventListeners to all buttons: Upon click, play a round.
const buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++){
    let b = buttons[i];
    b.addEventListener("click",
    () => playRound(b.textContent));
}


//A function that generates the computer's choice
function getComputerChoice() {
    let n = Math.random();
    let rslt;
    if (n <= 1/3) {
        rlst = "Rock";
    }
    else if (n>2/3) {
        rlst = "Scissors";
    }
    else { rlst = "Paper"}
    return rlst;
}

/* A function that plays a round, increments #of rounds by 1, 
calculates winner of the round, and updates HTML text */
function playRound(humanChoice){
let computerChoice = getComputerChoice();
numberOfRounds++;
    playerSelectionText.textContent = humanChoice;
    computerSelectionText.textContent = computerChoice;
    /* if h wins then h++ and print 'You lose' to console log
    if c wins then c++ and print 'You win' to console log
    else it is a tie and scores remain unchanged */
    if ((humanChoice=='Rock' && computerChoice=='Scissors')
    || (humanChoice=='Paper' && computerChoice=='Rock') 
    || (humanChoice=='Scissors' && computerChoice=='Paper')){
        resultText.textContent = "You win! "+humanChoice+" beats "+computerChoice+".";
        playerScore++;
        playerScoreText.textContent = playerScore;
    }
    else if (humanChoice==computerChoice){
        resultText.textContent = "It's a tie! You both chose "+humanChoice+".";
    }
    else {
        resultText.textContent = "You lose! "+ computerChoice + " beats " + humanChoice+".";
        computerScore++;
        computerScoreText.textContent = computerScore;
    }

    if (numberOfRounds === 5) {
        //Compare scores and determine winner
        generateWinner();
        //Update resultText with game winner
        disableButtons()
    return null;
}
}

//Function that calculates the winner of the game. Call only after 5 rounds.
function generateWinner(){
    if (playerScore>computerScore) { 
        resultText.textContent = "You won the game! Your score: "+playerScore+" Computer score: "+computerScore}
    else if (computerScore>playerScore) {
        resultText.textContent = "You lost the game! Your score: "+playerScore+" Computer score: "+computerScore}
    else {
        resultText.textContent = "The game is over! It's a tie! Your score: "+playerScore+" Computer score: "+computerScore}
}

//Function that disables Rock Paper Scissors buttons once the game is over
function disableButtons(){
    const buttons = document.getElementsByTagName("button");
    for (let i = 0; i < buttons.length; i++){
        let b = buttons[i];
        b.disabled=true;
}

}