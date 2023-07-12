// Starting with empty list of array
var rectXY = []; 
function setup() {
  createCanvas(400, 400);
}

function draw() {
//using a purple background 
  background(235, 52, 198);

  noStroke();
  rectMode(CENTER);
  fill(255);
  //looping and drawing the rectangle 
  for (var i = 0; i < rectXY.length; i++) {
    fill(rectXY[i][2]);
    rect(rectXY[i][0], rectXY[i][1], 50, 25);
    rectXY[i][1] += 1;
  }
}
//Adding a new rectangle as the mouse clicked
function mousePressed() {
  rectXY.push([mouseX, mouseY, random(255)]);
}