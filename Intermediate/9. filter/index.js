// .filte() = create a new array by filtering
//            out elements

let number = [1,2,3,4,5,6,7];
let evenNums =number.filter(isEven);
let oddNums = number.filter(isOdd);

console.log(evenNums);
console.log(oddNums);
function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}

const ages = [16, 17, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const childs = ages.filter(isChildren);

console.log(adults);
console.log(childs);

function isAdult(element){
    return element >= 18;
}

function isChildren(element){
    return element <= 18;
}

const words = ["Mahal", "na", "ata", "kita"];

const shortWords = words.filter(isShortWord);
const longWords = words.filter(isLongWord);

console.log(shortWords);
console.log(longWords);


function isShortWord(element){
    return element.length <= 5;
}

function isLongWord(element){
    return element.length > 3;
}