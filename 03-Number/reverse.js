let a = 1234
let reverse = 0;

while(a>0){
    let rem = a % 10;
    reverse = reverse * 10 + rem; 
    a = Math.floor(a/10);
}

console.log(reverse)