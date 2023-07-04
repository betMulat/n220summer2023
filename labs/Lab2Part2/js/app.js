let xPos = 0;
let yPos = 40;

let xSpeed = 2;
let ySpeed = 0;

function setup(){
    createCanvas(400, 300);
}


function draw() {
    background(62, 237, 108); 
    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    fill(19, 71, 26);

    if(xPos > 100) {
        fill(235, 64, 52);
        
    }

    if(xPos > 200) {
        fill(189, 32, 142);
    }
    
    
    circle(xPos, yPos, 25);
    
}