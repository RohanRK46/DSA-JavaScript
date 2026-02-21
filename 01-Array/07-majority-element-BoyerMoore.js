// Problem:
// Given an array: arr = [2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 2, 1, 3, 3]
// Find the majority element.

// Majority element = element that appears more than n/2 times.
// Length of array = 15
// n/2 = 7.5
// So element must appear at least 8 times to be majority.

// Key Concept:
// Boyer-Moore Voting Algorithm works on increment and decrement logic.
// 1. Start with first element and give it support = 1.
// 2. If the same number appears again → increase support.
// 3. If a different number appears → decrease support.
// 4. If support becomes 0 → pick new number.
// 5. Majority element can never be completely cancelled out because it appears more than half the time.

function majorityelem(arr) {
    let num ;
    let repeat = 0;

    for(i=0 ; i < arr.length ; i++){
        if (repeat === 0){
            num = arr[i]
        }
        if (num === arr[i]){
            repeat++
        }
        else{
            repeat--
        }
    }
    return num;
}

console.log(majorityelem([2, 1, 2, 2, 3, 1, 3, 2, 3, 3, 3, 2, 1, 3, 3]))