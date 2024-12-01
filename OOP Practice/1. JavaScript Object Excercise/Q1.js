// Reverse a String:
// Write a function reverseString that takes a string as input and returns 
// the string reversed

const outputs = document.getElementById('output1');

function reverseString(str) {
    const h1 = document.createElement('h1');
    h1.textContent = str.split("").reverse().join("");
    outputs.appendChild(h1);
}

// Example usage:
reverseString("hello");