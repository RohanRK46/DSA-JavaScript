function twosumdivisblebyk(arr , target){
    arr.sort((a,b) => a-b);

    let left = 0;
    let right = arr.length - 1;

    while( left < right ){
        let sum = arr[left] + arr[right]
        if( (sum % target) === 0){
            return[arr[left],arr[right]]
        }
        left++;

        if( sum % target !== 0){
            right--;
        }
    }
}

console.log(twosumdivisblebyk([1 , 2 ,4 , 3 , 8],7))