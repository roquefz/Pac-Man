class Pacman {
  constructor({position, speed}) {
    this.position = position;
    this.speed = speed;
    this.radius = 10;
    this.radians = 0.75;
    this.animationRate = 0.12;
    this.rotation = 0;

  }

  draw() {
    context.save();
    context.translate(this.position.x, this.position.y);
    context.rotate(this.rotation)
    context.translate(-this.position.x, -this.position.y);
    context.beginPath();
    context.arc(this.position.x, this.position.y, this.radius, this.radians, Math.PI * 2 - this.radians);
    context.lineTo(this.position.x, this.position.y);
    context.fillStyle = "yellow";
    context.fill();
    context.closePath(); 
    context.restore();
  }

  newPosition() {
    this.draw()
    this.position.x += this.speed.x;
    this.position.y += this.speed.y;

    // Pacman animation

    if(this.radians < 0 || this.radians > 0.75) {
      this.animationRate = -this.animationRate;
    }
    this.radians += this.animationRate;
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

class Audio {
  constructor(src) {
    this.src = src;
    this.sound = document.createElement("audio");
  }
  
  createElement() {
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }

  stop() {
    this.sound.pause();
  }
}