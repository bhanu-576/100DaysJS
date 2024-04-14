/*
Write a function to check if a given string starts with a specific substring

/Input
? str: A string(e.g. 'Hello world').
? subStr: A substring to check it starts the given string (e.g: "Hello").
? Output : true if the given string starts with the specified substring,otherwise false.
*/


const startsWith = (str,substr)=>{
    //array method
    // str =str.split(" ");
    // if(str[0]===substr)
    // return true;
    // return false;
    
    //startswith method
    // return str.toLowerCase().startsWith(substr.toLowerCase())
    // slice method
    return str.slice(0,substr.length)===substr

}
//Example usage:
console.log(startsWith("Hello world","Hello"));// o/p: true
console.log(startsWith("Hello world","world"));// o/p: false

