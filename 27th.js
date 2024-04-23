/*
* Write a function called repeatString that takes two parameters:


? str: A string that needs to be repeated.
? num: An integer representing the number of times the string should be repeated.
? The function should repeat the input string str the specified number of  times num and return the resulting string.
*/

//Using array method
// const repeatString =(str,num)=>{
//     let arr= [];
//     for(i=0;i<num;i++){
//       arr.push(str)
//     }
//     return arr.join("")
// }

// Using repeat method
const repeatString = (str,num)=>{
    return num>0 ? str.repeat(num): str;
}


//Example
console.log(repeatString("abc",5)); //O/p : "abcabcabcabcabc"