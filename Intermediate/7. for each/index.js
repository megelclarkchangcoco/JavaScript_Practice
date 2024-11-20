// forEach() = method used to iterate over the elements
//              of an array and apply a specified function to
//              each element

//              array.forEach(callback)
//              element index array are provided

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(triple);
numbers.forEach(square);
numbers.forEach(cube);
numbers.forEach(display);

function double(element, index, array){
    array[index] = element * 2;
}

function triple(element, index, array){
    array[index] = element * 3;
}

function square(element, index, array){
    array[index] = Math.pow(element, 2);
}

function cube(element, index, array){
    array[index] = Math.pow(element, 3)
}

function display(element){
    console.log(element);
}


let fruits = ["apple", "orange", "banana", "coconut"];
fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(lowerCase);
fruits.forEach(capitalize);

function upperCase(element, index, array) {
    array[index] = element.toUpperCase(); // Corrected method name
}

function lowerCase(element, index, array) {
    array[index] = element.toLowerCase(); // Corrected method name
}

function capitalize(element, index, array) {
    array[index] = element.charAt(0).toUpperCase() + element.slice(1); // Corrected method name
}

function display(element) {
    console.log(element);
}  

