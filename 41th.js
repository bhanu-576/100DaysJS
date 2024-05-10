//* Programming Challenge : Simple Currency Converter

//? Write a function to convert an amount from one currency to another using static exchange rates.

/* Requirements:
? Write a function named convertCurrency that takes thre parameters:amount,fromCurrency, and toCurrency.
? Use a fixed object to store exchange rates relative to a base currency (e.g./ USD).
?The function should return the converted amount in the target currency.
? Handle conversion thorough USD as a base, meaning if converting from GBP to EUR, first convert GBP to USD, then USD to EUR.
 */

const rates = {
    USD :1, //Base Currency
    EUR : 0.9, // 1USD =0.9 EUR
    GBP : 0.8, // 1 USD = 0.8 GBP
    INR : 82, //1 USD =82 INR
}


const convertCurrency = (amount,fromCurrency,toCurrency)=>{
    //fromCurrency to USD
    let usd = amount / rates[fromCurrency];
    //from USD to toCurrency
    return usd*rates[toCurrency];
    }
    

//Example usage:
console.log(convertCurrency(100,"hvgh","INR"));