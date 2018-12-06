//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';
import {DumbCompPlayer} from './DumbCompPlayer';
import {UnbeatableComp} from './UnbeatableComp';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.isP1Turn = true;
    this.dumbComp = new DumbCompPlayer();
    this.uComp = new UnbeatableComp();
  }

  makeHumanMove = move => {
    this.board.placeMark(this.getActivePlayer(), move);
  };

  makeDumbCompMove = () => {
    const tilePick = this.dumbComp.pickCompTile(this.board);
    this.board.placeMark(this.getActivePlayer(), tilePick);
  };

  makeUCompMove = () => {
    const tilePick = this.uComp.pickCompTile(
      this.board,
      this.getActivePlayer(),
      this.getPassivePlayer(),
    );
    this.board.placeMark(this.getActivePlayer(), tilePick);
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
