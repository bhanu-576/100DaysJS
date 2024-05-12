//* Programming Challenge: FizzBuzz Challenge

//? Write a function fizzbuzz that accepts two number, startNum and endNum, as input. The function should return an array containing number
// and speecific stings based on the following rules:

/*
 ? For each number i in the range from startNum to endNum (both inclusive):
 ? If i is divisible by both 3 and 5, include "FizzBuzz" in the result.
 ? If i is divisible by only 3, include "Fizz" in the result.
 ? If i is divisble by only 5, include "Buzz" in the result.
 ? Otherwise, include the number i itself.
 */

 const fizzbuzz =(start,end)=>{

    let newArr = [];
    for(i=start;i<=end;i++){
        if(i%3==0 && i%5===0){
        newArr.push("FizzBuzz");
        continue;
        }
        else {
            if(i%3===0){
        newArr.push("Fizz");
            continue;}
         if(i%5===0){
        newArr.push("Buzz");
        continue;}
    }
    newArr.push(i);        
    }
    return newArr;
 }

 //Emample 1

 console.log(fizzbuzz(1,15));
 // Output: [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz","Buzz",11,"Fizz",13,14,"FizzBuzz"]

 // example 2
 console.log(fizzbuzz(12,20));
 //Output: ["Fizz",13,14,"FizzBuzz",16,17,"Fizz",19,"Buzz"]