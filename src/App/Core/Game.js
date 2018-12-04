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

  playTurn = move => {
    if (this.playerOneTurn) {
      this.board.placeMark(P1, move);
    } else {
      this.board.placeMark(P2, move);
    }
    if (this.board.full() || this.won()) {
      this.ongoing = false;
    } else {
      this.playerOneTurn = !this.playerOneTurn;
    }
  };

  won = () => {
    if (this.playerOneTurn) {
      return this.board.won(P1);
    } else {
      return this.board.won(P2);
    }
  };
}
