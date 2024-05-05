/*Programming Challenge : Simple Interese Calculation
 */
//? Write a function calculaateSimpleInterest that calculates the simple interest given the principal amount, rate of interest per annum, and time in years.

const calculateSimpleInterest =(P,R,T)=>{
    return (P*R*T)/100;
}


console.log(calculateSimpleInterest(1000,5,3));