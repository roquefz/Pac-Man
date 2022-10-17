const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const getScore = document.getElementById("score");
const player = new Pacman((25 + (25 / 2)), (25 + (25 / 2)), 25, 25);

const ghosts = [
  {
    clyde: new Ghosts((25 + (25 / 2)), (25 + (25 / 2))),
    blinky: new Ghosts((25 + (25 / 2)), (25 + (25 / 2))),
    pinky: new Ghosts((25 + (25 / 2)), (25 + (25 / 2))),
    inky: new Ghosts((25 + (25 / 2)), (25 + (25 / 2))),
  }
]

let collision = false;
let scoreCounter = 0;
let numberOfLifes = 3;

function updateGameArea() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  player.newPosition();
  const requestID = requestAnimationFrame(updateGameArea);

  barriers.forEach((barrier) => { 
    barrier.draw()
})
  scores.forEach((whiteDot, counter) => {   
    whiteDot.draw()  
    if (collisionWith(player, whiteDot)) {
      scoreCounter++;
      scores.splice(counter, 1);
      if(scores.length === 0) {
        getScore.innerHTML = 'You win! Game Over!';
        cancelAnimationFrame(requestID);
      } else {
        getScore.innerHTML = `${scoreCounter - 1}`;
      }
    }
  })
}

updateGameArea();

// function drawObjects() {
//   obstacles.forEach((obstacle) => {
//     obstacle.draw();
//     obstacle.y *= 1;
//     if(!handleCollision(obstacle)) {
//       obstacle.y = 1;
//     }
//   });
// }

// Check if two circles are colliding
function collisionWith(player, ghost) {
  if (
    Math.hypot(ghost.x - player.x, ghost.y - player.y) <
    ghost.radius + player.radius
  ) {
    return true;
  }
}

// Checks if a circle and a rectangle are colliding
function detectCollision(barrier, player) {
  return (
    player.y - player.radius + player.speedY <= barrier.y + barrier.height &&
    player.x + player.radius + player.speedX >= barrier.x &&
    player.y + player.radius + player.speedY >= barrier.y &&
    player.x - player.radius + player.speedX <= barrier.x + barrier.width
  );
}

function handleCollision(player) {
  collision = barriers.some((barrier) => {
    return detectCollision(barrier, player);
  });
  return collision;
}

document.addEventListener("keydown", (event) => {
  // console.log("I am working");
  let tempPlayer;
  let tempPlayer2;
  switch (event.key) {
    case "ArrowUp":
      tempPlayer = { ...player };
      tempPlayer.y -= 5;
      if (!handleCollision(tempPlayer)) {
        player.y -= 5;
      }

      break;
    case "ArrowDown":
      tempPlayer = { ...player };
      tempPlayer.y += 5;
      if (!handleCollision(tempPlayer)) {
        player.y += 5;
      }

      break;
    case "ArrowLeft":
      tempPlayer = { ...player };
      tempPlayer.x -= 5;
      if (!handleCollision(tempPlayer)) {
        player.x -= 5;
      }

      break;
    case "ArrowRight":
      tempPlayer = { ...player };
      tempPlayer.x += 5;
      if (!handleCollision(tempPlayer)) {
        player.x += 5;
      }

      break;
  }
});
