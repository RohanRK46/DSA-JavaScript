const prompt = require("prompt-sync")();

let s = prompt("enter your string :")
let ispalindrome = true ;

let i = 0;
let j = s.length - 1 ;

for( ; i < j ; ){
    if(s.charAt(i) !== s.charAt(j)){
        ispalindrome = false ;
        break
    }
    else{
        i++
        j--
    }
}

if( ispalindrome === true ){
    console.log("the string is palindrome")
}
else(
    console.log("not a plaindrome")
)