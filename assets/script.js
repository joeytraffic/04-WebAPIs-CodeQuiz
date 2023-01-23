var startQuiz;
var startButton = document.querySelector(".startQuiz");
var viewScores = document.querySelector(".view-scores")
var timerElement = document.querySelector(".timer-count");
var questionElement = document.querySelector(".question");
var isWin = false;
var score = 0;
var timer;
var timerCount;
var selectedQuestion = "";
var backButton = document.querySelector(".back-button");

var card1 = document.querySelector(".answer1");
var card2 = document.querySelector(".answer2");
var card3 = document.querySelector(".answer3");
var card4 = document.querySelector(".answer4");

var question1 = "Q: Which of the following ISN'T a data type in Javascript?";
var question2 = "Q: Which tag do you use to link a javascript source?";
var question3 = "Q: How do you prompt the user for their name?";
var question4 = "Q: What is calling a function before it is defined known as?"

var answer1a = "boolean";
var answer1b = "string";
var answer1c = "undefined";
var answer1d = "<class>";

var answer2a = "<script>";
var answer2b = "<javascript>";
var answer2c = "<js>";
var answer2d = "<jscript>";

var answer3a = 'alert(What is your name?)';
var answer3b = 'prompt("What is your name?")';
var answer3c = 'form("What is your name?")';
var answer3d = 'prompt(What is your name?)';

var answer4a = "grabbing";
var answer4b = "pulling";
var answer4c = "hoisting";
var answer4d = "yoinking";


var submit = document.querySelector("#submit");




var li1 = document.createElement("li");
var li2 = document.createElement("li");
var li3 = document.createElement("li");
var li4 = document.createElement("li");

var newItem = document.querySelector(".players");

function renderLeaderboard() {
    var initials = localStorage.getItem("initials");
    var score = localStorage.getItem("score")

    if (!initials || !score) {
        return;
    }

    var player = [initials, score];
    function addPlayer() {
        li1.textContent = "Player: " + player[0] + "  |  Score: " + player[1];
        newItem.appendChild(li1);
    }


    addPlayer();
}

renderLeaderboard();

submit.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.querySelector("#name").value;
    localStorage.setItem("initials", initials);
    localStorage.setItem("score", score);
    console.log(initials);
    console.log(score);
    var player = [initials, score];
    console.log(player)
    showHighScores();
    function addPlayer() {
        li1.textContent = "Player: " + player[0] + "  |  Score: " + player[1];
        newItem.appendChild(li1);
    }
    document.getElementById("form").style.display = "none";
}
)



function youWin() {
    isWin = true;
    document.getElementById("answers").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("form").style.display = "flex";
    document.getElementById("THE-LINE").style.display = "none";
}

function youLose() {
    document.getElementById("answers").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("form").style.display = "flex";
    document.getElementById("THE-LINE").style.display = "none";
}


function startTimer() {
    timerElement.textContent = 20;
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {
            if (isWin && timerCount > 0) {
                clearInterval(timer);
                youWin();
            }
        }
        if (timerCount <= 0) {
            clearInterval(timer);
            youLose();
        }
    }, 1000);
}


function wrongAnswer() {
    timerCount = timerCount - 5;
    timerElement.textContent = timerCount;

}

function correctAnswer() {
    score = score + timerCount + 5;
    timerCount = timerCount + 5;
    timerElement.textContent = timerCount;
}

function advance1() {
    correctAnswer();
    wrongAnswer(); // This is to undo the adding of 5 seconds to the timer
    quiz2();
}
function advance2() {
    correctAnswer();
    quiz3();
}
function advance3() {
    correctAnswer();
    quiz4();
}

function advance4() {
    correctAnswer();
    youWin();
}


function startQuiz() {
    document.getElementById("answers").style.display = "flex"
    document.getElementById("question").style.display = "flex"
    document.getElementById("startQuiz").style.display = "none"
    document.getElementById("form").style.display = "none";
    document.getElementById("question").textContent = question1;
    document.getElementById("card1").textContent = answer1a;
    document.getElementById("card2").textContent = answer1b;
    document.getElementById("card3").textContent = answer1c;
    document.getElementById("card4").textContent = answer1d;
    score = 0;
    isWin = false;
    timerCount = 20;
    startTimer();
    card1.addEventListener("click", wrongAnswer);
    card2.addEventListener("click", wrongAnswer);
    card3.addEventListener("click", wrongAnswer);
    card4.addEventListener("click", advance1);
}



function quiz2() {
    document.getElementById("question").textContent = question2;
    document.getElementById("card1").textContent = answer2a;
    document.getElementById("card2").textContent = answer2b;
    document.getElementById("card3").textContent = answer2c;
    document.getElementById("card4").textContent = answer2d;
    card1.addEventListener("click", advance2);
    card2.addEventListener("click", wrongAnswer);
    card3.addEventListener("click", wrongAnswer);
    card4.addEventListener("click", wrongAnswer);

}

function quiz3() {
    document.getElementById("question").textContent = question3;
    document.getElementById("card1").textContent = answer3a;
    document.getElementById("card2").textContent = answer3b;
    document.getElementById("card3").textContent = answer3c;
    document.getElementById("card4").textContent = answer3d;
    card1.addEventListener("click", wrongAnswer);
    card2.addEventListener("click", advance3);
    card3.addEventListener("click", wrongAnswer);
    card4.addEventListener("click", wrongAnswer);
    console.log(score);
}

function quiz4() {
    document.getElementById("question").textContent = question4;
    document.getElementById("card1").textContent = answer4a;
    document.getElementById("card2").textContent = answer4b;
    document.getElementById("card3").textContent = answer4c;
    document.getElementById("card4").textContent = answer4d;
    card1.addEventListener("click", wrongAnswer);
    card2.addEventListener("click", wrongAnswer);
    card3.addEventListener("click", advance4);
    card4.addEventListener("click", wrongAnswer);
    console.log(score);
}



function showHighScores() {
    document.getElementById("high-scores").style.display = "flex";
    document.getElementById("answers").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("startQuiz").style.display = "none";
    document.getElementById("THE-LINE").style.display = "none";
    document.getElementById("quiz-content").style.display = "none";
    document.getElementById("timeLeft").style.display = "none";
    document.getElementById("back-button").style.display = "flex";
    document.getElementById("player1").style.display = "flex"
    backButton.addEventListener("click", goBack)
}

function goBack() {
    this.style.display = "none";
    document.getElementById("high-scores").style.display = "none";
    document.getElementById("answers").style.display = "none";
    document.getElementById("question").style.display = "none";
    document.getElementById("startQuiz").style.display = "flex";
    document.getElementById("THE-LINE").style.display = "flex";
    document.getElementById("quiz-content").style.display = "flex";
    document.getElementById("timeLeft").style.display = "flex";
    document.getElementById("back-button").style.display = "flex";
}



startButton.addEventListener("click", startQuiz);

viewScores.addEventListener("click", showHighScores);


