//To store y coordinates of the circles
var y=[]; 
//To find every 10th frame
var frames_count=0; 

//Diameter of the circle, increase or decrease as needed
var diameter=30;

function setup() {
createCanvas(400, 400);

}

function draw() {
//using a purple background 
background(235, 52, 198); 

//looping and drawing all circles using coordinates in y coordinate array
for(let i = 0; i < y.length; i++){

//using width/2 as x coordinate and y[i] as y coordinate
ellipse(width/2,y[i],diameter,diameter);

//moving coordinate 5 pixels down for next iteration
y[i]=y[i]+5;

}

//advancing frames count
frames_count=frames_count+1;

//if count is 10
if(frames_count==10){

//resetting count
frames_count=0;

//adding a new value to the y coordinate
//of top of the window, which is 0

y.push(0);

//if y coordinate has become too big, removing first (earliest) value

//from the y coordinate, just to keep it under control, we won't be seeing

//those circles that goes out of coordinates anyway, ignore if you dont want.

if(y.length>100){

y.shift();

}

}

}
