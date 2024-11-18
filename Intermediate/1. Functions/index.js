// function = a section of reusable code.
//            Declare code once, use it whenever you want.
//            call the function to execute that code.

// Function to print a birthday message
function happyBirthday(username, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log(`Happy Birthday dear ${username}`);
    console.log(`You are ${age} years old`);
}

// Calling the happyBirthday function with different arguments
happyBirthday("Miguel", 21);
happyBirthday("Liza Soberano", 26);
happyBirthday("Sydney Sweeney", 26);

// Function to add two numbers
function add(x, y){
    let result = x + y;
    return result;
}

// Function to subtract one number from another
function substractions(x, y){
    return x - y;
}

// Function to multiply two numbers
function multiply(x, y){
    return x * y;
}

// Function to divide one number by another
function divide(x, y){
    return x / y;
}

// Function to check if a number is even
function isEven(number){
    return number % 2 === 0 ? true : false;
}

// Function to check if an email is valid
function isValidEmail(email){
    return email.includes("@") ? true : false; // Fixed typo: 'incules' to 'includes'
}

// Testing the functions
console.log(add(2,3)); // Output: 5
console.log(substractions(3,2)); // Output: 1
console.log(multiply(2, 3)); // Output: 6
console.log(divide(3,2)); // Output: 1.5
console.log(isEven(10)); // Output: true

