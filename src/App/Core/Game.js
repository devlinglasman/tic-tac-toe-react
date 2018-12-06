//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';
import {DumbCompPlayer} from './DumbCompPlayer';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.isP1Turn = true;
    this.compPlayer = new DumbCompPlayer();
  }

  makeHumanMove = move => {
    this.board.placeMark(P1, move);
  };

  makeCompMove = () => {
    const tilePick = this.compPlayer.pickCompTile(this.board);
    this.board.placeMark(P2, tilePick);
  };

  isTileFree = move => {
    return this.board.freeTile(move);
  };

  isFinished = () => {
    return this.board.full() || this.isWon();
  };

  switchPlayer = () => {
    this.isP1Turn = !this.isP1Turn;
  };

  isWon = () => {
    return this.board.isWon(P1) || this.board.isWon(P2);
  };

  isHumanMove = () => {
    return this.isP1Turn;
  };
}
