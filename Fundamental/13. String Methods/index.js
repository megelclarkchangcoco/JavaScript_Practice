// String methods allow you to manipulate and work with text (strings)

let username = "miguel pogi ";

// Check if the username starts or ends with a space
let result = username.startsWith(" ");
let resultEnd = username.endsWith(" ");
let phoneNumber = "123-456-7890";

// Trim spaces from the beginning and end of the username
username = username.trim();
// Convert username to lowercase
let username1 = username.toLowerCase();
// Convert username to uppercase
let username2 = username.toUpperCase();
// Repeat the username 3 times
let usernameR = username.repeat(3);

// Log the index of the first occurrence of 'g'
console.log(username.indexOf("g"));
// Log the index of the last occurrence of 'l'
console.log(username.lastIndexOf("l"));
// Log the character at index 0
console.log(username.charAt(0));
// Log the length of the username
console.log(username.length);
// Log the trimmed username
console.log(username);
// Log the username in uppercase
console.log(username2);
// Log the repeated username
console.log(usernameR);

// Check if the username starts with a space and log a message
if(result){
    console.log("Your username can't include ' ' ");
} else {
    console.log(username);
}

// Check if the username ends with a space and log a message
if(resultEnd){
    console.log("Your username can't begin with ' ' ");
} else {
    console.log(username);
}

// Replace all dashes in the phone number with an empty string
console.log(phoneNumber.replaceAll("-", ""));
