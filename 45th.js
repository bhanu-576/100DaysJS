//* Programming Challenge: mail Address validation
//? You're tasked with implementing a function to validate email addresses using a regular expression. Write a function validateEmail(email) that takes a string email as input and returns true if the email address is valid accoding to the following rules.

//todo 1: The local prt of the email address (before the "@") can contain:
// AlphaNumeric character (A-Z,a-z,0-9)
// Special characters:period ".",underscore "_", percent "%",plus "+",hyphen "-"
// Special characters cannot appear at the begining or end of the local part.

//todo 2: The domain part of the email address (after the "@") can contain 
//Alhanumeric characters (A-Z, a-z, 0-9)
//Hyphen "-"
// Period "."
//Must contain at least one period 
//? The top-level domain (TLD) must consist of at least two alphabetic characters (e.g., "com","org","net",etc.)


const validateEmail = (email)=>
{
    const regExp = /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/;
    return regExp.test(email);

}


console.log(validateEmail("john.doe@example.com")); // true
console.log(validateEmail("invalid..dot@domain.com")); // false
console.log(validateEmail("missing@dotcom")); // false
console.log(validateEmail("no@domain")); // false
