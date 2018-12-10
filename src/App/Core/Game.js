//@format

import {Board} from './Board';
import {P1, P2} from '../Constants';
import {UnbeatableComp} from './UnbeatableComp';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.isP1Turn = true;
    this.uComp = new UnbeatableComp();
  }

  makeHumanMove = move => {
    this.board.placeMark(this.getActivePlayer(), move);
  };

  makeUCompMove = () => {
    const tilePick = this.uComp.pickCompTile(
      this.board.copySelf(),
      this.getActivePlayer(),
    );
    this.board.placeMark(this.getActivePlayer(), tilePick);
  };

  isTileFree = move => {
    return this.board.freeTile(move);
  };

  isFinished = () => {
    return this.board.isFull() || this.isWon();
  };

  switchPlayer = () => {
    this.isP1Turn = !this.isP1Turn;
  };

  isWon = () => {
    return this.board.isWon(P1) || this.board.isWon(P2);
  };

  getActivePlayer = () => {
    if (this.isP1Turn) {
      return P1;
    } else {
      return P2;
    }
  };

  getPassivePlayer = () => {
    if (this.isP1Turn) {
      return P2;
    } else {
      return P1;
    }
  };
}
