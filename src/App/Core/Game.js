//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';
import {DumbCompPlayer} from './DumbCompPlayer';

export class Game {
  constructor(gridSize) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.playerOneTurn = true;
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

  isFinished = player => {
    return this.board.full() || this.won(player);
  };

  switchPlayer = () => {
    this.playerOneTurn = !this.playerOneTurn;
  };

  won = player => {
    if (player === P1) {
      return this.board.won(P1);
    } else {
      return this.board.won(P2);
    }
  };

  isHumanMove = () => {
    return this.playerOneTurn;
  };
}
