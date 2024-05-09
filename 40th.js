//* Programming Challenge : Simple Bar Chart from Array Data

//? Create a function generateBarChart that takes an array of numbers and generates a simple text-based bar chart.

const generateBarChart = (arr)=>{
    let newArr = [];
    let vat =[];
    for(let bar of arr){
        vat =[]
        for(i=0;i<bar;i++){
            vat.push("*")
        }  
        newArr.push(vat.join(""))    

    }
    return newArr;
}
console.log(generateBarChart([5,3,9,2]));
