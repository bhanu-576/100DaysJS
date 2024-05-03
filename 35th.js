/*Write a function isEmptyObject That takes an object as input and determines whether it is empty or not. Anempty object is deined as an object with no own properties.

*Your task is to implement the isEmptyObject function using js and return a message indicating whether the object is emty or not.



//* constrints

? The input object may have any number f properties, including zero.
? the function should return a message indicating whether the objet is empty or not.
? You should use the provided isEmptyObject function signature without any additional parameters.

*/

const isEmptyObject = (obj)=>{
    const value = String(Object.values(obj));

    return (value=== "" || value.trim()==="") ? "It's empty": "It's not";
}


console.log(isEmptyObject({name:"vinod",age:17})); //o/p: It's not
console.log(isEmptyObject({})); //o/p: It's empty
console.log(isEmptyObject({keyWithNull : null})); //o/p: It's empty
console.log(isEmptyObject({keyWithUndefined:undefined})); //o/p: It's empty

