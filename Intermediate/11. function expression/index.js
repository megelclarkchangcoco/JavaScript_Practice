// function decleration = define a reusable block of code
//                        that performes a specific task
function hello(){
    console.log("Hello Migs ");
}

const numbers = [1,2,3,4,5,6];
const squares = numbers.map(
    function square(element){
        return Math.pow(element, 2);
});

const cubes = numbers.map(
    function square(element){
        return Math.pow(element, 3);
    }
);

const evenNums = numbers.filter(
    function evenNum(element){
        return element % 2 === 0;
    }
);

const isOdd = numbers.filter(
    function isOdd(element){
        return element % 2 !== 0;
    }
);

const total = numbers.reduce(
    function(accumulator, element){
        return accumulator + element;
    }
);

console.log(squares);
console.log(cubes);
console.log(evenNums);
console.log(isOdd);
console.log(total);


// function expression = a way to define function as 
//                       values or variables

// const hello = function(){
//     console.log("hello");
// }

// hello();

setTimeout(hello, 3000);


setTimeout(function(){
    console.log("hello migs");
}, 3000);