/*
Write a function to calculate the sum of squares of all elements in an array. 
For example, given the array [1,2,3],the function should return 14 because 1*1+ 2*2+3*3 = 1+4+9=14.

*/
// Example 

const sumOfSquares = (arr)=>{
   return arr.reduce((acc,curr)=> acc+ (curr*curr));
}

console.log(sumOfSquares([1,2,3,4])); // o/p:14