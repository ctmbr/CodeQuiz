document.querySelector("#start").addEventListener("click", startGame)
var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question-list")
var scoreEl = document.querySelector("#score")
var timer
var secondsRemaining = 10
function startGame() {
    startButton.classList.add("hidden")
    timerEl.innerText = secondsRemaining;
    timerEl.classList.remove("hidden")
    questionEl.classList.remove("hidden")
    console.log("Hello World")
    scoreEl.innerText = "Score"
    timer = setInterval(function () {
        secondsRemaining--;
        timerEl.innerText = secondsRemaining;
        if (secondsRemaining <= 0) { endGame() }
    }, 1000)

}

function endGame() {
    clearInterval(timer);
    timerEl.classList.add("game-over")
    timerEl.innerText = "GAME OVER!!"
}