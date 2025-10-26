const player = document.getElementById("player");
const computer = document.getElementById("computer");
const result = document.getElementById("result");
const scoreDisplay = document.getElementById("score");
const intro = document.getElementById("intro");

const choices = ["Rock", "Paper", "Scissors"];
const score = {
    win: 0,
    loss: 0,
    tie: 0
}

const save = localStorage.getItem('rpsScore');

if (save) {
    const savedScore = JSON.parse(save);
    score.win = savedScore.win;
    score.loss = savedScore.loss;
    score.tie = savedScore.tie;
    scoreDisplay.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
}

function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return choices[randomChoice];
}

function playRound(playerChoice) {
    const computerPick = computerChoice();
    player.innerText = `You: ${playerChoice}`;
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
    intro.style.display = "none";
    localStorage.setItem('rpsScore', JSON.stringify(score));
});

document.getElementById("paper").addEventListener("click", function() {
    playRound("Paper");
    intro.style.display = "none";
    localStorage.setItem('rpsScore', JSON.stringify(score));
});

document.getElementById("scissors").addEventListener("click", function() {
    playRound("Scissors");
    intro.style.display = "none";
    localStorage.setItem('rpsScore', JSON.stringify(score));
});

document.getElementById("reset").addEventListener('click', function() {
    intro.style.display = "block";
    intro.innerText = "Pick one to Start the game";
    player.innerText = "";
    computer.innerText = "";
    result.innerText = "";
    score.win = 0;
    score.loss = 0;
    score.tie = 0;
    scoreDisplay.innerText = `Wins: ${score.win}, Losses: ${score.loss}, Ties: ${score.tie}`;
    localStorage.removeItem('rpsScore');
});