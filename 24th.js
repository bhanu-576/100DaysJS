/*
? Write a function called findMode that takes an array of numbers as input and 
returns the mode of the array (the number that appears most frequently).

*/

function findMode(arr){
    if(arr.length<1)
    return 0;
let maxNum = 0;
let mode = 0;
let array = {};
    for(let element of arr){
        array[element] = (array[element] || 0)+1;
        if(array[element]> maxNum){
            maxNum = array[element];
            mode = element;
        }

    }
    return mode;
   
}


//example
console.log(findMode([1,2,3,2,1,4,2,3,3,3])); // output 2

//Constraints:
//? The input array will always contain at least one element.
//? The mode will always be unique(i.e. there won't be multiple number with the same higest frequency).