function twosumtarget(arr, target) {
    arr.sort((a, b) => a - b) // sorting the array

    let left = 0;
    let right = arr.length - 1 // last index is one less than length

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === target) {
            return [arr[left], arr[right]]
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
}

console.log(twosumtarget([3,4,5,6,7,84,34,45,77,24],41))