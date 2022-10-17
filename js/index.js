const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const getScore = document.getElementById("score");


// Player and ghost

const player = new Pacman( {
  position: {
    x: (25 + (25 / 2)),
    y: (25 + (25 / 2))
  },
  speed: {
    x: 0,
    y: 0
  }
 });


const ghosts = [ 
  new Ghosts({
    position: {
      x: (25 + (25 / 2)),
      y: (25 * 18 + (25 / 2))
    },
    speed:  {
      x: 0,
      y: -1
    },
     color: "#FF0000",
  }),
  new Ghosts({
    position: {
      x: (25 * 18 + (25 / 2)),
      y: (25 + (25 / 2))
    },
    speed:  {
      x: 0,
      y: 1
    },
     color: "#FFB8FF",
  }),
  new Ghosts({
    position: {
      x: (25 * 10 + (25 / 2)),
      y: (25 * 3 + (25 / 2))
    },
    speed:  {
      x: 1,
      y: 0
    },
     color: "#00FFFF",
  }),
  new Ghosts({
    position: {
      x: (25 * 10 + (25 / 2)),
      y: (25 * 15+ (25 / 2))
    },
    speed:  {
      x: -1,
      y: 0
    },
     color: "#FFB852",
  }),
];


// HP and Score

let scoreCounter = 0;
let numberOfLifes = 3;

// Keyboard keys for player movement

const keys = {
  ArrowUp: {
    pressed: false
  },
  ArrowDown: {
    pressed: false
  },
  ArrowLeft: {
    pressed: false
  },
  ArrowRight: {
    pressed: false
  }
}
let prevKey = '';

function updateGameArea() {
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  player.newPosition();
  
  playerMovement() 
  const requestID = requestAnimationFrame(updateGameArea);

  ghosts.forEach(ghost => {
    ghost.draw();
    ghost.newPosition();

    barriers.forEach((barrier) => { 
      barrier.draw()
      if ((ghost.speed.y === 1 || ghost.speed.y === -1) && detectCollision({
        barrier: barrier,
        player: ghost,
      })) {
        ghost.speed.x = 0;
        ghost.speed.y *= -1
      }
      if ((ghost.speed.x === 1 || ghost.speed.x === -1) && detectCollision({
        barrier: barrier,
        player: ghost,
      })) {
        ghost.speed.x *= -1;
        ghost.speed.y = 0
      }
    })
  })

  // Map boundaries and collisions
  barriers.forEach((barrier) => { 
    barrier.draw()
    if(detectCollision({
      barrier: barrier,
      player: player,
    })) {
      player.speed.x = 0;
      player.speed.y = 0
    }
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

// Animate player movement
function playerMovement() {
  if (keys.ArrowUp.pressed && prevKey === 'ArrowUp') {
    player.speed.y = -1;
  } else if (keys.ArrowDown.pressed && prevKey === 'ArrowDown') {
    player.speed.y = 1;
  } else if (keys.ArrowLeft.pressed && prevKey === 'ArrowLeft') {
    player.speed.x = -1;
  } else if (keys.ArrowRight.pressed && prevKey === 'ArrowRight') {
    player.speed.x = 1;
  }
}

// Check if two circles are colliding
function collisionWith(firstCircle, secondCircle) {
  if (
    Math.hypot(secondCircle.position.x - firstCircle.position.x, secondCircle.position.y - firstCircle.position.y) <
    secondCircle.radius + firstCircle.radius
  ) {
    return true;
  }
}

// Checks if a circle and a rectangle are colliding
function detectCollision({
  barrier,
  player
}) {
  return (
    player.position.y - player.radius + player.speed.y <= barrier.y + barrier.height &&
    player.position.x + player.radius + player.speed.x >= barrier.x &&
    player.position.y + player.radius + player.speed.y >= barrier.y &&
    player.position.x - player.radius + player.speed.x <= barrier.x + barrier.width
  );
}

// Event Listeners for player movement

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = true;
      prevKey = 'ArrowUp';
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = true;
      prevKey = 'ArrowDown';
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = true;
      prevKey = 'ArrowLeft';
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = true;
      prevKey = 'ArrowRight';
      break;
  }
});


document.addEventListener("keyup", (event) => {
  switch (event.key) {
    case "ArrowUp":
      keys.ArrowUp.pressed = false;
      break;
    case "ArrowDown":
      keys.ArrowDown.pressed = false;
      break;
    case "ArrowLeft":
      keys.ArrowLeft.pressed = false;
      break;
    case "ArrowRight":
      keys.ArrowRight.pressed = false;
      break;
  }
});
