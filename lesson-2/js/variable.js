/* STEP 1: Declare variables
Use a-z, 0-9, A-Z and underscores, avoiding reserved names
All program variables are generally declared at the beginning */
let myName;
let myAge;

/* STEP 2: Initialize variables
Don't confuse a variable with no value with one that doesn't exist at all */
myName = "John Doe"; // String
myAge = 18;

/* STEP 3: Updating variables
Once a variable has been declared, this can be done any time */
myName = "Jane Doe";

// STEP 4: Variable types (use typeof in the console)
// Numbers
let numCars = 5; // Integer
// Strings (use '' or "")
let myString = "Hello, world!"; // String
let fruits = `I have ${5} fruits`; // have ot use backtick ` to do string interpolation
// Booleans
let isTrue = true; // Boolean
// Arrays
let myArray = [1, 2, 3, 4, 5]; // Array
// Objects
let myDog = {
    name: "Buddy",
    age: 3,
    breed: "Golden Retriever"
}
// STEP 5: Typing (JavaScript is a loosely-typed language)
