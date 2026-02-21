function twosumsubtract(arr, target) {
    arr.sort((a, b) => a - b); // array sorting

    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[right] - arr[left];

        if (sum === target) {
            return [arr[left], arr[right]];
        }
        else if (sum > target) {
            left++;
        }
        else {
            right--;
        }
    }

    return "no pair found";
}

console.log(twosumsubtract([2,35,3,56,45,48,34], 11));