// for loop = repeat some code a limited amount of times

const cars = ["Ferrari", "Mercedes", "Alpha Romeo", "Alphatauri"];
const demo = document.getElementById("demo");
let text = ""; // Initialize text as an empty string

for (let i = 0; i < cars.length; i++) { // Loop through the cars array
    text += cars[i] + " "; // Append each car name to text with a space
    demo.textContent = text; // Update the text content of the demo element
}

const demo2 = document.getElementById("demo2");
let asterisk = "*"; // Corrected spelling of 'asterisk'
let text2 = "";

// Outer loop to control the number of lines
for (let i = 0; i < 5; i++) { // Adjust the condition to control the number of lines
    // Inner loop to add asterisks
    for (let j = 0; j <= i; j++) { // Corrected condition to add asterisks
        text2 += asterisk + " "; // Add an asterisk followed by a space
    }
    text2 += "\n"; // Add a newline character after each line
}

// Set the text content of the demo2 element
console.log(text2);