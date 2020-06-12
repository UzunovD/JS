"use strict";

class Grid {
  constructor() {
    this.gameGrid = document.getElementById('game')
  }
  renderGrid() {
    for (let row = 0; row < 3; row++) {
      const tr = document.createElement('tr');
      this.gameGrid.append(tr);
      for (let col = 0; col < 3; col++) {
        let td = document.createElement('td');
        td.dataset.row = row.toString();
        td.dataset.col = col.toString();
        tr.append(td);
      }
    }
  }

}