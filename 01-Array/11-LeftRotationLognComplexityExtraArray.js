const prompt = require("prompt-sync")();

let arr = [ 1, 2, 3, 4, 5]
let temp = new Array(arr.length)

let k = prompt("Enter number of left rotation :");
k = k % arr.length;

for(let a = 0 ; a <= arr.length - 1 ; a ++){
    temp[a] = arr[(a + k) % arr.length]
}

console.log(temp)