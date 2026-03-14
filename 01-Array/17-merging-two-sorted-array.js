let arr1 = [1 , 5 , 7]
let arr2 = [2 , 3 , 4 , 6]

let i = j = k = 0

let temp = new Array(arr1.length + arr2.length);

while( i <= arr1.length-1 && j <= arr2.length-1){
    if( arr1[i] < arr2[j] ){
        temp[k] = arr1[i]
        i++
    }
    else{
        temp[k] = arr2[j]
        j++
    }
    k++
}
while( i <= arr1.length - 1 ){
    temp[k] = arr1[i]
    i++
}

while( j <= arr2.length - 1 ){
    temp[k] = arr1[j]
    j++
}


console.log(temp)