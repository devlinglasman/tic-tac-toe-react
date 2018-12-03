//@format

import {Board} from './Board';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.ongoing = true;
    this.playerOneTurn = true;
  }

  computeMove = move => {
    if (this.playerOneTurn) {
      this.board.placeMark('X', move);
    } else {
      this.board.placeMark('O', move);
    }
    this.playerOneTurn = !this.playerOneTurn;
  };
}
