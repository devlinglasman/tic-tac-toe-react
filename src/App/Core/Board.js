//@format

import {EMPTY, P1, P2} from '../Constants';

export class Board {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.tiles = this.createTiles(gridSize);
  }

  createTiles = gridSize => {
    let newTiles = [];
    for (let i = 0; i < gridSize * gridSize; i++) {
      newTiles.push(EMPTY);
    }
    return newTiles;
  };

  placeMark = (mark, position) => {
    this.tiles[position] = mark;
  };
}
