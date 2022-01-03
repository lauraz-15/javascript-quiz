
 

// function nextQuestion 
// - listen to users action to press the NEXT Q button
// - check the question counter, if number is less than 30 then call shoqQuestion function
// - uodate question counter ++

// function dipslayGameResults
// -didpsly massive banner, and depending on the score tex explaining the level
// add button: "Pay again" - call startGame function



// answers in an array of objects;

let questions = [
    {
        question: "Why so JavaScript and Java have similar name",
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
        answerA: "A. Microsoft",
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
        correct: "answer-a"
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

// Load page and start the event listeners

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("start-btn")

    button.addEventListener("click", function() {
        getQuestion();
        checkAnswer();
    })
})

// function runGame() {
//     // 3. clear the previous score and set to 0;
    
//     // get random question 
//     getQuestion();
// }

// check if user has clicked START button, if so, then start the game

function getQuestion() {

    //get random number
    let randomNumber = Math.floor(Math.random() * questions.length);

    // get question using the random number
    let randomQuestion = questions[randomNumber]

    // displays question and answers to the user
    let objectValues = Object.values(randomQuestion)
    // // log Object values to the Console
    // console.log(`The question picked is: ${objectValues[0]}`);
    // console.log(`The answer A is: ${objectValues[1]}`);
    // console.log(`The answer B is: ${objectValues[2]}`);
    // console.log(`The answer C is: ${objectValues[3]}`);
    // console.log(`The answer D is: ${objectValues[4]}`);
    // console.log(`The correct answer is: ${objectValues[5]}`);
    let correctAnswer = objectValues[5];
   
    // console.log(`The correct answer is: ${correctAnswer}`);

    document.getElementById("question").textContent = objectValues[0];
    document.getElementById("answer-a").textContent = objectValues[1]; 
    document.getElementById("answer-b").textContent = objectValues[2]; 
    document.getElementById("answer-c").textContent = objectValues[3]; 
    document.getElementById("answer-d").textContent = objectValues[4];   

    // 2. update the question counter (1/30 etc)
    document.getElementById("q-counter").textContent = `Question ${+ 1}/30`;
    return correctAnswer;
}

let correctAnswer = getQuestion();
console.log(`The correct answer is: ${correctAnswer}`);

function displayColors() {
    let correctAnswer =  document.getElementsById("answer-a")
    correctAnswer.addClass = ".correct-answer"
}

function checkAnswer() {
    console.log("We are checing the snwers and listenign to answers!")
   
     // listen to the users choice
    
    let answers = document.getElementsByClassName("answers");

    for (let answer of answers) {
        answer.addEventListener("click", function(e) {

          // compare users choice to the correct answer(if correct print to console
        let usersChoice = this.id;
        console.log(`Users choice is: ${usersChoice}`);
        if (usersChoice === correctAnswer) {
            // Add colors to answers accordingly
            // Update the score
            let score = document.getElementById("score")
            score.innerHTML =+ 1
            // Play cash/positive sound
            console.log("User selected the correct answer!")
        } else {
             // Add colors to answers accordingly
            // Play cash/negative sound
            console.log("user answered incorreclty!")
        } 
        })
    } 

 let nextButton = document.createElement("button")

 let html = `<button id="next-btn">Next Question</button>`

 nextButton.innerHTML = html
 
 let myDiv = document.getElementById("container")
myDiv.appendChild(nextButton);

}       

