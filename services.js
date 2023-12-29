// services.js
// This module is responsible for interacting with an external API to fetch trivia data.

// Define a module with no dependencies
define(function() {
    // Return an object that exposes the following method
    return {
        // Method to fetch trivia data from an API
        fetchTrueFalseTrivia: async function(amount = 10) {
            // Try to execute the following code
            try {
                // Fetch data from the API using the provided
                const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&type=boolean`);
                // Parse the response as JSON
                const data = await response.json();
                // Return the results from the data
                return data.results;
                // If an error occurs during the execution of the try block
            } catch (error) {
                // Log the error to the console
                console.error('Error fetching trivia data:', error);
                // Return an empty array
                return [];
            }
        }
    };
});