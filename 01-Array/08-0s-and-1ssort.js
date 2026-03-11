let arr = [0, 1, 0, 0, 1, 0, 1, 0, 1, 0]

let a = 0;
let b = 0;

for (i = 0; i <= arr.length - 1; i++) {
    if (arr[i] === 0) {
        let temp = arr[a]
        arr[a] = arr[b]
        arr[b] = temp
        a++
    }
    b++
}

console.log(arr)