let nums = [2 , 1 , -3 , 4 , 1, 2, 1, -5 , 4 ]

let sum = 0;
let MaxSum = 0;

for(i = 0 ; i <= nums.length - 1 ; i++){
    sum = sum + nums[i]
    if (sum > MaxSum){
        MaxSum = sum
    }
    if( sum < 0 ){
        sum = 0;
    }
    i++
}

console.log(MaxSum)