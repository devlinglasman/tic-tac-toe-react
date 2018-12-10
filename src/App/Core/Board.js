//@format

import {EMPTY, P1, P2} from '../Constants';
import {hasPlayerWon} from './BoardWinAnalyser';

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

  isFinished = () => {
    return this.isFull() || this.isWon(P1) || this.isWon(P2);
  };

  isFull = () => {
    return !this.tiles.includes(EMPTY);
  };

  isWon = player => {
    return hasPlayerWon(this.tiles, player);
  };

  freeTile = move => {
    return this.tiles[move] === EMPTY;
  };

  boardLength = () => {
    return this.tiles.length;
  };

  getEmptyTiles = () => {
    let emptyTiles = [];
    for (let i = 0; i < this.tiles.length; i++) {
      if (this.tiles[i] === EMPTY) {
        emptyTiles.push(i);
      }
    }
    return emptyTiles;
  };

  copySelf = () => {
    const newBoard = new Board(this.gridSize);
    newBoard.tiles = this.copyTiles();
    return newBoard;
  };

  copyTiles = () => {
    return this.tiles.slice();
  };
}
