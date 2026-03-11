const prompt = require("prompt-sync")();

let arr = [1 ,2 ,3 ,4, 5]

let k = prompt("How many times you want to move right : ")

for(j = 0 ; j < k ; j++){
    let temp = arr[arr.length - 1]
    for( let i = arr.length - 1 ; i > 0 ; i-- ){
        arr[ i ]  = arr[ i - 1 ]
    }
    arr[0] = temp 
}
    
console.log(arr)