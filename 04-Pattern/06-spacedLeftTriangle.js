for(let a = 1 ; a <= 5  ; a++){
    for(b = 5 ; b >= a ; b--){
        process.stdout.write(" ")
    }
    for(b = 1 ; b <= a ; b++){
        process.stdout.write("*")
    }
    console.log()
}