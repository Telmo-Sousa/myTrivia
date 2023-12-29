// view.js
// This module focuses on creating and manipulating the DOM elements for displaying trivia questions and results.

// Define a module with a dependency on jQuery
define(['jquery'], function($) {
    // Return an object that exposes the following methods
    return {
        // Method to create a new DOM element with specified attributes and text
        createElement: function(element, attributes = {}, text = '') {
            // Create a new DOM element of the specified type
            const el = document.createElement(element);
            // Iterate over the attributes object and set each attribute on the element
            for (let key in attributes) {
                el.setAttribute(key, attributes[key]);
            }
            // Set the inner text of the element
            el.innerText = text;
            // Return the newly created element
            return el;
        },

        // Method to display a result in an element with id 'resultDisplay'
        displayResult: function(result) {
            // Set the text of the element with id 'resultDisplay' to the result
            $('#resultDisplay').text(result);
        },

        // Method to display a list of questions and attach a click event handler to each answer button
        displayQuestions: function(questions, checkAnswer) {
            // Get the container for the questions
            const questionContainer = $('#questionContainer');
            // Clear any existing questions from the container
            questionContainer.empty();

            // Iterate over the array of questions
            questions.forEach((question, index) => {
                // Create a new div element for the question text
                const triviaQuestion = this.createElement('div', { class: 'question' }, question.question);
                // Create a new button element for the 'True' answer
                const trueButton = this.createElement('button', { class: 'answer', 'data-correct-answer': question.correct_answer }, 'True');
                // Create a new button element for the 'False' answer
                const falseButton = this.createElement('button', { class: 'answer', 'data-correct-answer': question.correct_answer }, 'False');

                // Append the question and answer buttons to the question container
                questionContainer.append(triviaQuestion, trueButton, falseButton);

                // Attach the checkAnswer function as a click event handler to the 'True' button
                $(trueButton).on('click', checkAnswer);
                // Attach the checkAnswer function as a click event handler to the 'False' button
                $(falseButton).on('click', checkAnswer);
            });
        }
    };
});