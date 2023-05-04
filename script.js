
// === Creating the Questions
// 1. Create a questions variable that has an array of questions
// 2. In each index put an object that has a question:string for its key:value pair
// 3. In that same object have a 2nd property for answers:array for its key:value pair
// 4. The answers array should have 1 object for each answer
// 5. The object should have 1 text property and 1 correct property, only 1 answer should be true, the others should be false

// Questions Array, each question is an object
// The object has 1 question and an answer array that has an object with a correct property



// === Selecting the elements / Setting Variables
// 6. Query selector for the question div, save this in a questionText variable
// 7. Query selector for the answer-buttons div, save this in a answerButtons variable
// 8. Query selector for the nextButton div, save this in a nextButton variable
// 9. Create an index and score variable with the values of 0



// === Create startQuiz Function
// 10. Have it reset the index and score to 0
// 11. Update the nextButton.innerHTML to "Next"
// 12. Call on the showQuestion function
// 0. Call on start quiz



// === Create the showQuestion function
// 13. Create a currentQuestion variable set to the index var in the questions array
// 14. Update the questionText.innerHTML to your currentQuestion.question
// 15. Loop through the currentQuestion.answers
// 16. Each time: Create a new button element, set the button's innerHTML to answer.text, add a class btn using button.classList.add("btn"); Now answerButtons.appendChild(button)
// 17. add an event listener to the button for "click", selectAnswer
// 18. add an if statement for answer.correct then button.dataset.correct = answer.correct



// === Create Select Answer function with parameter e
// 19. Set var selected = e.target
// 20.Set var isCorrect = selected.dataset.correct === "true"
// 21. Create if statemetn if isCorrect then selected.classList.add("correct") and score++; else selected.classList.add("incorrect")
// 22. Build an array using Array.from(answerButtons.children)
// 23. With that array use a for each method to add the class "correct" if the button.dataset.correct === "true"
// 24. set button.disabled = true
// 25. set nextButton.style.display = "block"



// === Create clearQuestions function
// 26. nextButton.getElementsByClassName.display = "none"
// 27. while(answerButtons.firstChild) {answerButtons.removeChild(answerButtons.firstChild);}



// === Create showScore function
// 28. Run clearQuestions
// 29. Set questionText.innerHTML to how many points out of  how many questions there are
// 30. Set nextButton.innerHTML = "Play Again"
// 31. Set nextButton.style.display = "block"
// Shows the score after the last question and updates Next button to play again

// === Create handleNextButton function
// 32. Update the index by 1
// 33. if index is less than questions.length showQuestion else showScore


// === Create nextButton Event Listener on click
// 34. if index is less than questions.length then handleNextButton else startQuiz