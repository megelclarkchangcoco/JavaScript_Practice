// const (constant) = a variable that can't be changed

const pi = 3.14159; // Define the constant value of pi
let radius; // Declare a variable for the radius
let circumference; // Declare a variable for the circumference

// Add an event listener to the button for the 'click' event
document.getElementById("mySubmit").onclick = function(){
   // Get the value from the input field and convert it to a number
   radius = document.getElementById("myText").value;
   radius = Number(radius);
   
   // Calculate the circumference of the circle
   circumference = 2 * pi * radius;
   
   // Display the calculated circumference in the <h3> element
   document.getElementById("myH3").textContent = circumference + "cm";
}