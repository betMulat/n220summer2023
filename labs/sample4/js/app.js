/*Create a page with four inputs, labeled x1, y1, x2, and Y2. Add one button labeled "calculate distance".
When the button is pressed, calculate the distance using the equation d = Math.sqrt( xDiff*xDiff + yDiff*yDiff); 
(xDiff and yDiff are the differences between the x points and y points, respectively)
let pointx1 = Number(pointx1.value);
    let pointy1 = Number(pointy1.value);
    let pointx2 = Number(pointx2.value);
    let pointy2 = Number(pointy2.value);

    let mathDistance = Math.sqrt(Math.Pow((pointx1-pointx2),2)+Math.Pow((pointy1-pointy2),2));
    
    dvResult.innerHTML = mathDistance;

The distance calculation MUST take place in a function that returns the value of the distance.*/
let x1 = document.getElementById("pointx1");
let x2 = document.getElementById("pointx2");
let y1 = document.getElementById("pointy1");
let y2 = document.getElementById("pointy2");

let divResult = document.getElementById("disResult");

function userInput() {
    let pointx1 = Number(x1.value);
    let pointx2 = Number(x2.value);
    let pointy1 = Number(y1.value);
    let pointy2 = Number(y2.value);

    let mathDistance = Math.sqrt(Math.pow((pointx1-pointx2),2)+Math.pow((pointy1-pointy2),2));

    divResult.innerHTML="The Calculated Distance:" + mathDistance;

}

