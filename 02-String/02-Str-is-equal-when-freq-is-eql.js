// question > take two strings as a input compare their heighest itteration count 
// say a = abbccc , b = dddcc so here c and d both heighest itteration is 3 so this will give true
// as output and if heighest itteration is not true it wont give the out put as true

// approach: 
// 1> i will input two individual string from user say a and b
// 2> split the string into indivial alphabets says aabbccc = [ "a" , "a" , "b" , "b" , "c" , "c" , "c" ]
// 3> will check the heighest itteration frequency
// 4> and store it in variable
// 5> compare variable of both the number and vyallah

const prompt = require("prompt-sync")();

function maxfrequency(str) {
  let freq = {};
  let max = 0;

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;

    if (freq[ch] > max) {
      max = freq[ch];
    }
  }
  return max;
}

let str1 = prompt("enter your first string :")
let str2 = prompt("enter your second string :")

let a = maxfrequency(str1)
let b = maxfrequency(str2)

if (a === b ){
    console.log("max frequency of string 1 : " + maxfrequency(str1))
    console.log("max frequency of string 2 : " + maxfrequency(str2))
    console.log("True")
}
else {
    console.log("max frequency of string 1 : " + maxfrequency(str1))
    console.log("max frequency of string 2 : " + maxfrequency(str2))
    console.log("False")

}