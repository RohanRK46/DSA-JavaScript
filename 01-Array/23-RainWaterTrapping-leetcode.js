const { hrtime } = require("process");

let height = [4 , 2 , 0 , 3 , 2 , 5]

let maxLeft = height[0];
let maxRight = height[ height.length - 1 ]

let TrappedWater = 0 ;

for(i=0 ; i <= height.length - 1 ; i++){
    if(height[i] > maxLeft ){
        maxLeft = height[i]
    }
}
for(j=height.length-1 ; j >= 0 ; j--){
    if(height[j] > maxRight){
        maxRight = height[j]
    }
}

for(k=0 ; k <= height.length - 1 ; k++){
   water =  Math.min(maxLeft , maxRight) - height[k]
   TrappedWater = TrappedWater + water
}

console.log(TrappedWater)
