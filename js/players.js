class Pacman {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.radius = 15;
    this.width = width;
    this.height = height;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
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

class Ghost extends Pacman {
  constructor(x, y, width, height) {
    super(x, y, width, height);
    this.radius = 15;
  }

  draw() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
  }
}