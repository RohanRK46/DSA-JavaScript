const prompt = require ("prompt-sync")();

let s = prompt("enter your word to check if its a palindrome : ")

let temp = "";

for(i = s.length - 1 ; i >= 0 ; i--){
    temp = temp + s.charAt(i)
}
if( temp === s ){
    console.log("palindrome")
}
else{
    console.log("not a palindrome")
} 