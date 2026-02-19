// question : a + b = 0
// a = -b whatever the number is we want its eactly opposite to make it 0 say there is 10 then we want -10 

function sum0(arr,target){
    storage = {}; // all the numbers will be stored here
    
    for(i = 0 ; i < arr.length ; i++){
        target = -(arr[i])
        if(storage[target] !== undefined){
            return[arr[i], arr[storage[target]] ]
        }
    storage[arr[i]]=i
    }
}