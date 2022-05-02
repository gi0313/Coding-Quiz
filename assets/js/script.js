//Question stored in array
var questions = [
    {
    question: "Commonly used data values do not include", 
    answer1: "strings",
    answer2: "booleans",
    answer3: "alerts",
    answer4: "numbers",
    correctAnswer: "2"
    },
    {
    question: "The condition in an if/else statement is enclosed with _____.", 
    answer1: "quotes",
    answer2: "curly brackets",
    answer3: "parenthesis",
    answer4: "square brackets",
    correctAnswer: "2"
    },
    {
    question: "Arrays in JavaScript can be used to store ____.", 
    answer1: "numbers and strings",
    answer2: "other arrays",
    answer3: "booleans",
    answer4: "all of the above",
    correctAnswer: "4"
    },
    {
    question: "String values must be enclosed within ____ when being assigned to variables.", 
    answer1: "commas",
    answer2: "curly brackets",
    answer3: "quotes",
    answer4: "parenthesis",
    correctAnswer: "3"
    },
    {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answer1: "JavaScript",
    answer2: "terminal/bash",
    answer3: "for loops",
    answer4: "console.log",
    correctAnswer: "4"
    },
]
var time = 60;
var startButton = document.getElementById("start-btn");
var questionBoxEl = document.getElementById("question-box");
var timerEl = document.getElementById("timer");
var answer1 = document.getElementById("1");
var answer2 = document.getElementById("2");
var answer3 = document.getElementById("3");
var answer4 = document.getElementById("4");

var lastQuestionIndex = question.length -1;
var runningQuestionIndex = 0;

//quiz start
var startGame = function() {
    startButton.remove();
    renderQuestion();
};
//timer rundown
function countdown() {
    time--;
    timerEl.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
    saveScore();
    }
   };

//question rendering
var renderQuestion = function() {
    var questionBox = questions[runningQuestionIndex];

    questionBox.innerHTML= "<p>" + questionBox.question+ "<p>";
    answer1.innerHTML= questionBox.answer1;
    answer2.innerHTML= questionBox.answer2;
    answer3.innerHTML= questionBox.answer3
    answer4.innerHTML= questionBox.answer4
};


startButton.addEventListener("click", startGame);
