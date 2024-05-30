//setting up DOM
var frontPage = document.querySelector("#front-screen")
var endScreen = document.querySelector(".end-screen")
var timerText = document.querySelector("#timer-text")
var questions = document.querySelector(".questions")
var questionNum = document.querySelector(".question-number")
var enterInit = document.querySelector(".initials")
var message = document.querySelector(".message")
var score = document.querySelector(".score")
var answers = document.querySelector(".answers")
var options = document.querySelector("#options")
var start = document.querySelector(".start")
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
    frontPage.classList.add("hide");
    questions.classList.remove("hide");
    startTimer();
    showQuestions();
}
