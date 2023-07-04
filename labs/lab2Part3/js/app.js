let xPos = 0;
let yPos = 0;

let xSpeed = 2;
let ySpeed = -2;
function setup(){
    createCanvas(400, 300);
}


function draw() {
    background(194, 178, 134); //clear to black 
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    ySpeed = ySpeed + 0.4;
    fill(7, 66, 15);
    circle(yPos, xPos, 25);
    
}