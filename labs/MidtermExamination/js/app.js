let player; //representing the player's spaceship
let aliens = [];  //representing the invaders
let bullets = [];  //representing bullets fired by bothe the player and aliens
let alienBulletProbability = 0.005;  //a probability value representing the chance of aliens firing bullets in each frame of game loop 
let score = 0;  //track the player's score 
let isGameOver = false;   //track whether the game is over or not

//create a player object 
function setup() {
player = {
      x : width / 2,
      y : height - 50,
      w : 50,
      h : 20,
     speed : 5,
    }
}
    function move() {
      // Movement control using left and right arrow keys
      if (keyIsDown(LEFT_ARROW) && x > 0) {
        x -= speed;
      }
      if (keyIsDown(RIGHT_ARROW) && x + w < width) {
        x += speed;
      }
    }
  
    function display() {
      // Drawing the player's spaceship
      fill(0, 255, 0);
      rect(x, y, w, h);
    }
  function setup() {
  aliens = {
      x : 2,
      y : 2,
      r : 20,
      xDir : 1,
      speed : 1,
    }
}
   function move() {
      // Horizontal movement and bouncing off the edges
      x += speed * xDir;
      if (x + r >= width || x - r <= 0) {
        xDir *= -1;
        y += 20; // Move down when hitting the edge
      }
    }
  
    function display() {
      // Drawing the aliens
      fill(255, 0, 0);
      ellipse(x, y, r * 2);
    }
  
  function draw() {
    // Game loop: runs continuously
  
    background(0);
  
    if (!isGameOver) {
      // Gameplay logic when the game is not over
  
      player.move();
      player.display();
  
      for (let alien of aliens) {
        alien.move();
        alien.display();
      }
    } else {
      // Gameplay logic when the game is over
      displayGameOver();
    }
    displayScore();
  }
  function move() {
    // Movement control using left and right arrow keys
    if (keyIsDown(LEFT_ARROW) && x > 0) {
      x -= speed;
    }
    if (keyIsDown(RIGHT_ARROW) && x + w < width) {
      x += speed;
    }
  }
  function display() {
    // Drawing the player's spaceship
    fill(0, 255, 0);
    rect(x, y, w, h);
  }
  function display() {
    // Drawing the aliens
    fill(255, 0, 0);
    ellipse(x, y, r * 2);
  }
  function keyPressed() {
    if (key === " ") {
      if (!isGameOver) {
        bullets.push(new Bullet(player.x, player.y, -1));
      }
    }
  }
  if (Math.random() < alienBulletProbability) {
    const randomAlien = Math.random(aliens);
    bullets.push(new Bullet(randomAlien.x, randomAlien.y, 1));
  }

  