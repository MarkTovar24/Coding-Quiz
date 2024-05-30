//setting up DOM
var frontPage = document.getElementById("front-screen")
var endScreen = document.getElementById("end-screen")
var timerText = document.querySelector("#timer-text")

var questionsSec = document.getElementById("questions")
var questionNum = document.getElementById("question-number")
var options = document.getElementById("answers")
var message = document.getElementById("message")


var enterInit = document.getElementById("initials")


var score = document.getElementById("score")


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
        if (timeLeft === 0) {
            endQuiz();
            clearInterval(timer)
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
    

    
    

start.addEventListener("click", startQuiz);