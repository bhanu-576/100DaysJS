/* 
Sort an Array

? Write a function to sort an array of numbers in an ascending order

Example usage:
console.log(sortAscending([5,3,1,8])) // output [1,3,5,8]
*/

console.log(sortAscending([5,3,3,10,8]))
// console.log(typeof sortAscending[2])


/* Todo Requirements:
?The function should take an array of numbers as input.
? It should return a new array with the numbers sorted in ascending order.
? The original array should remain unchanged.
? You are not allowed to use the built-in sort() method
*/


function sortAscending(arr){
    let dupliArr = [...arr]
    let temp;

    for(i=0;i<dupliArr.length;i++){
        for(j=0;j<dupliArr.length;j++){
            if(dupliArr[i]<dupliArr[j]){
                temp = dupliArr[j]
                dupliArr[j]=dupliArr[i]
                dupliArr[i] = temp
            }
        }
    }
    return dupliArr
}