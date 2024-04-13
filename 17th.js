/*Coding challenge day 17th
Write a function to convert a string to camelCase & snake_case.
*/

const toCamelCase = (str)=>{
    str = str.trim().toLowerCase().split(" ");
    
   const newStr =  str.map((curr,index)=>{
        if (index===0)
        {
            return curr
        }else{
         return curr.charAt(0).toUpperCase()+curr.slice(1)
       
        }
         
    })
    return newStr.join("");
   
    
    

}

//Example
console.log(toCamelCase("hello world thApa"));//output: helloWorldThapa
