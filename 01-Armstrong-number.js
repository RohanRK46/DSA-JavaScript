// what is armstrong number :

// So 1^3 + 2^3 + 3^3 = 123 if this is true the numbers raised to
// the power of 3 should equal to the number itself 

// Approach : 
// 1> take a number as a imput and convert it into string 
// 2> create a function --> splitting elements individually say 123 = 1 , 2 , 3 (use index (i))
// 3> for every index(i) * cube and will add the number 
// 3> if (sum === number)
// 4> print("armstrong number")

const prompt = require("prompt-sync")();


function checkarmstrong(){

    let a = Number(prompt("enter your number :"));
    let str = a.toString();
    
    sum = 0;

    for(i=0 ; i < str.length; i++){
        let b = Number(str[i]);

        sum = sum + ( b * b * b ); //this makes it cube
    }

    if( a === sum ){
        console.log(a + " its armstrong number");
    }
    
    else{
        console.log(a + " its not a armstrong number");
    }
}

console.log(checkarmstrong())

// what i learned from this programe : 
// 1> prompt always takes input as a string so if your comparing input in the end with a number it
//     it wont work

// 2>let suppose we want to add cubes of 3 number 1 , 2 and 3 so you will run a loop and take sum = 0
//     but inside the same loop you will add cube to sum so that it loops 3 times and sum value 
//     changes 3 times and give us exactly sum of cube of 3 numbers