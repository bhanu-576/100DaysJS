/*
Write a function that takes a sstring as input and returns the count of vowels in that string. 
Consider 'a','e','i','o','u' as vowels (both lowercase and uppercase).

*/

// function

// const countVowels = (str)=>{
//     str = str.toLowerCase()
//     console.log(str)
//     let count =0
//     for(i=0;i<str.length;i++){
//         if(str[i]==='a'||str[i]==='e'||str[i]==='i'||str[i]==='o'||str[i]==='u')
//         count++
//     }
//     return count
// }

// using array include method

const countVowels =(str)=>{
    const vowels = ['a','e','i','o','u'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char.toLowerCase()))
        count++;
    }
    return count;

}


// example usage:
console.log(countVowels("Helloo world")) // output: 4
console.log(countVowels("ThE quIck brOwn fOx"))// output: 5
console.log(countVowels("Brrrp"))// output: 0

/*Constraints
1. The input string may contain letters in both uppercase and lowercase.
2. The output should be a non-negative integer representing the count of vowels in the input string.
*/

