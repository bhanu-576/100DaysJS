// 1st Question
//Write a function FindLargestWord that takes a string as input and return the longest word in the string . If there are multiple largest word return the 1st one.

/* Constraints
1.The input string may contain alphabatic characters,digits,spaces and punctuation
2.The input string is non-empty.
3. The input string mayy contain multiple words seperated by spaces.
*/

/* Notes
1. If the input string is empty or contains only whitespace, the function should return an false.
2. The function should ignore leading and trailing whitespace when determining the longest word.
*/

function findLargestWorld(str){
    // check only whitespace is not available
    if(str.trim().length ===0){
        return false
    }
    const words = str.split(" ")
    value = words.sort((a,b)=> b.length-a.length)
    return value[0]
}

console.log(
    findLargestWorld("India is the largest country in Asia")
)