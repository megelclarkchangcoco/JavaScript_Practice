// String methods = allow you to manipulate and work with text(strings)

let username = "miguel pogi ";

let result = username.startsWith(" ");
let resultEnd = username.endsWith(" ");

username = username.trim();
username1 = username.toLowerCase();
username2 = username.toUpperCase();
usernameR = username.repeat(3);

console.log(username.indexOf("g"));
console.log(username.lastIndexOf("l"))
console.log(username.charAt(0));
console.log(username.length);
console.log(username);
console.log(username2);
console.log(usernameR);


if(result){
    console.log("Your username can't include ' ' ");
}
else{
    console.log(username);
}

if(resultEnd){
    console.log("Your username can't begin with ' ' ");
}
else{
    console.log(username);
}