// Switch = can be an efficient replace to many if else statement


let date = "Monday";

switch(date){
    case "Monday":
        console.log("today is monday");
        break;
    case "Tuesday":
        console.log("today is tuesday");
        break;
    case "Wednesday":
        console.log("today is wednesday");
        break;
    case "Thursday":
        console.log("today is thursday");
        break;
    case "Friday":
        console.log("today is friday");
        break;
    case "Saturday":
        console.log("today is saturday");
        break;
    case "Sunday":
        console.log("tody is sunday");
        break;
}


let testScore = 60;
let letterGrade;

switch(true){
    case testScore >= 95:
        letterGrade = "A";
        break;
    case testScore >= 90:
        letterGrade = "B";
        break;
    case testScore >= 85:
        letterGrade = "C";
        break;
    case testScore >= 80:
        letterGrade = "D";
        break;
    case testScore >= 75:
        letterGrade = "E";
        break;
    default:
        letterGrade = "Fail";

}

console.log(letterGrade);