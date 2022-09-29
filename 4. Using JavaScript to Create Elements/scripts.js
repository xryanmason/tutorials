// Create grid
// Equivalent to <div class="grid"></div>
const grid = document.createElement('div'); // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
grid.setAttribute('class', 'grid');
document.body.appendChild(grid); // https://developer.mozilla.org/en-US/docs/Web/API/Element/append

// Create tiles
// Equivalent to <div data-y="1" data-x="1" class="tile"></div>
for (let y = 5; y > 0; y--) { // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for
  for (let x = 1; x < 6; x++) {
    const tile = document.createElement('div');
    tile.setAttribute('data-y', y);
    tile.setAttribute('data-x', x);
    tile.setAttribute('class', 'tile');
    document.querySelector('.grid').appendChild(tile);
  }
}

// Create player
// Equivalent to <div data-y="1" data-x="1" class="player"></div>
document.querySelector('.tile').setAttribute('class', 'player');

// Create wall
// Equivalent to <div data-y="3" data-x="2" class="wall"></div>
document.querySelector('[data-y="3"][data-x="2"]').setAttribute('class', 'wall');

// Move player
document.addEventListener("keydown", (event) => {
  const playerEl = document.querySelector('.player');

  const playerPosition = { ...playerEl.dataset};

  // Move up
  if (event.key === "w") 
    playerPosition.y = +playerPosition.y + 1;
  // Move left
  if (event.key === "a") 
    playerPosition.x = +playerPosition.x - 1;
  // Move down
  if (event.key === "s") 
    playerPosition.y = +playerPosition.y - 1;
  // Move right
  if (event.key === "d") 
    playerPosition.x = +playerPosition.x + 1;
  
  const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);

  // If the player is trying to move to a valid location, move them
  // ! - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
  // classList - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
  if (requestedPositionEl && !requestedPositionEl.classList.contains('wall')) {
    playerEl.setAttribute('class', 'tile');
    requestedPositionEl.setAttribute('class', 'player');
  }
})