/*
Write a function that takes a number as input and return the sum of its digits
*/

const sumOfDigits = (num)=>{
    if(num<=0)
    return false
    else{
        return Math.floor((num%10)+sumOfDigits(num/10))
    }
}


//Example usage

console.log(sumOfDigits(1234))// output:10
console.log(sumOfDigits(4321))// output:10
console.log(sumOfDigits(123456))// output:21

/* Constraints:

The input number will always be a positive integer.
The input number can have multiple digits
The output should be the sum of all digits in the input number

// Homework
this function calculates the sum of digits without converting the number to a string

*/
