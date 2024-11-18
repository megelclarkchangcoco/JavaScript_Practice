 // Temperature Conversion

 // Get references to the HTML elements
 const textBox = document.getElementById("textBox");
 const toFahrenheit = document.getElementById("toFahrenheit");
 const toCelcius = document.getElementById("toCelcius")
 const result = document.getElementById("result");
 let temp; // Variable to store the temperature value

 // Function to convert temperature based on selected unit
 function convert(){
    // check if the textbox has a value
    if(textBox.value === " "){
        result.textContent = "Please enter a temperature value";
        return; // exit the function if no value is entered
    }

    // check if the Fahrenheit radio button is selected
    if(toFahrenheit.checked){
        temp = Number(textBox.value); // convert input value to a number
        temp = temp * 9 / 5 + 32; // Convert Celsius to Fahrenheit
        result.textContent = temp.toFixed(1) + "°F"; // Display the result
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value); // convert input value to a numbe
        temp = (temp - 32) * (5 / 9); // Convert Fahrenheit to Celcius
        result.textContent = temp.toFixed(1) + "°C"; // Display the result
    }
    else{
        // If neither radio button is selected, display an error message
        result.textContent = "Select a unit";
    }

 }