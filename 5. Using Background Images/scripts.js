// Create grid
const grid = document.createElement('div');
grid.setAttribute('class', 'grid');
document.body.appendChild(grid);

// Create tiles
for (let y = 5; y > 0; y--) {
  for (let x = 1; x < 6; x++) {
    const tile = document.createElement('div');
    tile.setAttribute('data-y', y);
    tile.setAttribute('data-x', x);
    tile.setAttribute('class', 'tile');
    document.querySelector('.grid').appendChild(tile);
  }
}

// Create player
const initialPlayerLocation = document.querySelector('.tile');
initialPlayerLocation.setAttribute('class', 'player');
initialPlayerLocation.setAttribute('style', `background-image: url('./images/front.png'); background-position: center;`);

// Create wall
document.querySelector('[data-y="3"][data-x="2"]').setAttribute('class', 'wall');

// Move player
document.addEventListener("keydown", (event) => {
  const playerEl = document.querySelector('.player');

  const playerPosition = { ...playerEl.dataset};

  let playerImage; // Define a variable that we can store our image path in, based on how the player is moving

  // Move up
  if (event.key === "w") {
    playerPosition.y = +playerPosition.y + 1;
    playerImage = "./images/back.png";
  }
  // Move left
  if (event.key === "a") {
    playerPosition.x = +playerPosition.x - 1;
    playerImage = "./images/left.png";
  }
  // Move down
  if (event.key === "s") {
    playerPosition.y = +playerPosition.y - 1;
    playerImage = "./images/front.png";
  }
  // Move right
  if (event.key === "d") {
    playerPosition.x = +playerPosition.x + 1;
    playerImage = "./images/right.png";
  }
  
  const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);

  // If the player is trying to move to a valid location, move them
  // Otherwise, just update the player image to match the last pressed direction
  if (requestedPositionEl && !requestedPositionEl.classList.contains('wall')) {
    playerEl.setAttribute('class', 'tile');
    playerEl.setAttribute('style', `background-image: none`)
    requestedPositionEl.setAttribute('class', 'player');
    requestedPositionEl.setAttribute('style', `background-image: url('${playerImage}'); background-position: center;`)
  } else {
    playerEl.setAttribute('style', `background-image: url('${playerImage}'); background-position: center;`)
  }
})