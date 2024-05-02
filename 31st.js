/* * Simple Password Validator

Write a function called simplePasswordValidator that takes a single parameter:

? Password: A string representing the password to be validated.
? The function should validate the password based on the following criteria:

/?  The Paswwordd must contain at least one lowerase letter, one uppercase letter, and one digit.
? The length of the password must be at least 8 characters.
? The function should return true if the password meets all the criteria, otherwise, it should return false.

* Constraints:
? The input string password will contain only alphanumeric characters and punctuation marks.


*/


const simplePasswordValidator =(pass)=>{
    let lower =0;
    let upper =0;
    let digit =0;
    if(pass.length<8)
    return "length is must greter then 8";
    const passArr = pass.split("");
    passArr.map(val=>{
        if(val.charCodeAt(0)>=65 && val.charCodeAt(0)<=90)
            upper++;
        if(val.charCodeAt(0)>=97 && val.charCodeAt(0)<=122)
            lower++;
        if(!isNaN(val))
        digit++;
})
return (upper>=1 && lower>=1 && digit>=1 )? true :false;

    }


console.log(simplePasswordValidator("chdhhvcvwh")); //o/p : false
console.log(simplePasswordValidator("chdhR7vcvwh123@node")); //o/p : true
console.log(simplePasswordValidator("chdhhY7cvwh")); //o/p : true


