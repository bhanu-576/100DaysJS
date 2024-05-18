//* Programming Challenge : Date Validation

//? Write a function named isValidDate that takes a single string input representing a date and determines if it is a valid date in the format
//? MM/DD/YYYY. The valid date range should be from january 1, 1900,to December 31, 2099.

//todo Requirements:
//* Format Check : The date must strictle follow the MM/DD/YYYY format . Ensure that slashes (/) are used as seprators.
//? Month Validation : Valid months are from 01(january) to 12 (december).
//? Day Validation : Days should be valid according to the month:
//? 01-31 for January,March,May,July,Augest,October,December.
//? 01-30 for Aprail,June,September,November.
//? 01-28 for february in common years, and 01-29 for February in leap years.
//? Year Validation: Year should be within the range from 1900 to 2099.


//Test Cases
console.log(isValidDate("12/15/2021"));
console.log(isValidDate("02/29/2021"));
console.log(isValidDate("04/31/2020"));
console.log(isValidDate("11/01/1800"));
console.log(isValidDate("13/01/2000"));
console.log(isValidDate("12/31/2099"));

//* Constraints
//? Do not use date parsing libraries: the objective is to validate using regular expressions and conditional logic.


function isValidDate(date){
    return /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[0-1])\/((19|20)[0-9]{2})$/.test(date);

}