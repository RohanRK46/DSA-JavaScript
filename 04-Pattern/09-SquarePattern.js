// * * * * *
// *       *
// *       *
// *       *
// * * * * *



for (i = 1; i <= 5; i++) {
    //line one printing whole square
    for (j = 1; j <= 5; j++) {
        if ( i == 1 || i == 5 || j == 1 || j == 5){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log()
}