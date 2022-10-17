class Pacman {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.radius = 9;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0 , Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath(); 
  }

  newPosition() {
    this.draw();
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

class Ghosts extends Pacman {
    constructor(x, y) {
      super(x, y);
      this.radius = 9;
    }

    draw() {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      context.fillStyle = "red";
      context.fill();
      context.closePath(); 
    }

    newPosition() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

class Score {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 3;
  }
  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "white";
    context.fill();
    context.closePath(); 
  }
}