/*
Write a function that takes an array of integer as input and removes any duplicate elements, returning a new array with only the unique
eements
*/
const removeDuplicates = (arr)=>{
    const newArr = new Set(arr)
    return newArr
}



// example

console.log(removeDuplicates([1,2,3,2,1,4]))
console.log(removeDuplicates([5,6,7,8,7,8,9]))
console.log(removeDuplicates([1,2,3,2,1,4]))
console.log(removeDuplicates([1,2,3,2,1,4]))

