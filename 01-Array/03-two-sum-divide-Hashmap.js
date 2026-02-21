// 3)Check if Array has Pair divisible by K Example: [2, 4, 1, 3], k = 5 (a + b = 1/5)
// Check if any pair sum is divisible by 5.

// approach: 
// 1>we need two numbers which together will be able to divide by a number 
// 2> say (a + b)%5 == 0 ==> (a % 5 + b % 5) % 5 == 0
// 3> meaning say first element in array is 3 so if we apply divide it by k=5 will return remained 2 
//    and 2 is exactly what we need next to get our pair
// 4> target = arr[i] % k ----> 2
// 5> need = (k - target) % k ---> 3

function summodulo0(arr, k) {
    let storage = {};

    for (i = 0; i < arr.length; i++) {
        target = arr[i] % k;
        need = (k - target) % k;
        if (storage[need] !== undefined) {
            return [arr[i], arr[storage[need]]]
        }
        storage[target] = i;
    }
    return "no pair found";
}

console.log(summodulo0([2,4,3,5],7))