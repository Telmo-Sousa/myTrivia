// controller.js
// This module primarily handles user interactions and controls the flow of the trivia game.

// Define a module with dependencies on 'services', 'view', and 'jquery'
define(['services', 'view', 'jquery'], function(Services, View, $) {
    // Get the button for fetching new trivia questions
    const newCategoryBtn = $('#newCategoryBtn');
    // Initialize a counter for the user's points
    let points = 0;

    // Attach a click event handler to the new category button
    newCategoryBtn.on('click', async() => {
        // Fetch a new trivia question
        const triviaQuestions = await Services.fetchTrueFalseTrivia(1);
        // Display the new trivia question
        View.displayQuestions(triviaQuestions, checkAnswer);
        // Reset the result display when fetching new questions
        resetResultDisplay();
    });

    // Function to clear the result display
    function resetResultDisplay() {
        $('#resultDisplay').text('');
    }

    // Function to check the user's answer
    function checkAnswer(event) {
        // Get the correct answer from the clicked button's data attributes
        const selectedAnswer = $(event.target).data('correct-answer');
        // Get the user's answer from the clicked button's text
        const userAnswer = $(event.target).text();

        // If the user's answer is correct
        if (userAnswer === selectedAnswer) {
            // Display 'CORRECT' in the result display
            View.displayResult('CORRECT');
            // Increment the user's points
            updatePoints(1);
            // If the user's answer is incorrect
        } else {
            // Display 'WRONG' in the result display
            View.displayResult('WRONG');
        }

        // Get all the answer buttons
        const answerButtons = $('.answer');
        // Remove the click event listener from the answer buttons
        answerButtons.off('click', checkAnswer);
        // Disable the answer buttons
        answerButtons.attr('disabled', true);
    }

    // Function to update the user's points
    function updatePoints(value) {
        // Increment the user's points by the specified value
        points += value;
        // Display the user's points
        $('#pointsDisplay').text(`Points: ${points}`);
    }
});