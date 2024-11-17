// Method Chaining = Calling one method after another
//                   in one continuous line of code.

let username = window.prompt("Enter your username");

// ----------- NO METHOD CHAINING -------------------

// Trim spaces from the beginning and end of the username
username = username.trim();
// Get the first character of the username
let letter = username.charAt(0);
// Convert the first character to uppercase
letter = letter.toUpperCase();

// Get the rest of the username starting from the second character
let extraChars = username.slice(1);
// Convert the rest of the username to lowercase
extraChars = extraChars.toLowerCase();

// Combine the uppercase first character with the rest of the username
username = letter + extraChars;

console.log(username); // Logs the formatted username

// ------------ METHOD CHAINING ---------------------

// Trim spaces, get the first character, convert to uppercase, 
// get the rest of the username, convert to lowercase, and combine
username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();
console.log(username); // Logs the formatted username
