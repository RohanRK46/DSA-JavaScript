// a + b + c = target
// so first element = arr[i]
// targetpt2 = target - arr[i]
// b + c = targetpt2
// b = targetpt2 - c 

function threesumtarget(arr,target){
    
    for(i=0 ; i < arr.length-2 ; i++ ){
        store = {};
       let target2 = target - arr[i]
        for(j = i+1 ; j < arr.length ; j++){
           let needed = target2 - arr[j];
            if(store[needed] !== undefined ){
                return[arr[i] , needed, arr[j]]
            }
            store[arr[j]]=j
        }
    }
}

console.log(threesumtarget([2 , 9 , 11 , 3 , 5, 4 , 6 , 8], 18))