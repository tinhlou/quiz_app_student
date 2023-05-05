
// === Creating the Questions

const questions = [
    {
        question: "What are your interests?",
        answer: [
            {text: "BoardGAMES", correct: true},
            {text: "Board", correct: false},
            {text: "GAMES", correct: false},
            {text: "none", correct: false}
        ]
    },
    {
        question: "Do you like Catan?",
        answer: [
            {text: "yeth", correct: true},
            {text: "not really", correct: false},
            {text: "yes", correct: false},
            {text: "no", correct: false}
        ]
    }
   
];

// Questions Array, each question is an object
// The object has 1 question and an answer array that has an object with a correct property



// === Selecting the elements / Setting Variables
const questionText = document.querySelector("#question");
const answerButtons = document.querySelector("#answer-buttons");
const nextButton = document.querySelector("#next-btn");

let index = 0;
let score = 0;


function startQuiz() {
    index = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

startQuiz();


// === Create the showQuestion function
function showQuestion() {
    clearQuestions();
    let currentQuestion = questions[index];

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.answer.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    
    
    if(answer.correct) {
        button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
    })
}

function selectAnswer(e) {
    let selected = e.target;
    let isCorrect = selected.dataset.correct === "true";
    if (isCorrect) {
        selected.classList.add("correct");
        score++;
    } else {
        selected.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
        nextButton.style.display = "block";
    })
}

function clearQuestions() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function showScore() {
    clearQuestions();
    questionText.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    index++;
    if(index < questions.length) {
        showQuestion();
    } else {     
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(index < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();