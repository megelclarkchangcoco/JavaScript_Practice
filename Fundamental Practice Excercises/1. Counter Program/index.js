

// Get references to the buttons and the label
const presentBtn = document.getElementById("presentBtn");
const absentBtn = document.getElementById("absentBtn");
const presentCountLabel = document.getElementById("presentLabel");
const absentCountLabel = document.getElementById("absentLabel");
// initialize the count of present and absent variable
let presentCount = 0; 
let absentCount = 0;


// function to increase the count of present
presentBtn.onclick = function(){
    presentCount++;
    presentCountLabel.textContent = presentCount;
}

// function to increase the count of absent
absentBtn.onclick = function(){
    absentCount++;
    absentCountLabel.textContent = absentCount;
}