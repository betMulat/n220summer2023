//current x position of the circle and radius of the circle
var circleX; 
var radius=25; 

function setup() {
  //creating a 800x600 canvas
  createCanvas(800,600);
  //assigning 0 as x coordinate of the circle
  circleX=0;
  //using red as fill color
  fill(255,0,0);
}

function draw() {
  //using a gray-ish background
  background(117, 50, 168);


  //drawing a circle at x=circleX, y=height/2 (middle) and with diameter=radius*2
  circle(circleX, 300, 50);

  
  //adding 5 to the x value of circle and if it reaches width (800), wrapping
  //around from 0. so that circle will appear on far left when it reaches far right
  circleX=(circleX+5)%width;
}