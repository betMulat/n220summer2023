function setup() {
    //using 600x600 canvas size
    createCanvas(600, 600);
    //draw method will be executed only once.
    noLoop();
  }
  function draw() {
    //using a colored background
    background(151, 155, 161);
    //initial diameter
    var diameter=300;
    //looping as long as diameter is 5 or above
    while(diameter>=5){
      //drawing a circle centered at center of the window, with above diameter
      circle(300, 295, diameter);
      //subtracting 2 from diameter.
      diameter-=5;
    }
  }

