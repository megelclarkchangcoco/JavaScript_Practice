// Counter Program

// Get references to the buttons and the label
const decreaseBtn = document.getElementById("decreasedBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increasedBtn");
const countLabel = document.getElementById("countLabel");
let count = 0; // Initialize the count variable

// Function to increase the count
increaseBtn.onclick = function(){
    count++; // Increment the count
    countLabel.textContent = count; // Update the label with the new count
}

// Function to reset the count
resetBtn.onclick = function(){
    count = 0; // Reset the count to 0
    countLabel.textContent = count; // Update the label with the new count
}

// Function to decrease the count
decreaseBtn.onclick = function(){
    count--; // Decrement the count
    countLabel.textContent = count; // Update the label with the new count
}