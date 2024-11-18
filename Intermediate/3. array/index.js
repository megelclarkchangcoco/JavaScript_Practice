// array = a variable like struvture that can hold more than 1 value

const fruits = ["apple", "coconut", "orange", "banana"];
// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango");

// fruits.push = "coconut";
// fruits.pop();
// fruits.unshift("mango");
// fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(numOfFruits);
// console.log(index);

// Loop through the array using a traditional for loop
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // Log each fruit to the console
}

// Loop through the array using a for...of loop
for (let fruit of fruits) {
    console.log(fruit); // Log each fruit to the console
}

// Sort the array in alphabetical order and then reverse it
console.log(fruits.sort().reverse()); // Log the sorted and reversed array

