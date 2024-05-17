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

    //*Method 1

//  const validateHexColor = (color)=>{
//     const regEx = /^[#0-9A-Fa-f]+$/;
//     if(color.length===4 || color.length===7)
//     return regEx.test(color);
//     return false

//  }

 //*Method 2

 const validateHexColor = (hexColor)=>{
    const regEx = /^#([A-Fa-f\d]{3}|[A-fa-f\d]{6})$/
    return regEx.test(hexColor);
 }



 //* Test Cases

 console.log(validateHexColor("#a3c113")); //O/P:true
 console.log(validateHexColor("#fff")); //O/P:true
 console.log(validateHexColor("#1234567")); //O/P:false
 console.log(validateHexColor("a3c113")); //O/P:false
 console.log(validateHexColor("#g3c113")); //O/P:false
 console.log(validateHexColor("#000")); //O/P:true

