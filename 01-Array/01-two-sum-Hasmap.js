// Question is we are given an array and we need to pair of numbers that is equal to the sum

// approach:
// 1> let suppose we need sum = 9 so a + b = 9
// 2> so now we need to find two such numbers which will be equal to the target a + b = 9
// 3> a = 9 - b if we subtract one number from the target we can find what exactly we need as other numnber

// funtion 

function targetsum(nums,target){
    let store = {};
    for(i=0 ; i < nums.length ; i++){
        let needed = target - nums[i]
        if(store[needed] !== undefined){
            return[needed , nums[i]]
        }
        store[nums[i]]=i;
    }
}

console.log(targetsum([2 , 4 , 3 , 7 ],5))