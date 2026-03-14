let arr1 = [1 , 3 , 5];
let arr2 = [2 , 4, 6, 7];

let temp = new Array(arr1.length + arr2.length);

let i = arr1.length - 1 ; 
let j = arr2.length - 1 ;
let k = 0 ;

while( i >= 0 && j >= 0 ){
    if( arr1[i] > arr2[j] ){
        temp[k] = arr1[i]
        i--
    }
    else{
        temp[k] = arr2[j]
        j--
    }
    k++
}

while( i >= 0 ){
    temp[k] = arr1[i]
    i--

}
while( j >= 0 ){
    temp[k] = arr2[j]
    j--
}

console.log(temp)