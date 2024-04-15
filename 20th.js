/*
Write a function to reverse a string without using built-in methods or libraries. 
The function should take a string as input and return the reversed string
*/
 // using array
// const reverseString = (str)=>{
//     let reverse =[];

//     for(i=str.length-1;i>=0;i--){
//         reverse.push(str[i])

//     }
//     return reverse.join("");

// }

// using con cat
const reverseString = (str)=>{
    let reverse ="";

    for(i=str.length-1;i>=0;i--){
        reverse +=str[i];

    }
    return reverse;

}



// Example usage
console.log(reverseString("ele"));