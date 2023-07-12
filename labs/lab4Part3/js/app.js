var radius = 20;
//filling the position x with 11 zeros
var x = [0,0,0,0,0,0,0,0,0,0,0];
//filling the position y with 11 zeros
var y = [0,0,0,0,0,0,0,0,0,0,0];

function setup() {
createCanvas( 400, 400 );
}

function draw() {
//To remove an element from the front of an array we use shift 
x.shift();
//To add elements to the end of an Array
x.push(mouseX);
//To remove an element from the from of an array we use shift 
y.shift();
//To add elements to the end of an Array
y.push(mouseY);

//using a purple background 
background(235, 52, 198);

//looping and drawing all circles at position x and y
for(let i=0;i<10;i++){
ellipse( x[i], y[i], radius, radius );
}
}