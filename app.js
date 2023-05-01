const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_CHOICE  = 'ROCK';
const resultDraw = 'DRAW';
const resultPlayerWin = 'PLAYER_WINS';
const computerWin = 'COMPUTER_WIN';

let gameIsRunning = false;

const getPlayerChoice = function() {
    const selection = prompt(`${ROCK}, ${PAPER}, ${SCISSORS}`, '').toUpperCase();
    if(selection !== ROCK && selection !== PAPER && selection !== SCISSORS){
        alert(`Invalid Choice ! We Chose ${ROCK} for you !`);
        return DEFAULT_CHOICE;
    }
    return selection;
}

const getComputerChoice = function() {
    const randomValue = Math.random();
    if(randomValue < 0.34){
        return ROCK;
    }else if(randomValue < 0.67){
        return PAPER;
    }else{
        return SCISSORS;
    }
}

const getWinner = (cChoice, pChoice = DEFAULT_CHOICE) => {
     if(cChoice === pChoice){
         return resultDraw;
     }else if (
        cChoice === ROCK && pChoice === PAPER || 
        cChoice === PAPER && pChoice === SCISSORS || 
        cChoice=== SCISSORS && pChoice === ROCK ){
           return resultPlayerWin; 
        }else{
            return computerWin;
        }
};

startGameBtn.addEventListener('click', function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning = true;
    console.log('Game is Starging');
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    let winner;
    if(playerChoice){
      winner = getWinner(computerChoice,playerChoice);
    }else{
        winner = getWinner(computerChoice);
    }
    let message = `You Picked ${playerChoice || DEFAULT_CHOICE}, computer picked ${computerChoice}`;
    if(winner === resultDraw){
       message = message + ' had a draw';
    }else if(winner === resultPlayerWin){
        message = message + ' you won!';
    }else{
        message = message + ' computer win';
    }
    alert(message);
    gameIsRunning = false;
   });