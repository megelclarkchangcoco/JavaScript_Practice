// DICE ROLLER PROGRAM

function rollDice(){
    // Get the number of dice to roll from the input field
    const numOfDice = document.getElementById("numOfDice").value;
    
    // Get the elements to display the result and images
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    
    // Arrays to store the values and images of the dice
    const values = [];
    const images = [];

    // Loop through the number of dice to roll
    for(let i = 0; i < numOfDice; i++){
        // Generate a random number between 1 and 6 for each die
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        
        // Placeholder for dice images (you can add image paths here)
        images.push(``);
    }

    // Display the result of the dice roll
    diceResult.textContent = `dice : ${values.join(', ')}`;
    
    // Display the dice images (currently empty)
    diceImages.innerHTML = images.join('');
}