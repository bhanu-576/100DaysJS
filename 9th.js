/*
Challenge: calculate the average

Write a function called calculateAverage that takes an array of numbers
as input and returns the average of those numbers.

*/
const calculateAverage = (arr)=>{
    const length = arr.length
    console.log(length)
    
    const avg = arr.reduce((acc,curr)=> acc+curr)
    return avg/length
}
console.log(calculateAverage([5,10,2,8]))