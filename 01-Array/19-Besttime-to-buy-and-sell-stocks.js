let arr = [7 , 1 , 5 , 3 , 6 , 4];

let minprice = arr[0];
let maxprofit = 0;

for( let i = 0 ; i <= arr.length - 1 ; i++ ){
    if( arr[i] < minprice ){
        minprice = arr[i]
    }

    let profit = arr[i] - minprice 

    if( profit > maxprofit ){
        maxprofit = profit;
    }
}

console.log(`"buy on Day : ${arr[minprice]} , sell on Day : ${arr[maxprofit]}`)
