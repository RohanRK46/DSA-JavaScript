// there is array nums with some elems in it 0 , 1 , 2 where 0 , 1 and 2 represent specific color 
// sort it in such a way that array get sorted out like 
// nums = [0 , 1 , 1, 2 , 0 , 2 , 1 , 2, 1, 1, 0]
// output = [0 , 0 , 0 , 1 , 1, 1, 1, 1, 2 , 2, 2 ]

nums = [0 , 1 , 1, 2 , 0 , 2 , 1 , 2, 1, 1, 0]
let i = 0;
let j = nums.length - 1 ;
let temp = 0;

for(k = 0 ; k <= j ; k++ ){
    if( nums[k] === 0){
        temp = nums[i];
        nums[i] = nums[k];
        nums[k] = temp;
        i++;
    }
    else if( nums[k] === 2 ){
        temp = nums[j];
        nums[j] = nums[k];
        nums[k] = temp;
        j--;
        k--;

    }
}

console.log(nums)
