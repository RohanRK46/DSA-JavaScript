// * * * * *
// * *   * *
// *   *   *
// * *   * *
// * * * * *

// square with X inside it

for( i=1 ; i<=5 ; i++){
    for( j=1 ; j<=5 ; j++ ){
        if(i==1 || i==5 || j==1 || j==5){
            process.stdout.write("* ")
        }
        else if( i + j == 6 || i == j ){
            process.stdout.write("* ")
        }
        else{
            process.stdout.write("  ")
        }
    }
    console.log()
}