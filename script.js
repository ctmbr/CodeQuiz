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
var scoreNumber = 0
var questions = [
    {
        questionText: 'This is the first question',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'B'
    },
    {
        questionText: 'This is the second question',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'D'
    },
    {
        questionText: 'This is the third question',
        choices: ['A', 'B', 'C', "D"],
        correctAnswer: 'A'
    },
    {
        questionText: 'This is the fourth question',
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
        choiceLi.innerHTML = `<button onclick="selectAnswer(this)">${choice}</button>`
        orderedList.append(choiceLi)
    })

    questionEl.append(orderedList)
}

function selectAnswer(button) {
    console.log(button.innerText)

    if (button.innerText === questions[currentQuestion].correctAnswer) {
        console.log('correct')
        scoreNumber = scoreNumber + 10
        scoreEl.innerText = "Score = " + scoreNumber
    } else (console.log('incorrect'),
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

    var initials = document.querySelector("#initials").value;

    if (initials === "") {
        console.log("error, initials cannot be blank");
    } else {
        console.log("success", initials, "Registered successfully");

        localStorage.setItem("initials", initials);
    }
});