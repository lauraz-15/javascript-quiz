
let questions = [
    {
        question: "Why does JavaScript and Java have similar name",
        answerA: "JavaScript is a stripped-down version of Java",
        anwswerB: "JavaScript's syntax is loosely based on Java's",
        answerC:  "They both originated on the island of Java",
        answerD: "None of the above",
        correct: "answer-b"
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answerA: "The User's machine running a Web browser",
        answerB: "The Web server",
        answerC:  "A central machine deep within Netscape's corporate offices",
        answerD: "None of the above",
        correct: "answer-a"
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answerA: "Microsoft",
        answerB: "Navigator",
        answerC:  "LiveWire",
        answerD: "Native",
        correct: "answer-b"
    },
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        answerA: "Microsoft",
        answerB: "Navigator",
        answerC:  "LiveWire",
        answerD: "Native",
        correct: "answer-c"
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answerA: "Client-side",
        answerB: "Server-side",
        answerC:  "Local",
        answerD: "Native",
        correct: "answer-a"
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answerA: "Storing numbers, dates, or other values",
        answerB: "Varying randomly",
        answerC:  "Causing high-school algebra flashbacks",
        answerD: "None of the above",
        correct: "answer-a"
    },
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answerA: "Validating a form",
        answerB: "Sending a form's contents by email",
        answerC: "Storing the form's contents to a database file on the server",
        answerD: "None of the above",
        correct: "answer-c"
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answerA: "Return a value",
        answerB: "Accept parameters and Return a value",
        answerC:  "Accept parameters",
        answerD: "None of the above",
        correct: "answer-c"
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answerA: "2names",
        answerB: "_first_and_last_names",
        answerC:  "FirstAndLast",
        answerD: "None of the above",
        correct: "answer-d"
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        answerA: "<script>",
        answerB: "<body>",
        answerC:  "<head>",
        answerD: "<title",
        correct: "answer-a"
    },
    {
        question: "How does JavaScript store dates in a date object?",
        answerA: "The number of milliseconds since January 1st, 1970",
        answerB: "The number of days since January 1st, 1900",
        answerC: "The number of seconds since Netscape's public stock offering.",
        answerD: "None of the above",
        correct: "answer-a"
    }

]

const question = document.getElementById("question");
const answerA = document.getElementById("answer-a");
const answerB = document.getElementById("answer-b");
const answerC = document.getElementById("answer-c");
const answerD = document.getElementById("answer-d");
const scoreArea = document.getElementById("score");
const questionCounter = document.getElementById("q-counter");

let score = 0
let currentQuestion = {}
let counter = 0
let questionsArray = [];
const maxQuestions = 30;
const correctScore = 100;

let correctAnswer
let answersElements = document.getElementsByClassName("answers")



/**
 * Load page and start the event listeners for the start button
 * If pressed, then call runGame function
 */

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("start-btn")
    button.addEventListener("click", function() {
       runGame();
    })
})

/**
 * Hide the rules and the start button
 * And insert random question
 * Display the game panenel and add questions
 * Add next button and check userš answer
 */

 function runGame() {

    let rules = document.getElementById("rules");
    rules.remove();
  
    let startButton = document.getElementById("start-btn");
    startButton.remove();

    score = 0;
    counter = 0;
    questionsArray = [...questions];

    getQuestion()
    displayGameArea(currentQuestion);

}


function getQuestion() {
    if (counter > 30 ) {
        localStorage.setItem('latestScore', score)

        return window.location.assign('end/html');
    }

    counter++
    questionCounter.innerText = `Question: ${counter}/${maxQuestions}`;
}

/**
 * Get random number and pick random question using the number.
 */

function getQuestionArray() {

    for ( let i = 1; i <= 30; i ++) {
        let randomNumber = Math.floor(Math.random() * questions.length);
        let randomQuestion = questions[randomNumber]
        questionsArray.push(randomQuestion);
    }
    return questionsArray;
}

function getQuestion(questionsArray) {

    let randomQuestion = questionsArray[counter];
    let objectValues = Object.values(randomQuestion)
    currentQuestion = objectValues;
}


/**
 * Display the game panel
 * And insert random question
 */

function displayGameArea(currentQuestion) {

    currentQuestion = getQuestion();

    let gameArea = document.createElement("div");

    let html = `<div id="container">
    <p>Score: <span id="score">0</span> JS Coins</p>
    <div id="q-area">
    <p id="question">${currentQuestion["question"]}</p>

    <div class="answers-container">
    <p id="answer-a" class="answers">${currentQuestion["answerA"]}</p>
   <p id="answer-b" class="answers">${currentQuestion["answerB"]}</p>
   <p id="answer-c" class="answers">${currentQuestion["answerC"]}</p>
    <p id="answer-d" class="answers">${currentQuestion["answerD"]}</p>
    </div>
    </div>
    <p id="q-counter">Question 0/30</p>
    </div>`

    gameArea.innerHTML = html; 
    let gamePanel = document.getElementById("game-panel"); 
    gamePanel.appendChild(gameArea)

    let correctAnswer = currentQuestion["correct"];
    console.log(`The correct answer is: ${correctAnswer}`);

    return gameArea
}



/**
 * Listen to user's choice and compare it with the correct answer
 * Update the score if correct answer +100
 * Add green background if correct answer slected
 * Add red background if the incorrect answer selected
 */

function checkAnswer() {
    
    let answers = document.getElementsByClassName("answers");
    let correctAnswer = objectValues[5];

    for (let answer of answers) {
        answer.addEventListener("click", function(e) {
        let usersChoice = this.id;
      
        if (usersChoice === correctAnswer) {
            let score = document.getElementById("score")
            let num = parseInt(score.innerHTML);
            score.innerHTML = num += 100
           
            console.log("User selected the correct answer!")
            answer.classList.add("correct-answer")

            // for (let answer of answers) {
            //     answer.removeEventListener("click")
            // }

            nextQuestion();
            counter += 1;
            console.log(`The new counter is: ${counter}`);
               
        } else if (usersChoice !== correctAnswer) {
            console.log("user answered incorreclty!")
            answer.classList.add("wrong-answer")
            nextQuestion();
    
        }     
        })
    }   
}       


/**
 * Add next button to the game panel
 */


function addNextButton() {
    let nextButton = document.createElement("button")
    nextButton.id = "next-btn";

    let html = "Next Question"
   
    nextButton.innerHTML = html
    
    let myDiv = document.getElementById("container")
    myDiv.appendChild(nextButton);
}


/**
 * Listen to event wgen user clicks the button
 * Get next question
 * Update the question counter
 */

function nextQuestion() {
    
    let nextBtn = document.getElementById("next-btn")
    nextBtn.addEventListener("click", function(e) {;

        getQuestion();
        displayGameArea(currentQuestion);

    let questionCounter = document.getElementById("q-counter");
    let updateCounter = "Question " + ++increasedCount + "/" + --totalQuestions
    questionCounter.innerHTML = updateCounter   
        
    })  
}

/**
 * Cehck users score
 * Display banner, preneting message according to the score
 * display "new game" button
 */

function EndGame() {
    let gameArea = displayGameArea();
    let gamePanel = document.getElementById("game-panel");
    gamePanel.removeChild(gameArea);

    let score = document.getElementById("score")
    score = score.textContent   
    console.log("End game is connected")
    console.log(`Curretnt score is: ${score}`);

    let endGamepanel = document.createElement("div");

    endGamepanel.id = "end-game"

    html = `<h2>Congratulations, you have answered all 30 questions, your current score is: ${score}</h2>
       <button id="start-btn">START</button>`
    endGamepanel.innerHTML = html;
    gamePanel.appendChild(endGamepanel);
}