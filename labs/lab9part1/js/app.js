//create a variable that hold the imported document
let text = document.getElementById("numbers");
let sum = document.getElementById("sum");
let avg = document.getElementById("avg");
//onclick function takes the input and return the result 
function myFunction() {
    let x =document.getElementById("numbers").value;  
    let arr=x.split(",");   //split the list into an array of numbers 
    let sum=0; //let the sum start with 0
    let avg=0;  //let eh average start with 0
  //for loop to go through all the numbers in the array
  for(i=0;i<arr.length;i++){
  	sum += parseInt(arr[i]); //get the sum 
  }
  avg=sum/arr.length; //get the average 
  //final outputs 
  document.getElementById("sum").innerHTML = "The Sum is: "+sum;
  document.getElementById("avg").innerHTML = "The Average is: "+avg;
  
}
