//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.playerOneTurn = true;
  }

  playTurn = move => {
    this.makeMove(move);
    if (!this.finished()) {
      this.switchPlayer();
    }
  };

  tileFree = move => {
    return this.board.freeTile(move);
  };

  makeMove = move => {
    if (this.playerOneTurn) {
      this.board.placeMark(P1, move);
    } else {
      this.board.placeMark(P2, move);
    }
  };

  finished = () => {
    return this.board.full() || this.won();
  };

  switchPlayer = () => {
    this.playerOneTurn = !this.playerOneTurn;
  };

  won = () => {
    if (this.playerOneTurn) {
      return this.board.won(P1);
    } else {
      return this.board.won(P2);
    }
  };
}
