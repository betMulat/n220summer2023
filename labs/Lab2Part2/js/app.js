function setup() {
    createCanvas(400, 300);
}
var diameter = 20;

function draw() {
    background(137, 132, 217);

    if(mouseX>200){
        fill(222, 27, 9);
        circle(mouseX, mouseY, diameter);
    }
    else{
        fill(15, 17, 150);
        circle(mouseX, mouseY, diameter);
    }
}
