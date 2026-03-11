const prompt = require("prompt-sync")();

let arr = [1 ,2 ,3 ,4 ,5];
let temp = new Array(arr.length);

let k = prompt("Enter your Right rotation value :");
k = k % arr.length;

for(let i = arr.length - 1 ; i >=  0 ; i--){

    temp[i] = arr[(i - k + arr.length) % arr.length];
}

console.log(temp)