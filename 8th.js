/**
 Challenge: Factorial Finder

 // Write a function factorial that takes a non-negativ
 integer num as input and returns its factorial. the
 factorial of a non-negative integer n, denoted as n!, is the product
 of all positive integer less than or equal to
n.
The factorial of 0 is defined as 1.
 */

// function write simple method 
// const factorial = (fact)=>{
//     if(fact<0)
//     return "Please give a valid number"
//     if(fact===0 || fact===1)
//     return 1
//     let factorial = 1

//     for(i=1;i<=fact;i++){
//         factorial *= i
//     }
//     return factorial
    
// }

// recursion method

function factorial(fact){
    if(fact<0)
    return "please enter valid number"
    if(fact != 0)
    return fact*factorial(fact-1)
    return 1
}

// Example usage:
console.log(factorial(5))
console.log(factorial(0))
console.log(factorial(3))
console.log(factorial(-3))

