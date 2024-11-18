// spread operator = ... allows an iterable such as an 
//                   array or string to be expanded
//                   into seperate elements
//                   (unpacks the elements)


let numbers = [1, 2, 3, 4, 5]; // Array of numbers

// Find the maximum number in the array
let maxNum = Math.max(...numbers);

// Find the minimum number in the array
let minNum = Math.min(...numbers);

console.log(maxNum); // Log the maximum number to the console
console.log(minNum); // Log the minimum number to the console

let username = "Miguel Pogi"; // String containing a username

// Spread the string into an array of characters and join them with hyphens
let letters = [...username].join("-");

console.log(letters); // Log the modified string to the console

let fruits = ["apple", "banana", "coconut", "orange"]; // Array of fruits
let vegtable = ["carrots", "potatoes", "lettuces"]; // Array of vegetables

// Combine the fruits and vegetables arrays and join them with hyphens
let fruit = [...fruits, ...vegtable].join("-");

console.log(fruit); // Log the combined and modified array to the console