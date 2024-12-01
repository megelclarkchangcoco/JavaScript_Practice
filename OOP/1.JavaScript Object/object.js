

const pOutputs = document.getElementById('p-output');
const hOutputs = document.getElementById('h1-output');


const person1 = {
    firstname: "miguel",
    lastname: "Changcoco",
    age: 21,
}

const car1 = {
    familyCar: "Land Crusair",
    sportCar: "Ferrari",
}


function display(person) {
    const p = document.createElement('p');
    p.textContent = `firstname: ${person.firstname} Lastname:${person.lastname}, Age: ${person.age}`;
    pOutputs.appendChild(p);
}

function favCar(car){
    const h =document.createElement('h1');
    h.textContent = `my Family Car is ${car.familyCar} and My Sport Car is ${car.sportCar}`;
    hOutputs.appendChild(h);
}

display(person1);
favCar(car1);