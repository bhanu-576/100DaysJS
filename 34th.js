/*---------------------
//* challenge: Remove Duplicates from an Array
 */

//? Write a function removeDuplicates that takes an array of elements as input and returns a new array with duplicate element removed.
  /* Constraints:
  ? The input arry may contain elements of any data type.
  ? The function should return a new array with duplicate elements removed, while preserving the order of elements from the original array
  ? You should use the provided removeDDuplicates function signature without any additional parameters.

   */

  const removeDuplicates = (arr)=>{
    let newArr =  new Set(arr);
    return [...newArr]
  }

  console.log(removeDuplicates([1,2,3,3,4,4,5])); //o/p:[1,2,3,4,5]
  console.log(removeDuplicates(["a","b","c","b","a"])); //o/p:[a,b,c,]
