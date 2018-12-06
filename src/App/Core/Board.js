//@format

import {EMPTY, P1, P2} from '../Constants';
import {BoardWinAnalyser} from './BoardWinAnalyser';

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

  isWon = player => {
    const bWA = new BoardWinAnalyser(this.tiles, player);
    return bWA.anyLineIsWinning();
  };

  freeTile = move => {
    return this.tiles[move] === EMPTY;
  };

  boardLength = () => {
    return this.tiles.length;
  };
}
