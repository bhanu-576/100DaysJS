// Recursive number range generator

/*
Write a recursive function called nuumberRangeRecursive that generates an array containing consecutive numbers from a to b (inclusive)

? a: An integer representing  the starting number of the range
? b: An integer representing the ending number of the range.
? Arr: An optional parameter representing the array to store the numbers in the range. 
It defaults to an empty array.

* constraints:
? a and b will be integers.
? a will be less than or equal to b.
*/

const numberRangeRecursive = (start,end)=>{
    let arr = [];
    for(i=start;i<=end;i++)
    arr.push(i);
    return arr;
}

console.log(numberRangeRecursive(0,5)); // o/p: [0,1,2,3,4,5]
console.log(numberRangeRecursive(3,7)); // o/p: [3,4,5,6,7]
console.log(numberRangeRecursive(-2,2)); // o/p: [-2,-1,0,1,2]
