/**
 Write a function arraysAreEqual that takes two arrays 
 arr1 and arr2 as input and returns true if the arrays are 
 equal (i.e., contain the same elements in the same order),
 and false otherwise.
 */

 //function ssimple method

//  const arraysAreEqual = (arr1,arr2)=>{
//     if(arr1.length != arr2.length)
//     return false
//     let flag = true

//     for(i=0;i<arr1.length;i++){
//         if(arr1[i]===arr2[i])
//         flag = true
//         else
//         flag = false
//     }
//     if(flag===true)
//     return true
//     return false
    
//  }

 // every method
 const arraysAreEqual = (arr1,arr2)=>{
        if(arr1.length != arr2.length)
        return false
    return arr1.every((currVal,index)=> currVal===arr2[index])

 }





 // Example usage:

 console.log(arraysAreEqual([1,2,3],[1,2,3,9])); // output : true
 console.log(arraysAreEqual([1,2,3],[1,2,4,7])); // output : false
 console.log(arraysAreEqual([],[])); // output : true

 // note: 
 // the function should return false if the arrays have
 // different length
//  The function should comare each element of arr1 with
//  the corresponding element in arr2.
// the function should return true only if all elements in arr1 are equal to their corresponding element in arr2