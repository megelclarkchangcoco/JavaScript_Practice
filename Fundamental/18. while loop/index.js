// while loop = repeat some code WHILE some condition is true

let gender; // Declare the gender variable
let tryAgain; // Declare the tryAgain variable

do {
    // Prompt the user to enter their gender ('G' for girl or 'B' for boy)
    gender = window.prompt("Enter your gender ('G' for girl or 'B' for boy)");
    
    // Check the input and print the appropriate message
    if (gender == "G") {
        console.log("You are a Girl"); // If the input is 'G', print "You are a Girl"
    } else if (gender == "B") {
        console.log("You are a Boy"); // If the input is 'B', print "You are a Boy"
    } else {
        console.log("Invalid input. Please enter 'G' or 'B'."); // If the input is neither 'G' nor 'B', print an error message
    }

    // Ask the user if they want to input again
    tryAgain = window.prompt("Do you want to input again? (yes/no)");
    
} while (tryAgain.toLowerCase() === "yes"); // Continue the loop if the user wants to input again
