class Pacman {
  constructor({position, speed}) {
    this.position = position;
    this.speed = speed;
    this.radius = 9;
  }

  draw() {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath(); 
  }

  newPosition() {
    this.draw()
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;
  }
}

class Ghosts {
    constructor({
      position,
      speed,
      color,
      image,
    }) {
      this.position = position;
      this.speed = speed;
      this.radius = 9;
      this.color = color;
      this.prevCollisions = [];
    }

    draw() {
      context.beginPath();
      context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
      context.fillStyle = this.color;
      context.fill();
      context.closePath(); 
    }

    newPosition() {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    }
}

class Score {
  constructor({position}) {
    this.position = position;
    this.radius = 3;
  }
  draw() {
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, 0 , Math.PI * 2);
    context.fillStyle = "white";
    context.fill();
    context.closePath(); 
  }
}