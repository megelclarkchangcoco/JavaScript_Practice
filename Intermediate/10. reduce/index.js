// .reduce() = reduce the elements of an array to a single value

const  prices = [5,10,15,20,25,30,35,40,45,50];

const total = prices.reduce(sum);

console.log(`Total : $${total.toFixed(2)}`);

function sum(accumulator, element){
    return accumulator + element;
}

const grades = [75,75,75,80,95];

const maxGrades =grades.reduce(maxGrade);
const minGrades = grades.reduce(lowGrade);

console.log(maxGrades);
console.log(minGrades);


function maxGrade(accumulator, element){
    return Math.max(accumulator, element);

}

function lowGrade(accumulator, element){
    return Math.min(accumulator, element);
}