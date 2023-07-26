//variable to hold the points 
let x1 = document.getElementById("pointx1");
let x2 = document.getElementById("pointx2");
let y1 = document.getElementById("pointy1");
let y2 = document.getElementById("pointy2");

let divResult = document.getElementById("disResult");

function userInput() {
    let pointx1 = Number(x1.value); //the first x value
    let pointx2 = Number(x2.value); //the second x value
    let pointy1 = Number(y1.value); //the first y value
    let pointy2 = Number(y2.value); //the second y value

    let xdiff = pointx1-pointx2;   //subtract point2 from point 1
    let ydiff = pointy1-pointy2;   //subtract point 2 from point 1
    let mathDistance = Math.sqrt((xdiff*xdiff)+(ydiff*ydiff)); //calculate the distance

    divResult.innerHTML="The Calculated Distance:" + mathDistance; //return the calculated distance

}