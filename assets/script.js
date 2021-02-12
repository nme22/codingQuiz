const quizContainer = document.getElementById('quiz');
const answerContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const startButton = document.getElementById('start');
const quiz = document.querySelector('main');
const score = document.querySelector('#score')

var quizScore = 0;
var questionNumber = 0;
var time;
var myTime;
var fifaQuestions = [
    {
        question: "Who is the top goal scorer in the premier leauge? ",
        answers: [
            "Mohammad Salah",
            "Harry Kane",
            "Bruno Fernandes",
            "Son Heung-min"
        ],
        correctAnswer: "Mohammad Salah"
    },
    {
        question: "Who currently has the most assists in the premier leauge? ",
        answers: [
            "Jack Grealish",
            "Kevin De Bruyne",
            "Marcus Rashford",
            "Harry Kane"
        ],
        correctAnswer: "Harry Kane"

    },
    {
        question: "What club is currently leading in the 2021 premier leauge? ",
        answers: [
            "Manchester United",
            "Tottenhamn",
            "Liverpool",
            "Manchester City"
        ],
        correctAnswer: "Manchester City"
    },
    {
        question: "What club is at risk for relegation? ",
        answers: [
            "Sheffield United",
            "West Broom",
            "Aston Villa",
            "Arsenal"
        ],
        correctAnswer: "Sheffield United"
    }
]

/* create a function that has four mini functions to display the quiz questions, a place to put the quiz,
a section for the results, and a submit function.
*/

// Start by making a timer function.
function startCountdown(sec) {
    time = sec;
    myTime = setInterval(function () {
        document.getElementById('timer').innerHTML = time + " Seconds left";
        if (time > 0) {
            time--;
        } else {
            document.getElementById('timer').innerHTML = "Get off the pitch!";
            clearInterval(myTime);
        }
    }, 1000);
}


// Create a function that makes
function createQuiz() {
    quiz.innerHTML = "";
    var p = document.createElement("p")
    p.innerText = fifaQuestions[questionNumber].question
    quiz.appendChild(p);

    for (let i = 0; i < fifaQuestions[questionNumber].answers.length; i++) {
        var a = document.createElement('button');
        a.onclick = function () {
            answerQuestion(i);
        }
        a.innerText = fifaQuestions[questionNumber].answers[i];
        quiz.appendChild(a);

    }



}
// function nextQuestion() {

// }

function endQuiz() {
    $(".hideQuiz").hide();
    document.getElementById('timer').innerHTML = "Get off the pitch!";
    clearInterval(myTime);
    console.log(quiz.innerHTML);
    highScores();
}

function highScores() {
    var textbox = document.createElement("input");
    textbox.value = "Your Name";
    textbox.id = "highScore";
    document.body.appendChild(textbox);
    textbox.onfocus = function () { textbox.value = ""; };
    var submit = document.createElement("Button");
    submit.innerText = "Submit";
    submit.onclick = function () { saveScore(); };
    document.body.appendChild(submit);
}


function saveScore() {

    console.log("We got to save");
    var score = document.getElementById("score");
    var name = document.getElementById("highScore");
    console.log(score.innerText);
    console.log(name.value);

}

function answerQuestion(selectedAnswer) {
    console.log(selectedAnswer);
    var userChoice = fifaQuestions[questionNumber].answers[selectedAnswer];
    console.log(userChoice);
    if (userChoice === fifaQuestions[questionNumber].correctAnswer) {
        quizScore += 25;
        score.innerHTML = quizScore;
        console.log(quizScore);
    } else {
        time -= 15;
    }
    if (questionNumber >= fifaQuestions.length - 1) {
        console.log("Ran out of questions");
        endQuiz();
    } else {
        questionNumber++;
        createQuiz();
    }


}


startButton.onclick = function () {
    startCountdown(60);
    createQuiz();
}

submitButton.onclick = function () {
    showResults();
};
