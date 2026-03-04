for(i=1 ; i<=5 ; i++){
    for(j=1 ; j<=9 ;j++){
        if(i === j || i + j == 10){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write(" ")
        }
    }
    console.log()
}