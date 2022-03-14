document.querySelector("#start").addEventListener("click", startGame)
var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question-list")
var scoreEl = document.querySelector("#score")
function startGame() {
    startButton.classList.add("hidden")
    timerEl.classList.remove("hidden")
    questionEl.classList.remove("hidden")
    console.log("Hello World")
    scoreEl.innerText = "Score"


}
