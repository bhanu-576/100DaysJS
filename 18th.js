 /*
 Write a function to check if a character is uppercase or lowercase

 //* Constraints:

 ? The input will be a single character
 ? The character can be any printable ASCII character.
 ? You can assume that the input will always be a string of length 1.
 */
// method 1 comparison method
//  const isLowerOrUpperCase = (chr)=>{
//     if(chr.length != 1){
//         return "char length is always 1"
//     }
//     if(chr===chr.toLowerCase())
//     return "char is lowerCase"
//     else
//     return "char is upperCase"
//  }

const isLowerOrUpperCase = (chr)=>{
    if(chr.length != 1){
        return "char length is always 1"
    }
   if(chr.charCodeAt(0)>= 65 && chr.charCodeAt(0)<=90)
   return "char is upperCase";
   return " char is lowerCase"
 }




 // Example Usage

 console.log(isLowerOrUpperCase("S")); //O/p :upperCase
 console.log(isLowerOrUpperCase("b")); // o/p: lowercase