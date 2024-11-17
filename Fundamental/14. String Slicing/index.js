// String slicing = creating a substring
//                  from a portion of another string
//                  string.slice(start, end)

const fullName = "Miguel Pogi";
const email = "miguel@gmail.com";

// Extract the username from the email
let username = email.slice(0, email.indexOf("@"));
// Extract the domain from the email
let extension = email.slice(email.indexOf("@") + 1);

// Extract the first name from the full name
let firstName = fullName.slice(0, 6);
// Extract the last name from the full name
let lastName = fullName.slice(7, 11);
// Extract the first character of the full name
let firstChar = fullName.slice(0, 1);
// Extract the last character of the full name
let lastChar = fullName.slice(-1);
// Extract the first word of the full name
let withIndex = fullName.slice(0, fullName.indexOf(" "));
// Extract the second word of the full name
let withNegativeIndex = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName); // Logs: Miguel
console.log(lastName); // Logs: Pogi
console.log(firstChar); // Logs: M
console.log(lastChar); // Logs: i
console.log(withIndex); // Logs: Miguel
console.log(withNegativeIndex); // Logs: Pogi
console.log(username); // Logs: miguel
console.log(extension); // Logs: gmail.com
