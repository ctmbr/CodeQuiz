document.querySelector("#start").addEventListener("click", startGame)
var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")
var questionEl = document.querySelector("#question-list")
var scoreEl = document.querySelector("#score")
var initialsForm = document.querySelector("#initials-form")
var submitScore = document.querySelector("#submit")
var timer
var secondsRemaining = 60
var currentQuestion = 0
// The following variable is intended to provide relevant text for each multiple choice. I was unsure how to do this and ran out of time
// var answerText = [{
//     A: ["A sister-language of JAVA", "Chrome", "With document.createElement and .append", "HTML"]
// }, { B: ["A library of code snippets  that developers import for their own use", "Firefox", "using .src", "Javascript"] },
// { C: ["An early predecessor of JSON", "Brave", "csa", "All of the above"] }, {
//     D: ["A rare object", "both B & C", "This is impossible without third=party APIs", "CSS"]
// }]
var scoreNumber = 0
var questions = [
    {
        questionText: 'What is Jquery?',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'B'
    },
    {
        questionText: 'Javascript Creator Brendan Eich was also involved in the development of which web browser?',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'D'
    },
    {
        questionText: 'How does one add HTML using Javascript?',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'A'
    },
    {
        questionText: 'Which languages run on web browsers?',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'C'
    },

]

function startGame(e) {
    console.log(e.target)
    startButton.classList.add("hidden")
    timerEl.innerText = secondsRemaining;
    scoreEl.innerText = "Score = " + scoreNumber
    timerEl.classList.remove("hidden")
    questionEl.classList.remove("hidden")
    timer = setInterval(function () {
        secondsRemaining--;
        timerEl.innerText = secondsRemaining;
        if (secondsRemaining <= 0) { endGame() }
    }, 1000)
    questionDisplay()
}

function questionDisplay() {
    questionEl.innerHTML = ''
    var questionText = document.createElement("h3")
    questionText.innerText = questions[currentQuestion].questionText
    questionEl.append(questionText)

    var orderedList = document.createElement("ol")

    questions[currentQuestion].choices.forEach(function (choice) {
        var choiceLi = document.createElement("li")
        // choiceLi.innerText = choice
        choiceLi.innerHTML = `<button id="choice" onclick="selectAnswer(this)">${choice}</button>`
        orderedList.append(choiceLi)
    })

    questionEl.append(orderedList)
}

function selectAnswer(button) {
    var choice = button.innerText
    var correctness = document.querySelector("#correctness")

    if (choice === questions[currentQuestion].correctAnswer) {
        correctness.innerText = choice + ": correct"
        correctness.classList.add("correct")
        scoreNumber = scoreNumber + 10
        scoreEl.innerText = "Score = " + scoreNumber
    } else (correctness.innerText = choice + ": incorrect",
        correctness.classList.add("incorrect"),
        secondsRemaining = secondsRemaining - 10
    )
    currentQuestion++

    if (currentQuestion >= questions.length) {
        endGame()
    } else questionDisplay()

}

function endGame() {
    clearInterval(timer);
    timerEl.classList.add("game-over")
    timerEl.innerText = "GAME OVER!!"
    questionEl.classList.add("hidden")
    initialsForm.classList.remove("hidden")
}
submitScore.addEventListener("click", function (event) {
    event.preventDefault();
    var enterScore = document.createElement("h3")
    var initials = document.querySelector("#initials").value;

    if (initials === "") {
        enterScore.innerText = "ERROR: Initials cannot be blank";
        enterScore.classList.add("incorrect")
        initialsForm.append(enterScore)
    } else {
        enterScore.innerText = "SUCCESS!! " + initials + ", Registered successfully!";
        enterScore.classList.add("correct")
        initialsForm.append(enterScore)
        localStorage.setItem("initials", initials);
    }
});