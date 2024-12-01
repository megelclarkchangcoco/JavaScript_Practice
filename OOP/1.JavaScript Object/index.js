// object = a collection of related properties and/or methods
//          can represent real world objects (people, product, places)
//          object = {key:value,
//                     function()}

const outputs = document.getElementById('output');

const person1 = {
    firstName: "Miguel",
    lastName: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello: function(){console.log("Hi I am Miguel!")},

}

const person2 ={
    firstName: "Changcoco",
    lastName: "Luke",
    age: 13,
    isEmployed: false,
    sayHello: function(){console.log("Hi I am Changcoco!")},

}


console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);

person1.sayHello();
person2.sayHello();
