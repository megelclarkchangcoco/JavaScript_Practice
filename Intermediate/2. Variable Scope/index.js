// variable scope = where  a variable is recognized
//                  and accessible (local vs global)\

let x = 3;
function1();
function2();

function function1(){
    let x = 1;
    console.log(y);
}

function function2(){
    let y = 2;
    console.log(x);
}