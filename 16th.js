/*
Write a function that takes an array of members as input and returns the minimum value found in the array.

constraints
 the input array may contain both positive and negative integers
*/

//function
const findMin = (arr)=>{
    const array = arr.sort((a,b)=> a-b)
    return array[0]
}


console.log(findMin([5,10,2,0])); //output:2
console.log(findMin([5,-3,0,12,-7])); //output:-7
console.log(findMin([])); //output:undefined

