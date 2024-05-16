//* Programming Challenge : Extract Numbers from a String
//? Write a regular expression to extract all numbers from a given string.

//* Requirements
//? Extract all numbers from a string.
//? Return the nubers as an array.

//* Use Cases
//? Parsing numerical data from text.
//? Extracting numeric values for calculations.
//? Filtering numbers from mixed content

const extractNumbers = (str)=>{
    let regEx = /[0-9]+/g;
    return str.match(regEx);
    console.log(ner);

}

console.log(extractNumbers("abc123def456"));//output:["123","456"]
console.log(extractNumbers("no numbers here")); //O/P:null