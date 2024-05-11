//* Programming Challenge : Validate a Credit Card Number (Luhn Algorithm)

//? Write a function credit card number using the Luhn algorithm.

/*
* Requirements:
? Write a function named validateCreditCard that takes a credit card number as a string.
? The function should return true if the number is valid according to the Luhn algorithm, and false otherwise.
? Ensure the function can handle number as strings, which may include spaces and dashes.
*/

//* Luhn Algorithm Steps:
/* Steps of the Luhn Algorithm
? 1. Prepare the Number:
    a.Start with the digits of the number. for example, if validating the number 79927398713.
? 2. Reverse The Digit:
    a.Reverse the digit of the number. For the example, it becomes 31789372997
? 3. Double Every Second Digit :
    a.Starting from the first digit,double every second digit.
    b.for example : 3,1*2,7,8*2,9,3*2,7,2*2,9,9*2,7.
    c.after multiplication : 3,2,7,16,9,6,7,4,9,18,7
? 4.Subtract 9 from Number Higher Than 9:
    a.If Diubling the number result in a number greater than 9, suubtract9 from it.
    b. Now our series is: 3,2,7,7,9,6,7,4,9,9,7
? 5. Sum All Digits:
    a. Add all the digit together: 3+2+7+7+9+6+7+4+9+9+7 = 70
? 6. Check Modulo 10:
    a. The the sum modulo 10 is 0, then the number is valid according to the Luhn formula.
    b ex- 70%10=0, which is 0,so 79927398713 is valid according to Luhn
    */

    const validateCreditCard = (card)=>{
        card =card.split("-").join("");
        card =card.split("");
        let val =[];
        card.map((curr,index)=>{
            if(index===0||index%2===0)
            val.push(curr*2);
            else
            val.push(curr);
        })
        card =[];
        for(let arr of val){
            if(arr>9)
           card.push(arr-9);
        else
        card.push(parseInt(arr));
        }
       const valAdd = card.reduce((curr,prev)=> curr+prev);
       return valAdd%10===0?true:false;
       
        
    }


    console.log(validateCreditCard("4539-1488-0343-6467")); // O/P:True
    console.log(validateCreditCard("8273-1232-7352-0569")); // O/P :false