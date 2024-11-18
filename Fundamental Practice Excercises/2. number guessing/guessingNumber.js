// Number guessing game

const minNum = 1;
const maxNum = 10;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempts = 0;
let guess; 
let running = true;

while (running) {
    // Prompt the user to guess a number
    guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
    guess = Number(guess);

    // Check if the input is a valid number
    if (isNaN(guess)) {
        window.alert("Please enter a valid number");
    } 
    // Check if the guess is within the valid range
    else if (guess < minNum || guess > maxNum) {
        window.alert("Please enter a valid number");
    } 
    else {
        attempts++;
        // Check if the guess is too low
        if (guess < answer) {
            window.alert("Too low");
        } 
        // Check if the guess is too high
        else if (guess > answer) {
            window.alert("Too high");
        } 
        // Correct guess
        else {
            window.alert(`Correct! The answer was ${answer}. It took you ${attempts} attempts.`);
            running = false; // Stop the loop
        }
    }
}
