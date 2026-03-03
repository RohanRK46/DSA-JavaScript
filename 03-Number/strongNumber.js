// if factorial of individual numeber of any number is equal to the number itself then its stong number 
// ie : 124 if 1! + 2! + 4! = 124 then 124 is strong number

const { log } = require("console");

const prompt = require("prompt-sync")();

let a = Number(prompt("enter a number : "));
let orignala = a;

let sum = 0;
while(a>0){
    let elem = a%10 
    fact = 1;
    for(let i = 1 ; i <= elem ; i++ ){
        fact = fact * i 
    }
    a = Math.floor(a/10)
    sum = sum + fact
}
if ( orignala === sum ){
    console.log("its strong number");
}
else{
    console.log("its not a strong number")
}
