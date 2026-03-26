// Convert all Uppercase to Lowercase and All Lowercase to Uppercase

// ascii value of Uppercase are in range 65 - 90
// ascii value of lowercase are in range 97 - 122

let s = "AfnFAFafjjsKKFdss" ;
let toggle = "" ;

for(let i = 0 ; i <= s.length - 1 ; i++){

    if(s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90){
        toggle = toggle + String.fromCharCode(s.charCodeAt(i) + 32 );
    }
    else if(s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122){
        toggle = toggle + String.fromCharCode(s.charCodeAt(i) - 32 );
    }
}

console.log(toggle)