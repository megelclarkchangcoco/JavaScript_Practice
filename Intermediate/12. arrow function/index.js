// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                   (parameters) => some code


// function hello(){
//     console.log("Hello Migs");
// }

// hello();

// const hello = function(){
//     console.log("Hello");
// }

// hello(); 

const hello = (name, age) => {console.log(`Hello ${name}`)
                             console.log(`you are ${age} old`)};
hello("Migs", 21);

setTimeout(function hi(){
    console.log("Hi");
}, 3000);

setTimeout( () => console.log("hello"), 3000);

const numbers = [1,2,3,4,5,6];

const sqaures = numbers.map((element) => Math.pow(element, 2));
const cubes = numbers.map((element) => Math.pow(element, 3));
const isEven = numbers.filter((element) => element % 2 === 0);
const isOdd = numbers.filter((element) => element % 2 !== 0);
const total = numbers.reduce((accumulator, element) => accumulator + element);
console.log(sqaures);
console.log(cubes);
console.log(isEven);
console.log(isOdd );
console.log(total);