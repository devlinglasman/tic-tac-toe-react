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
    toggleInput,
    doReset,
  ) {
    this.gridSize = gridSize;
    this.board = new Board(gridSize);
    this.gameMode = gameMode;
    this.players = this.setPlayers();
    this.isP1Turn = true;
    this.updateBoard = updateBoard;
    this.announceWin = announceWin;
    this.announceTie = announceTie;
    this.toggleInput = toggleInput;
    this.doReset = doReset;
  }

  setPlayers() {
    if (this.gameMode.includes('hvh')) {
      return {
        playerOne: {mark: P1, getTile: () => this.awaitHumanInput()},
        playerTwo: {mark: P2, getTile: () => this.awaitHumanInput()},
      };
    } else if (this.gameMode.includes('hvc')) {
      return {
        playerOne: {mark: P1, getTile: () => this.awaitHumanInput()},
        playerTwo: {mark: P2, getTile: () => this.makeCompMove()},
      };
    } else if (this.gameMode.includes('cvh')) {
      return {
        playerOne: {mark: P1, getTile: () => this.makeCompMove()},
        playerTwo: {mark: P2, getTile: () => this.awaitHumanInput()},
      };
    } else {
      return {
        playerOne: {mark: P1, getTile: () => this.makeCompMove()},
        playerTwo: {mark: P2, getTile: () => this.makeCompMove()},
      };
    }
  }

  run() {
    this.getActivePlayer().getTile();
  }

  playTurn(move) {
    this.board.placeMark(this.getActivePlayer().mark, move);
    this.updateBoard();
    if (this.isFinished()) {
      this.announceResult();
    } else {
      this.doReset();
      this.switchPlayer();
      this.getActivePlayer().getTile();
    }
  }

  awaitHumanInput() {
    this.toggleInput();
  }

  makeCompMove() {
    const tilePicked = pickCompTile(
      this.board.copySelf(),
      this.getActivePlayer().mark,
    );
    setTimeout(() => {
      this.playTurn(tilePicked);
    }, 1000);
  }

  announceResult() {
    if (this.isWon()) {
      this.announceWin(this.getActivePlayer().mark);
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
      return this.players.playerOne;
    } else {
      return this.players.playerTwo;
    }
  };
}
