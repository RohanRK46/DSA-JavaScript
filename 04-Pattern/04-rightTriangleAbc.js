// Q4> A
//     A B 
//     A B C 
//     A B C D
//     A B C D E


for(i = 1 ; i <= 5 ; i++){
    for(j = 1 ; j <= i ; j++){
        process.stdout.write(String.fromCharCode(64 + j) + " ")
    }
    console.log()
}