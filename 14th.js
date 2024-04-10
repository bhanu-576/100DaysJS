/*
Write a function called isPowerOfTwo that takes an integer num as input and returnss true if num is a power of two, and false otherwise
 */

//function

const isPowerOfTwo = (num)=>{
    if(num<=0)
    return false;
    let op = false;
    for(i=0;i<=num;i++){
        if(2**i === num)
        op = true
    }
    return op;
}

// Example usage:
console.log(isPowerOfTwo(124)); // output: true
console.log(isPowerOfTwo(7)); // output : false

//note:

/*
1. The input num will be a positive integer.
2. zero and negative integer not considered power of two.
3. The function should return true if the given number is a power of 2, and false otherwise.
4.We can solve it using bitwise operator  too.
*/
