const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const player1 = new Pacman(50, 50, 25, 25);
const player2 = new Ghost(150, 150, 50, 50);


function updateGameArea() {
    const requestID = requestAnimationFrame(updateGameArea);
    context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    player1.newPosition();
    player2.newPosition();
    if((collisionWith(player1, player2))) {cancelAnimationFrame(requestID)};
}

updateGameArea();


function collisionWith(player, ghost) {
    // Check if two circles are colliding
        if(Math.hypot(
            ghost.x - player.x,
            ghost.y - player.y
        ) < ghost.radius + player.radius) {
            console.log('colliding');
            return true;
        }
}

// Players movements 

document.addEventListener("keydown", (event) => {
  console.log("I am working");
  switch (event.key) {
    case "ArrowUp":
     player1.speedY -= 1;
      break;
    case "ArrowDown":
      player1.speedY += 1;
      break;
    case "ArrowLeft":
      player1.speedX -= 1;
      break;
    case "ArrowRight":
      player1.speedX += 1;
      break;
    case "W":
    case "w":
        player2.speedY -= 1;
        break;
    case "A":
    case "a":
        player2.speedX -= 1;
        break;
    case "S":
    case "s":
        player2.speedY += 1;
        break;
    case "D":
    case "d":
        player2.speedX += 1;
        break;
  }
});
