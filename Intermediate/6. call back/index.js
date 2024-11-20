// callback = a function that is passed as an argument to another function.
//             used to handle asynchronous operation:
//             1. Reading a file
//             2. Network request
//             3. Interacting with database

//             "Hey, when you're done, call this next"

// Call the hello function and pass the wait function as a callback
hello(wait);

// Define the hello function that takes a callback function as an argument
function hello(callback) {
    console.log("Hello!"); // Log "Hello!" to the console
    callback(); // Call the callback function
}

// Define the wait function to be used as a callback
function wait() {
    console.log("Wait!"); // Log "Wait!" to the console
}

// Define the leave function (not used in this example)
function leave() {
    console.log("Leave!"); // Log "Leave!" to the console
}

// Define the goodbye function (not used in this example)
function goodbye() {
    console.log("Goodbye!"); // Log "Goodbye!" to the console
}

// Call the sum function with displayConsole as the callback and 1, 2 as arguments
sum(displayConsole, 1, 2);

// Call the sum function with displayPage as the callback and 1, 2 as arguments
sum(displayPage, 1, 2);

// Define the sum function that takes a callback function and two numbers as arguments
function sum(callback, x, y) {
    let result = x + y; // Calculate the sum of x and y
    callback(result); // Call the callback function with the result
}

// Define the displayConsole function to log the result to the console
function displayConsole(result) {
    console.log(result); // Log the result to the console
}

// Define the displayPage function to display the result on the webpage
function displayPage(result) {
    document.getElementById("myH1").textContent = result; // Set the text content of the element with id "myH1" to the result
}