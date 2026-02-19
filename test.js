let nums = [1, 2, 3, 4, 5];
let target = 9;

let store = {};  // to store numbers we already visited

for (let i = 0; i < nums.length; i++) {

    let needed = target - nums[i];  // a = target - b

    // check if needed number is already stored
    if (store[needed] !== undefined) {
        console.log("Pair Found:", needed, nums[i]);
        break;
    }

    // store current number
    store[nums[i]] = i;
}
