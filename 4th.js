/*
Write a function called checkTriangleType that takes three parameters reprsenting the 
length of the sides of a triangle. The function should return a string indicatng 
the type of triangle : "equilateral", "isosceles" or "scalene".
*/

console.log(checkTriangleType(3,3,3))  //o/p equilteral
console.log(checkTriangleType(3,4,3))  //o/p "isosceless"
console.log(checkTriangleType(3,8,6))  //o/p scalene

/* Todo the function should adhere to the following rule:
? If all three sides are of equal length , return "equilateral".
? If only two sides are of equal length, return "isoscales".
? If all three sies have different length, return "scalene".
*/


function checkTriangleType(a,b,c){
    if(a===b&& b===c){
        return "equilateral triangle"
    } else{
        if(a===b||b===c||a===c){
            return "isosceless triangle"
        }
        else{
            return "scalene triangle"
        }

        
    }
}