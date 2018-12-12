//@format

import {Board} from './Board';
import {P1, P2} from '../Constants';
import {pickCompTile} from './UnbeatableComp';

export class Game {
  constructor(
    gridSize,
    gameMode,
    updateBoard,
    announceWin,
    announceTie,
    switchClicks,
  ) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.gameMode = gameMode;
    this.isP1Turn = true;
    this.updateBoard = updateBoard;
    this.announceWin = announceWin;
    this.announceTie = announceTie;
    this.switchClicks = switchClicks;
  }

  run() {
    this.switchClicks();
  }

  makeMove(move) {
    this.switchClicks();
    this.board.placeMark(this.getActivePlayer(), move);
    this.updateBoard();
    if (this.isFinished()) {
      this.announceResult();
    } else {
      this.updateBoard();
      this.switchPlayer();
      this.switchClicks();
    }
  }

  makeCompMove() {
    const tilePicked = pickCompTile(
      this.board.copySelf(),
      this.getActivePlayer(),
    );
    this.board.placeMark(tilePicked);
    this.runTurnEnd();
  }

  announceResult() {
    if (this.isWon()) {
      this.announceWin(this.getActivePlayer());
    } else {
      this.announceTie();
    }
  }

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
