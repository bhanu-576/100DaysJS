/* 
* Programming Challenge: Number of days between two dates
 */

//? Write a function calculateDaysBetweenDates that calculates the number of days between two dates. The dates will be provided in the format "yyyy-MM-DD".
// Hint
// Days = 24*60*60*1000

const calculateDaysBetweenDates = (date1,date2)=>{
    let d1 = new Date(date1);
    let d2 = new Date(date2);
    let diff = Math.abs(d2-d1);
    return diff/(24*60*60*1000)
  
}


console.log(calculateDaysBetweenDates("2023-01-01","2024-01-31")); //Output:30