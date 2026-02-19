// 2) Pair with Given Difference
// Find two numbers such that: a - b = target
// Example: [5, 20, 3, 2, 50, 80], k = 78
// Output: (80, 2)

function twosumsubtraction(nums, target) {
    let store = {}

    for (i = 0; i < nums.length; i++) {
        let require = target + nums[i]
        if(store[require] !== undefined){
            return [require, i];
        }
    store[nums[i]] = i; // its work is to just store
    }
}