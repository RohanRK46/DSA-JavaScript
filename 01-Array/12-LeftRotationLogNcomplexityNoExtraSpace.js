const prompt = require("prompt-sync")();

let arr = [1 , 2 , 3 , 4 , 5]

let k = Number(prompt("enter how many times you want to rotate left :"));
k = k % arr.length

rev(arr.length - 1, arr.length- k)
rev(0 , arr.length - k)
rev(0 , arr.length-1)
console.log(arr)

function rev(i , j){
    for( ; i < j ; ){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
}
