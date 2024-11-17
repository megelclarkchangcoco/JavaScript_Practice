// String slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)


const fullName = "Miguel Pogi";
const email = "miguel@gmail.com"

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

let firstName = fullName.slice(0,6);
let lastName = fullName.slice(7, 11);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-1);
let withIndex = fullName.slice(0, fullName.indexOf(" "));
let withNegativeIndex = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
console.log(withIndex);
console.log(withNegativeIndex);
console.log(username);
console.log(extension);