// How to accept user input

// 1. easy way = window prompt
// 2. Professional way = html textbox

// instance variable name 
let username;

// document the submit button from html and use function
document.getElementById("mySubmit").onclick = function(){
    // get the value of input of text in html and restore it as a variable data
    username = document.getElementById("myText").value;
    // display the value in text in h1
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username); // print the value inputed submit
}