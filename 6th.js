/*
? Write a function to determine whether a given string is
a palindrome or not. A palinrome is a word, phrase,
number, or other sequence of characters that reads the same
forward and backward, ignoring spaces, punctuation, and capitalization
*/

//function palindrome

const isPalindrome = (str)=>{
   let j = str.length-1
   for(i=0;i<str.length/2;i++){
    if(str[i] != str[j])
    return false
   j--
   }
   return true
    
}




console.log(isPalindrome("A man, a plan,a canal,Panama")) //false
console.log(isPalindrome("racecar")) //true
console.log(isPalindrome(121)) //false

