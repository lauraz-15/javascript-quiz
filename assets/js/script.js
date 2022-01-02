// answers in an array of objects;

let questions = [
    {
        question: "Why so JavaScript and Java have similar name",
        answerA: "JavaScript is a stripped-down version of Java",
        anwswerB: "JavaScript's syntax is loosely based on Java's",
        answerC:  "They both originated on the island of Java",
        answerD: "None of the above",
        correct: "B"
    },
    {
        question: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
        answerA: "The User's machine running a Web browser",
        answerB: "The Web server",
        answerC:  "A central machine deep within Netscape's corporate offices",
        answerD: "None of the above",
        correct: "A"
    },
    {
        question: "______ JavaScript is also called client-side JavaScript.",
        answerA: "Microsoft",
        answerB: "Navigator",
        answerC:  "LiveWire",
        answerD: "Native",
        correct: "B"
    },
    {
        question: "__________ JavaScript is also called server-side JavaScript.",
        answerA: "A. Microsoft",
        answerB: "Navigator",
        answerC:  "LiveWire",
        answerD: "Native",
        correct: "C"
    },
    {
        question: "_____ JavaScript statements embedded in an HTML page can respond to user events such as mouse-clicks, form input, and page navigation.",
        answerA: "Client-side",
        answerB: "Server-side",
        answerC:  "Local",
        answerD: "Native",
        correct: "A"
    },
    {
        question: "What are variables used for in JavaScript Programs?",
        answerA: "Storing numbers, dates, or other values",
        answerB: "Varying randomly",
        answerC:  "Causing high-school algebra flashbacks",
        answerD: "None of the above",
        correct: "A"
    },
    {
        question: "Which of the following can't be done with client-side JavaScript?",
        answerA: "Validating a form",
        answerB: "Sending a form's contents by email",
        answerC: "Storing the form's contents to a database file on the server",
        answerD: "None of the above",
        correct: "C"
    },
    {
        question: "Which of the following are capabilities of functions in JavaScript?",
        answerA: "Return a value",
        answerB: "Accept parameters and Return a value",
        answerC:  "Accept parameters",
        answerD: "None of the above",
        correct: "C"
    },
    {
        question: "Which of the following is not a valid JavaScript variable name?",
        answerA: "2names",
        answerB: "_first_and_last_names",
        answerC:  "FirstAndLast",
        answerD: "None of the above",
        correct: "A"
    },
    {
        question: "______ tag is an extension to HTML that can enclose any number of JavaScript statements.",
        answerA: "<script>",
        answerB: "<body>",
        answerC:  "<head>",
        answerD: "<title",
        correct: "A"
    },
    {
        question: "How does JavaScript store dates in a date object?",
        answerA: "The number of milliseconds since January 1st, 1970",
        answerB: "The number of days since January 1st, 1900",
        answerC: "The number of seconds since Netscape's public stock offering.",
        answerD: "None of the above",
        correct: "A"
    }

]

// Load page and start the event listeners

document.addEventListener("DOMContentLoaded", function() {
    let button = document.getElementById("start-btn")

    button.addEventListener("click", function() {
        runGame()
    })
})

// check if user has clicked START button, if so, then start the game

function runGame() {
    console.log("Star game function is running")
    
// get random question 
    //get random number
    let randomNumber = Math.floor(Math.random() * questions.length);
    console.log(`The random number for the q array is ${randomNumber}`)

    // get question using the random number
    let randomQuestion = questions[randomNumber]
    console.log(randomQuestion);

    // displays question and answers to the user
    let objectKeys = Object.keys(randomQuestion)
    let objectValues = Object.values(randomQuestion)
    console.log(`The question picked is: ${objectKeys}`);
    console.log(`The question picked is: ${objectValues[0]}`);
    console.log(`The answer A is: ${objectValues[1]}`);
    console.log(`The answer B is: ${objectValues[2]}`);
    console.log(`The answer C is: ${objectValues[3]}`);
    console.log(`The answer D is: ${objectValues[4]}`);
    console.log(`The correct answer is: ${objectValues[5]}`);

   
    document.getElementById("question").textContent = objectValues[0];
    document.getElementById("answer-a").textContent = objectValues[1]; 
    document.getElementById("answer-b").textContent = objectValues[2]; 
    document.getElementById("answer-c").textContent = objectValues[3]; 
    document.getElementById("answer-d").textContent = objectValues[4];   



// 2. update the question counter (1/30 etc)
// 3. clear the previous score and set to 0;

}
// function showQuestion 
// - Pick random question out of the question array and display to the user

// function checkAnswer
// -listen to the users choice
// -change the background of the correct & incorrect answers
// -compare users choice to the correct answer(if correct update score)

// function nextQuestion 
// - listen to users action to press the NEXT Q button
// - check the question counter, if number is less than 30 then call shoqQuestion function
// - uodate question counter ++

// function dipslayGameResults
// -didpsly massive banner, and depending on the score tex explaining the level
// add button: "Pay again" - call startGame function


