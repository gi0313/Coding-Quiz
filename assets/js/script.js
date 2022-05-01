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
 var time = 75;
 var startButton = document.getElementById("start-btn");
 var timeEl = document.getElementById("timer");
//Quiz start
var startQuiz = function() {
    startButton.remove();

    renderQuestion()
}

var renderQuestion = function() {
    var questionDiv = document.createElement("div");

}

//timer

function timer() {
    time--;
    timeEl.textContent = "Time: " + time;
    if (time === 0) {
        //ends when timer is 0
    }
}

//question
var renderChoices = function() {
    var answerDiv = document.createElement("div");

    for (let i = 0; i<questions.length; i++) {

    }
}
//check answer
var checkAnswer = function(event) {
    if (correct) {

    }

}

startButton.addEventListener("click", startQuiz);
answerDiv.addEventListener("click", checkAnswer);