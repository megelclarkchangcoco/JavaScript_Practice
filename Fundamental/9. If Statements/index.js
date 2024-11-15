// IF Statement = if a condition is true, execute some code
//                if not, do something else

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){

    age = myText.value;
    age = Number(age);

    if(age >= 18){
        result.textContent = `You can enter this Website`;
    }
    else if(age == 0){
        result.textContent = `You are just born to enter this website`;
    }
    else if(age <= 18){
        result.textContent = `You must be 18+ to enter this website`;
    }
    else if(age >= 100){
        result.textContent = `You are too old to enter this website`;
    }
    else if(age < 0){
        result.textContent = `You age can't below 0`;
    }
    else{
        result.textContent = `You age is Invalid to enter this website`;
    }


}