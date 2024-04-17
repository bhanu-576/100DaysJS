/*
? Write a function findMedian(arr) that takes an array of numbers as input and return the median value.
If the array an even number of elements, return the average of the two middle values.


? todo tips
 If the array has an odd number of elements, the median is the middle element.
 If the array has an even numberof elements, the median is the average of the two middle elemenys.*/

 const findMedian = (arr)=>{
    let add =0;
    arr = arr.sort((a,b)=> a-b);
    if(arr.length%2==0){
        add= arr.length/2;
        add = arr[add]+ arr[add+1];
        return Math.floor(add/2);}
     else {
        return arr[Math.floor(arr.length/2)]
     }
 }



 console.log(findMedian([1,3,1,3,4,5,7,6,8]));