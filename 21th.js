/*
Write a function called calcuateMean that takes an array of numbers as input and returns the mean(average) of those numbers.

? Constraints:
 The input array may contain positive  and negative integers.
 The input array may be empty. If It is empty, the function should return 0;


*/


const calculateMean = (arr)=>{
    if(arr===0) return 0;
    const sum = arr.reduce((prev,curr)=> (prev+curr),0)
    return Math.floor(sum/arr.length)
}

console.log(calculateMean([1,2,3,4,5]));//O/p:3
console.log(calculateMean([10,20,30]));//O/p:20
console.log(calculateMean([-1,0,1]));//O/p:0
console.log(calculateMean([]));//O/p:0
