'use strict';

window.addEventListener('load', () => {
  const grid = new Grid();
  const playMap = new PlayMap();
  const status = new Status();
  const game = new Game();

  grid.renderGrid();
  game.init(grid, status, playMap)
  game.initEventHandlers();
});