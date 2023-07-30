function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice==0){
        return 'ROCK';
    }if(choice==1){
        return 'PAPER';
    }if(choice==2){
        return 'SCISSORS';
    }
}

function playRound(playerSelection, computerSelection){
    if(gameOver==false){
        if (playerSelection === computerSelection) {
            matchResult.textContent = "It\'s a tie!";
            matchResult.style.cssText='color: white;';

            thisBeatsThis.textContent = playerSelection + " ties with " + computerSelection;
            console.log("Tie")
        }
        if (
            (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
            (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
            (playerSelection === 'PAPER' && computerSelection === 'ROCK')
        ) {
            playerScore=playerScore+1;
            matchResult.textContent = "You won!";
            matchResult.style.cssText='color: green;';

            switchSign(playerSelection, computerSelection);
            changeScoreColor(playerScore,computerScore);

            playerScoreTracker.textContent = "Player: " + playerScore;

            thisBeatsThis.textContent = playerSelection + " beats " + computerSelection;
            console.log('Player Score:' + playerScore);

            isGameOver(playerScore,computerScore);
        }
        if (
            (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
            (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
            (computerSelection === 'PAPER' && playerSelection === 'ROCK')
        ) {
            computerScore=computerScore+1;
            matchResult.textContent = "You lost!";
            matchResult.style.cssText='color: red;';

            switchSign(playerSelection, computerSelection);
            changeScoreColor(playerScore,computerScore);

            thisBeatsThis.textContent = computerSelection + " beats " + playerSelection;
            console.log('Computer Score:' + computerScore);

            computerScoreTracker.textContent = "Computer: " + computerScore;

            isGameOver(playerScore,computerScore);
        }
    }
}

function switchSign(playerSelection, computerSelection){
    if(playerSelection=='ROCK'){
        playerSign.textContent = "✊";
    }else if(playerSelection=='PAPER'){
        playerSign.textContent = "✋";
    }else if(playerSelection=='SCISSORS'){
        playerSign.textContent = "✌";
    }

    if(computerSelection=='ROCK'){
        computerSign.textContent = "✊";
    }else if(computerSelection=='PAPER'){
        computerSign.textContent = "✋";
    }else if(computerSelection=='SCISSORS'){
        computerSign.textContent = "✌";
    }
}

function changeScoreColor(playerScore, computerScore){
    if(playerScore<computerScore){
        playerScoreTracker.style.cssText='color: red;';
        computerScoreTracker.style.cssText='color: green;';
    }else if(playerScore>computerScore){
        playerScoreTracker.style.cssText='color: green;';
        computerScoreTracker.style.cssText='color: red;';
    }else{
        computerScoreTracker.style.cssText='color: white;';
        playerScoreTracker.style.cssText='color: white;';
    }
}

function isGameOver(pScore, cScore){
    if(pScore == 5){
        console.log('PLAYER WINS THE GAME');
        annoucement.textContent='YOU WON!';
        annoucement.style.cssText='font-size:48px; font-weight: 800;'
        gameOver=true;
        playAgainButton.classList.add('active');
        playAgainButton.addEventListener('click', () => {
            resetGame();
        });
    }else if(cScore == 5){
        console.log('COMPUTER WINS THE GAME');
        annoucement.textContent='YOU LOST :(';
        annoucement.style.cssText='font-size:48px; font-weight: 800;';
        gameOver=true;
        playAgainButton.classList.add('active');
        playAgainButton.addEventListener('click', () => {
            resetGame();
        });
    }
}

function resetGame(){
    //text and sign reset
    matchResult.textContent='Choose Your Weapon!';
    matchResult.style.cssText='color:white;';
    thisBeatsThis.textContent='First to 5 Wins!'
    playerSign.textContent='❔';
    computerSign.textContent='❔';

    //score reset
    playerScoreTracker.textContent='Player: 0';
    playerScoreTracker.style.cssText='color:white;';
    playerScore=0;
    computerScoreTracker.textContent='Computer: 0'
    computerScoreTracker.style.cssText='color:white;';
    computerScore=0;

    //removes play again button
    playAgainButton.classList.remove('active');
    playAgainButton.removeEventListener('click', () => {
        resetGame();
    });

    annoucement.textContent='ROCK PAPER SCISSORS';
    gameOver=false;
}

let computerScore = 0;
let playerScore = 0;
let playerSelection = '';
let computerSelection = '';
let gameOver = false;

const matchResult = document.querySelector('#matchResult');
const thisBeatsThis = document.querySelector('#thisBeatsThis');

const playerSign = document.querySelector('#playerSign');
const playerScoreTracker = document.querySelector('#playerScore');

const computerSign = document.querySelector('#computerSign');
const computerScoreTracker = document.querySelector('#computerScore');

const playAgainButton = document.querySelector('#play-again-btn');
const annoucement = document.querySelector('.header');

const btnR = document.querySelector('.rock');
btnR.addEventListener('click', () => {
    playRound('ROCK', getComputerChoice());
    console.log("rock");
});

const btnP = document.querySelector('.paper');
btnP.addEventListener('click', () => {
    playRound('PAPER', getComputerChoice());
    console.log("paper");
});

const btnS = document.querySelector('.scissors');    
btnS.addEventListener('click', () => {
    playRound('SCISSORS', getComputerChoice());
    console.log("scissors");
});