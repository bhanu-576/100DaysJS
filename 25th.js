/*
write a function to calculate the factorial of a number.Using recursion
*/


const factorial =(fact)=>{
    if(fact==1){
        return 1;
    } else 
    return fact*factorial(fact-1);
}
//* Example usage
console.log(factorial(5));