//@format

import {EMPTY, P1, P2} from '../Constants';

export class Board {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.tiles = this.createTiles();
  }

  createTiles = () => {
    let newTiles = [];
    for (let i = 0; i < this.gridSize * this.gridSize; i++) {
      newTiles.push(EMPTY);
    }
    return newTiles;
  };

  placeMark = (mark, position) => {
    this.tiles[position] = mark;
  };

  full = () => {
    return !this.tiles.includes(EMPTY);
  };

  won = player => {};
}
