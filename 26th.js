/*
* Write a function to find the fibonacci number.
? The fibonacci series of numbers in which each number (Fibonacci number) is the sum of the two preceding ones. 
? It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. 
So, the Fibonacci series looks like this: 0,1,1,2,3,5,8,13,21,.....

*/
 //todo syntax : F(n)= F(n-1)+F(n-2), Where, F(1)= F(2)=1

 const fibonacci =(num)=>{
 if(num<=1)
 return num;
else
    return fibonacci(num-1)+fibonacci(num-2);
 }
 //Example Usage

 console.log(fibonacci(0));//o/p=0
 console.log(fibonacci(1));// o/p=1
 console.log(fibonacci(2));// o/p=1
 console.log(fibonacci(3));//o/p=2
 console.log(fibonacci(4));//o/p =3
 console.log(fibonacci(5));//o/p=5
 console.log(fibonacci(6));//o/p=5
 console.log(fibonacci(7));//o/p=5


