//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.ongoing = true;
    this.playerOneTurn = true;
  }

  computeMove = move => {
    if (this.playerOneTurn) {
      this.board.placeMark(P1, move);
    } else {
      this.board.placeMark(P2, move);
    }
    this.playerOneTurn = !this.playerOneTurn;
  };
}
