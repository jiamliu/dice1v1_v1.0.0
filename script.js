let player1Wins = 0;
let player2Wins = 0;
//this is the step to first declare two variable since we have two players, then we initialize both player's score at zero

document.getElementById('rollButton').onclick = function() {
    let dice1Result = getRandomDiceRoll();
    let dice2Result = getRandomDiceRoll();
    updateDiceImages(dice1Result, dice2Result);
    checkRoundWinner(dice1Result, dice2Result);
};

//this is the roll button function, so we let both player roll randomly, with this button, it will update the dice image and check the winner at same time
//I will assign the number to each dice at later steps

function getRandomDiceRoll() {
    return 1 + Math.floor(Math.random() * 6);
}

//this is to 

function updateDiceImages(dice1, dice2) {
    document.getElementById('dice1').src = `dice${dice1}.png`;
    document.getElementById('dice2').src = `dice${dice2}.png`;
}

function checkRoundWinner(dice1, dice2) {
    if (dice1 > dice2) {
        player1Wins++;
        updateWinCount('player1-score', player1Wins);
        showMessage("Player 1 wins the round!");
    } else if (dice2 > dice1) {
        player2Wins++;
        updateWinCount('player2-score', player2Wins);
        showMessage("Player 2 wins the round!");
    } else {
        showMessage("It's a tie!");
    }
}

function updateWinCount(playerId, wins) {
    document.getElementById(playerId).querySelector('span').textContent = wins;
}

function showMessage(message) {
    document.getElementById('message').textContent = message;
}

document.getElementById('resetButton').onclick = function() {
    resetGame();
};

function resetGame() {
    player1Wins = 0;
    player2Wins = 0;
    updateWinCount('player1-score', player1Wins);
    updateWinCount('player2-score', player2Wins);
    showMessage("");
}

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});