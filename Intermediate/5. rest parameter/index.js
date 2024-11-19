// rest parameter = (...rest) allow a function work with a variable
//                  number of arguments by bundling them into an array

//                   spread = expands an array into seperate elements
//                   rest = bundles seperate elements into an array

// Function to log all provided foods to the console
function openFridge(...foods) {
    console.log(foods);
}

// Function to return all provided foods as an array
function getFood(...foods) {
    return foods;   
}

const food1 = "Pizza"; // Define a food item
const food2 = "Hamburger"; // Define another food item
const food3 = "hotdog"; // Define another food item
const food4 = "sushi"; // Define another food item
const food5 = "ramen"; // Define another food item

// Call openFridge with four food items
openFridge(food1, food2, food3, food4);

// Call getFood with five food items and store the result
const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods); // Log the array of foods to the console

// Function to sum all provided numbers
function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}

// Function to calculate the average of all provided numbers
function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}

// Call getAverage with a set of numbers and store the result
const total = getAverage(75, 100, 85, 90, 50);
console.log(total); // Log the average to the console

// Function to combine multiple strings into a single string with spaces
function combineString(...string) {
    return string.join(" ");
}

// Call combineString with parts of a name and store the result
const fullName = combineString("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName); // Log the combined string to the console