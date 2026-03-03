// for 5 rows we will run outter loop for 5 times 
// and the inner loop should work corresponding to outter loop as row1 = one star and incremt of star as per row 

// Q2 > *
//      * *
//      * * *
//      * * * * 
//      * * * * *

for(i = 1 ; i <= 5 ; i++){
    for(j = 1 ; j <= i ; j++){
        process.stdout.write("* ")
    }
    console.log()
}