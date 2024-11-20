// .map() = accepts to callback and applies that function
//          to each element of an array, then return a new array


const numbers = [1,2,3,4,5];

const square = numbers.map(square);

console.log(squares);
console.log(cubes);


function square(element){
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}