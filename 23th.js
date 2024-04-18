/*
? Write a function to count the occurtence of each element in an array and store the counts in an object. 
The keys of the object should represents the elements of the array, 
and the values should represent the number of times each element appears in the array.
/ Here's what the function do:
Accept an array of numbers as input .
Create an empty object called counts to store the counts of each element.
Iterate through each number in the array.
For each number,increment the count in the  counts object.
If the count for a number does not exist yet, initialize it to 1.
Return the counts object containing the counts of each element.

*/

const num = (arr)=>{
    const obj = {};
    for(let element of arr){
        obj[element] = (obj[element] || 0 ) +1;
    }
    return obj;
}

//Input 
console.log(num([1,2,2,3,1,4,2]));
 //output
 //? {"1":2,"2":3,"3":1,"4":1}