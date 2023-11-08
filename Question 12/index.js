//push() - Adds one or more elements to the end of an array and returns the new length.

let fruits = ['apple', 'banana'];
fruits.push('cherry', 'date'); // fruits is now ['apple', 'banana', 'cherry', 'date']


//pop() - Removes the last element from an array and returns that element.

let fruits = ['apple', 'banana', 'cherry'];
let lastFruit = fruits.pop(); // lastFruit is 'cherry', and fruits is ['apple', 'banana']


//unshift() - Adds one or more elements to the beginning of an array and returns the new length.

let fruits = ['banana', 'cherry'];
fruits.unshift('apple', 'date'); // fruits is now ['apple', 'date', 'banana', 'cherry']


//shift() - Removes the first element from an array and returns that element.

let fruits = ['apple', 'banana', 'cherry'];
let firstFruit = fruits.shift(); // firstFruit is 'apple', and fruits is ['banana', 'cherry']


//concat() - Combines two or more arrays and returns a new array.

let fruits = ['apple', 'banana'];
let moreFruits = ['cherry', 'date'];
let combined = fruits.concat(moreFruits); // combined is ['apple', 'banana', 'cherry', 'date']


//slice() - Returns a shallow copy of a portion of an array into a new array object.

let fruits = ['apple', 'banana', 'cherry', 'date'];
let subArray = fruits.slice(1, 3); // subArray is ['banana', 'cherry']


//filter() - Creates a new array with all elements that pass the test implemented by the provided function.

let numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
}); // evenNumbers is [2, 4]