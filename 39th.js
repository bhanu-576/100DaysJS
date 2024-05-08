//* Programming Challenge : Calculate Age from birthDate

/* 
? Create a function calculateAge that takes a birthDate as input and returns the current age of the person. The birthDate will be provided in the format "YYYY-MM-DD".
* Requirements:
? The function must handle leap years and varying numbers of days in each month accurately.
 ? Consider the timezone difference and ensure the age is calculated based on the current date in your local time zone.
 ? The output should be the age in whole years.
*/


const calculateAge = (d1)=>{
    let currentDate = new Date();
    let givenDate = new Date(d1);
    let age = currentDate.getFullYear() - givenDate.getFullYear();

    let monthDiff = currentDate.getMonth()- givenDate.getMonth();

    if(monthDiff<0 || monthDiff === 0 && currentDate.getDate()<givenDate.getDate()){
        age--;
    }
    return age;
}
console.log(calculateAge("1990-05-14")); // Output will vary depending on the current date

//todo Hint
//? Checks  If the current month is less than the birth month or if it's the same month but today's date is before the birth dath . If either condition is true, it subtract one from the age because the birthday has not yet occured this year.