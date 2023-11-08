let userAge = 25; //Variables: Variables are used to store data

let sum = 5 + 3; // sum is now 8   //Operators: Operators are used for operations

//Conditions (if, else, switch)
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
} 

//Loops (for, while)
for (let i = 0; i < 5; i++) {
    console.log("Iteration " + i);
}

//Functions: Functions are reusable blocks of code
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice"); // Outputs: "Hello, Alice!"

//Events: Events allow you to respond to user interactions
const myButton = document.getElementById("myButton");
myButton.addEventListener("click", function() {
    console.log("Button clicked!");
});

//Classes and Objects: You can use classes to create objects and organize your code.
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        console.log("Hi, I'm " + this.name + " and I'm " + this.age + " years old.");
    }
}

const person1 = new Person("John", 30);
person1.introduce(); // Outputs: "Hi, I'm John and I'm 30 years old."
