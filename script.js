const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");

const choices = ["Rock", "Paper", "Scissors"];
const score = {
    win: 0,
    loss: 0,
    tie: 0
}

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerChoice) {
    const computerPick = computerChoice();
    player.innerText = `Player: ${playerChoice}`;
    computer.innerText = `Computer: ${computerPick}`;

    if (playerChoice === computerPick) {
        result.innerText = "Result: It's a tie!";
        score.tie++;
        scoreDisplay.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
    }

    else if (playerChoice === "Rock" && computerPick === "Scissors" || 
        playerChoice === "Paper" && computerPick === "Rock" || 
        playerChoice === "Scissors" && computerPick === "Paper") {
        result.innerText = "Result: You win!";
        score.win++;
        scoreDisplay.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
    }

    else {
        result.innerText = "Result: Computer wins!";
        score.loss++;
        scoreDisplay.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
    }
}

document.getElementById("rock").addEventListener("click", function() {
    playRound("Rock");
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("Paper");
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("Scissors");
});

document.getElementById("reset").addEventListener('click', function() {
    player.innerText = "";
    computer.innerText = "";
    result.innerText = "";
    score.win = 0;
    score.loss = 0;
    score.tie = 0;
    scoreDisplay.innerText = "";
});