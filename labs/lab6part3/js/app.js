let ball;

function setup() {
  createCanvas(400, 400);
  
  // Create a ball object
  ball = {
    x: width / 2,
    y: height / 2,
    size: 50,
    color: color("#fc031c"),
    velocityX: random(-5, 5),
    velocityY: random(-5, 5),
  };
}

function draw() {
  background("#fc03fc");
  
  // Update and display the ball
  updateBall(ball);
  displayBall(ball);
}

function updateBall(ball) {
  // Update ball's position based on velocity
  ball.x += ball.velocityX;
  ball.y += ball.velocityY;
  
  // Check if the ball hits the canvas edges
  if (ball.x + ball.size / 2 >= width || ball.x - ball.size / 2 <= 0) {
    ball.velocityX *= -1;
  }
  if (ball.y + ball.size / 2 >= height || ball.y - ball.size / 2 <= 0) {
    ball.velocityY *= -1;
  }
}

function displayBall(ball) {
  // Display the ball
  fill(ball.color);
  ellipse(ball.x, ball.y, ball.size);
}
