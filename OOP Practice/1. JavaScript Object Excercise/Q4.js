// How do you find the maximum value in an array using JavaScript?
// Question: Write a JavaScript function that takes an array of numbers as input and returns the maximum value in the array.
// Sample Input:
// [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]
//Sample Output:
//9

const Nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

function findMaxValue(array){
    return Math.max(...array);
}

console.log(findMaxValue(Nums));