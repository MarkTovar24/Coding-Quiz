//setting up DOM
var frontPage = document.getElementById("front-screen")
var endScreen = document.getElementById("end-screen")
var timerText = document.querySelector("#timer-text")

var questionsSec = document.getElementById("questions")
var questionNum = document.getElementById("question-number")
var options = document.getElementById("answers")
var message = document.getElementById("message")


var enterInit = document.getElementById("initials")
var scoreEl = document.getElementById("score")
var submitBtn = document.getElementById("save")

var start = document.getElementById("start")
var finalScore = 0;
var index = 0;

//Question Array
var questions = [
    {
        question: "Commonly used data types do NOT include",
        options: {
            A: "Strings",
            B: "Booleans",
            C: "Alerts",
            D: "Numbers",
        },
        answer: "Alerts"
    },
    {
        question: "Arrays in JavaScript can be used to store _____",
        options: {
            A: "Numbers and Strings",
            B: "Booleans",
            C: "Other Arrays",
            D: "All of the Above",
        },
        answer: "All of the Above"
    },
    {
        question: "A very useful tool used during development and debugging for printing content in the debugger is _____",
        options: {
            A: "JavaScript",
            B: "For loops",
            C: "Terminal",
            D: "console.log",
        },
        answer: "console.log"
    },
    {
        question: "The condition in an if/else statement is enclosed in ____",
        options: {
            A: "Square Brackets []",
            B: "Quotes",
            C: "Curly Brackets {}",
            D: "Parenthesis ()",
        },
        answer: "Parenthesis ()"
    },
    {
        question: "String values must be enclosed inside ___ when being assinged to a variable",
        options: {
            A: "Commas",
            B: "Curly Brackets",
            C: "Quotes",
            D: "Parenthesis",
        },
        answer: "Quotes"
    },
];

//Timer interval function for the countdown
var timerCount = document.getElementById("timer-count");
var timer;
var timeLeft = questions.length * 10;

function startTimer() {
    timer = setInterval(function () {
        timeLeft--;
        timerCount.textContent = timeLeft;
        if (timeLeft === 0 || index === questions.length) {
           clearInterval(timer)
            endQuiz();
            
        }
        return timerCount;
    }, 1000);
}

//Hides main screen, brings up question, emulating a page change
function startQuiz() {
    console.log("start button press detected!");
    frontPage.classList.add("hide");
    questionsSec.classList.remove("hide");
    startTimer();
    showQuestions();
    
}

//ends quiz and shows user's score based on the time they had remaining
function endQuiz() {
    clearInterval(timer);
    questionsSec.classList.add("hide")
    endScreen.classList.remove("hide");
    score.textContent = timeLeft
    finalScore = timeLeft
    if (timeLeft <= 0) {
        score = timer
        finalScore.textContent = timeLeft
    }
}
// Shows the question "page"
function showQuestions() {
    options.textContent = "";
    message.textContent = "";
    questionNum.textContent = questions[index].question;

    var ol = document.createElement("ol");
    var li1 = document.createElement("li");

    li1.textContent = questions[index].options.A;
    var li2 = document.createElement("li");

    li2.textContent = questions[index].options.B;
    var li3 = document.createElement("li");

    li3.textContent = questions[index].options.C;
    var li4 = document.createElement("li");

    li4.textContent = questions[index].options.D;

    ol.appendChild(li1);
    ol.appendChild(li2);
    ol.appendChild(li3);
    ol.appendChild(li4);

    options.appendChild(ol);
}
//moves onto the next question once an answer is pressed
function nextQuestion(event) {
    var userChoice = event.target.textContent
    checkAnswers(userChoice)
    if (timeLeft <= 0) {
        endQuiz();
    }
    index++;
    if (index < questions.length) {
        setTimeout(showQuestions, 450)
    } else {
        clearInterval(timer);
        endQuiz();
    }
}

//if the answer isnt correct, takes off ten seconds
function checkAnswers (userChoice) {
    if (questions[index].answer === userChoice) {
        message.textContent = "Correct"
    } else {
    message.textContent = "incorrect"
    timeLeft = timeLeft - 10
    }
}
//Saves high schore into local storage based on the time left
function saveHighScore() {
    var initials = enterInit.value 
    var newScore = {
        score: timeLeft,
        initials: initials,
    }
    var savedScores = JSON.parse(localStorage.getItem("scores")) || []
    savedScores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(savedScores));
    getHighScores();
    
}
//shows high score data after finishing quiz
function getHighScores() {
    document.getElementById("high-scores").classList.remove("hide")
    endScreen.classList.remove("hide")
    var highScores = JSON.parse(localStorage.getItem("scores"))
    var highestScore = 0 
    for (var score of highScores) {
        if (score.score > highestScore) {
            highestScore = score.score
        }
    }
    document.getElementById("top-score").textContent = highestScore;
    var highestScoreIndex = highScores.indexOf(highScores.find(
        function(score){
            return score.score === highestScore
        }
    ))
    highScores.splice(highestScoreIndex, 1)
    var ul = document.createElement("ul");
    highScores.forEach(function (highscore) {
        var li = document.createElement("li")
        li.innerHTML = `<span>Initials: ${highscore.initials} score: ${highScore.score}`
        ul.appendChild(li)
    })
    document.getElementById("high-scores").appendChild(ul)
}

document.getElementById("play-again").addEventListener("click", function() {
    window.location.reload()
})
    
//event listeners so the thing actually works
options.addEventListener("click", nextQuestion);
start.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveHighScore);