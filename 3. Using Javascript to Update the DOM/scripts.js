document.addEventListener("keydown", (event) => {
  const playerEl = document.querySelector('.player');

  const playerPosition = { ...playerEl.dataset};

  if (event.key === "w") 
    playerPosition.y = +playerPosition.y + 1;
  if (event.key === "a") 
    playerPosition.x = +playerPosition.x - 1;
  if (event.key === "s") 
    playerPosition.y = +playerPosition.y - 1;
  if (event.key === "d") 
    playerPosition.x = +playerPosition.x + 1;
  
  const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);

  if (requestedPositionEl) {
    playerEl.setAttribute('class', 'tile');
    requestedPositionEl.setAttribute('class', 'player');
  }
})