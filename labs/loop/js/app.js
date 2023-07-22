/*function setup() {
    createCanvas(1500,1500);
}

function draw(){
    background(100);
    
var y=100;
//25 black circle 
for(var i = 0; i<25; ++i){
    let x = i*50
    
    // when the iterand is divisible by3, draw a purple circle instead
     if(i%5 == 0 && i%3 == 0){
        fill(9, 12, 99);
        square(x, y, 50);
        }
   
    
    //when the iterand is divisible by 5 draw a green square 
    else if(i%5 == 0){
        fill(9, 99, 15);
        square(x, y, 50);

    }
    //when the iterand is divisible by 3 and 5, draw a blue square instead
    
    else if(i%3 == 0){
        fill(166, 13, 168);
        ellipse(x+25, y+25, 50, 50);

    }
    //else fill black 
    else{
        fill(0);
        ellipse(x+25, y+25, 50, 50);
    }

}

}
*/
/*****use a loop to draw 25 black circle to the screen, oriented horizontally  */
/**requirement 
 * 1. when the iterand is divisible by3, draw a purple circle instead
 * 2. when the iterand is divisible by 5, draw a green square instead 
 * 3. wehn the iterand is divisible by 3 and 5, draw a blue square instead
 */
/*Using nested loops(one within the other recreate this composition with only one line having a drawing commannd oon it )*/
function setup() {
    createCanvas(1500,1500);
}

function draw(){
    background(100);
    
var y=60;
//25 black circle 
for(var i = 0; i<4; ++i){
    let x = i*40
    fill(191, 6, 12);
    square(x, y, 50);
    for(var j=0; j<3; ++j){
        let t = j*40
        fill(191, 6, 12);
        square(j, y, 50);
    }

}
}
/*
function setup() {
    createCanvas(400,300);
}
    noFill();
function draw(){
    background(100);
    for(var i = 0; i<25; i++){
    //fill(0);
    circle (200, 150,i*2);
    }
    
}
*/