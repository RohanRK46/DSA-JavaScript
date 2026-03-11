const prompt = require("prompt-sync")();

let arr = [1 , 2, 3, 4, 5];

let k = prompt("enter how many times you want to rotate :")
k = k % arr.length;

for(j = 0 ; j<k ; j++){
    let temp = arr[0]
    for(let i = 0 ; i < arr.length - 1 ; i++){
        arr[i] = arr[i+1]
    }
    arr[arr.length - 1 ] = temp 
}
    
    console.log(arr)