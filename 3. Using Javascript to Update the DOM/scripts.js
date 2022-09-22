document.addEventListener("keydown", (e) => {
  const playerEl = document.querySelector('.player');

  const playerPosition = { ...playerEl.dataset};

  if (e.key === "w") 
    playerPosition.y = +playerPosition.y + 1;
  if (e.key === "a") 
    playerPosition.x = +playerPosition.x - 1;
  if (e.key === "s") 
    playerPosition.y = +playerPosition.y - 1;
  if (e.key === "d") 
    playerPosition.x = +playerPosition.x + 1;
  
  const requestedPositionEl = document.querySelector(`[data-x="${playerPosition.x}"][data-y="${playerPosition.y}"]`);

  if (requestedPositionEl) {
    playerEl.setAttribute('class', 'tile');
    requestedPositionEl.setAttribute('class', 'player');
  }
})