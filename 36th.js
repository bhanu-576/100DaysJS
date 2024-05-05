/*  Programming Challenge: Convert Object to Array and Vice Versa */
//* Your Task is to implement two function:

/*
* Convert Object to Array: Write a function objectToArray that takes an object as input and returns an array of key-value pairs, where each clement in the array is an array with two elements: the key and the corresponding value from the object.

* Convert Array to Object : Write a function arrayToObject that takes an array of key-value pairs (as returned by the objectToArray function) and returns a new object with the keys and values from the array.

? Ensure that the conversion functions work correctly for objects with various data types as values, such as strings, numbers, and objects.

*/

//* Constraints:
/*
? The input object may contain properties of any data type.
? The input array must contain arrays with exactly two elements(key-value pairs).
? The output object should have properties in the same order as the original object.
? You should use the provided function signatures (objectToArray and arrayToObject) without any additional parameters.
*/


const obj = {
    name: "Bhanu Sharma",
    age: 25,
    city : "mathura",
}


// Convert the object to an array of key-value pairs.

function objectToArray(obj){
    let arr =[]
   for(const elem of Object.entries(obj))
   arr.push(elem)
console.log(arr);
    return arr;
}
const array = objectToArray(obj);

arrayToObject(array);
// * Array to object
function arrayToObject(array){

    let obj = Object.fromEntries(array);
    console.log(obj);
}