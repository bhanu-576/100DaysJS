//* Programming Challenge : Mobile Number Validation

//? Write a function that takes a string as input and reurns true if the string represents a valid Indian mobile number, and false otherwise.
//*Validation Requirements:
//? Length: An Indian mobile number should have exactly 10 digits.
//? Starting Digit: The number must start with 6,7,8 , or 9, which are valid starting digiits for Indian mobile numbers.

// Test Cases

const validateIndianMobileNumber = (num)=>{
    let regex = /^[6-9][0-9]+$/;
    let flag = false;
    if(num.length===10){

        return regex.test(num);
    }
    return false;
}

console.log(validateIndianMobileNumber("9858054530"));//true
console.log(validateIndianMobileNumber("0123456789"));//false
console.log(validateIndianMobileNumber("897654321"));//false
console.log(validateIndianMobileNumber("78965432107"));//false
