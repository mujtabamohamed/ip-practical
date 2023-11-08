/*Error Handling: JavaScript provides error-handling mechanisms,
including try...catch blocks, to handle exceptions gracefully. */

try {
    let result = x / y;
    console.log(result);
} catch (error) {
    console.error("An error occurred: " + error.message);
}

// Validations: You can use JavaScript to validate user input in forms

function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}

//Arrays: JavaScript arrays allow you to store and manipulate lists of data.

let fruits = ["apple", "banana", "cherry"];
fruits.push("date"); // Add an element
fruits.forEach(fruit => console.log(fruit)); // Iterate through the array

//Strings: JavaScript provides various methods for manipulating strings

let greeting = "Hello";
let name = "Alice";
let message = greeting + ", " + name + "!";
console.log(message); // Outputs: "Hello, Alice!"

//Date: Working with dates and times is essential for many interactive web applications.

let currentDate = new Date();
console.log(currentDate.toLocaleString()); // Display current date and time