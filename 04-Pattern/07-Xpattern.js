for (i = 1 ; i <= 5 ; i++){
    for(j=1 ; j <= 5 ; j ++){
        if ( i === j || i + j == 6){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}