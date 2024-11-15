// if statements = if a condition is true, execute some code
//                 if not, do something else

let age = 19;
let ageAunthenticator = 17;
let student = false;
let hasLicense = true;

if(age >= 18){
    console.log("you can vote");
}
else{
    console.log("you can't vote");
}

if(ageAunthenticator >= 18){
    console.log("You can enter this Website");
} 
else{
    console.log("you must be 18+ to enter this website");
}

if(student){
    console.log("You are a Students");
}
else{
    console.log("you are not a student");
}

// nested if 
if(age >= 18){
    console.log("You are old enough to drive")

    if(hasLicense){
        console.log("You have your license!");
    }
    else{
        console.log("You do not have your license yet!");
    }

}
else{
    console.log("You must be 16+ to have a license");
}


if(age >= 18){
    console.log("You are old enough to enter this website");
}
else if(age < 0){
    console.log("You age can't be 0");
}
else if (age >= 100){
    console.log("You are Too old to enter this website");
}
else{
    console.log("You must be 18+ to enter this website");
}