/*Hash Tag generator
You are required to implement a function generateHash that generates a hash tag from given input string.
The hash tag should be constructed as follows:

? The input string should be converted to a hash tag format , where each word is capitalized and concatenated together without spaces.

? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, 
 the function should return false.
 
 ? Otherwise , the function should return the generated has tag prefix with #.



*/


//Write a function generateHash to accomplish this task

console.log(generateHash("My name is Bhanu Sharma"))
//Output : #MyNameIsBhanuSharma


function generateHash(str){
    if(str.length>280 || str.trim().length ===0){
        return false
    }
    let value = str.split(" ")
     value = value.map((upper)=> upper[0].toUpperCase()+ upper.slice(1))
    return `#${value.join("")}`
}