/*Coding challenge day 17th
Write a function to convert a string to camelCase & snake_case.
*/

const toCamelCase = (str)=>{
    str = str.toLowerCase().split(" ");
    let newStr = str.map(word=>word[0])
   newStr= newStr.join("").toUpperCase();
   let Array = []
    str.filter((curr,index)=>{
         let bhan = newStr[index]+curr.slice(1)
        Array.push(bhan)
         
    })
    return Array.join("")
    

}

//Example
console.log(toCamelCase("hello world thApa"));//output: helloWorldThapa