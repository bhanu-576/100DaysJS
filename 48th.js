//* Programming Challenge : Validate Hex Color Code
 //? Write a regular expression to validate a hex color code (e.g./#a3c113).
 /*
 *Requirements
 ?The hex color code should start with "#".
 ? It should be followed by either 3 or 6 hexadecimal characters.

 * Use Cases
 ? Validating color codes in design tools.
 ? Ensuring consistent color code format in CSS.
 ? Filtering vaid hex color codes in data processing.
 */



 const validateHexColor = (color)=>{
    const regEx = /^[#0-9a-f]+$/;
    if(color.length===4 || color.length===7)
    return regEx.test(color);
    return false

 }

 //* Test Cases

 console.log(validateHexColor("#a3c113")); //O/P:true
 console.log(validateHexColor("#800080")); //O/P:true
 console.log(validateHexColor("#1234567")); //O/P:false
 console.log(validateHexColor("a3c113")); //O/P:false
 console.log(validateHexColor("#g3c113")); //O/P:false
 console.log(validateHexColor("#000")); //O/P:true

