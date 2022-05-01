//Question stored in array
var questions = [
    {
    question: "Commonly used data values do not include", 
    answers: ["strings", "booleans", "alerts", "numbers"],
    correctAnswer: "2"
    },
    {
    question: "The condition in an if/else statement is enclosed with _____.", 
    answers: ["quotes", "curly brackets", "parenthesis", "square brackets"],
    correctAnswer: "1"
    },
    {
    question: "Arrays in JavaScript can be used to store ____.", 
    answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "3"
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.", 
    answers: ["commas", "curly brackets", "quotes", "parenthesis"],
    correctAnswer: "2"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answers: ["JavaScript", "terminal/bash", "for loops", "console.log"],
    correctAnswer: "3"
    },
]
 var time = 60;
 var startButton = document.getElementById("start-btn");
 var questionBoxEl = document.getElementById("question-box");

//quiz start
var startGame = function() {
    startButton.remove();
    console.log("started");

    nextQuestion();
}

//next question
var nextQuestion = function() {
    var questionBox = document.createElement("div");

    questionBox.innerHTML = questions[0].question;
}

//actual question


startButton.addEventListener("click", startGame);
