/*
Write a function called countChar that takes two parameters: a string and a character
to count. The function should return the number of times the specified character appears in the string.

*/

console.log(countChar("MissIssIIIIIIIippi","I"))// output :4

/*
Todo Constraints:
//The function should be case-sensitive.
? the function should handle both lowercase and uppercase characters.
? The charater parameter can be printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable)
*/

    //method 1 Simple
// function countChar(str,char){
//     char = char.toLowerCase()
//     str = str.toLowerCase().split("")
//     let count = 0
//     for(i=0;i<str.length;i++){
//         if(str[i]===char)
//         count++
//     }
//     return count
// }


//mathod 2 using reduce method

function countChar(word,char){

    word = word.toLowerCase().split("")
    char = char.toLowerCase()
    let count = word.reduce((accu,curr)=>{
        if(curr===char)
        {accu++}
        return accu
    },0)
    return count

}