//@format

import {P1, P2} from '../Constants';

export class UnbeatableComp {
  pickCompTile = (board, activePlayer) => {
    const emptyTiles = board.getEmptyTiles();

    return this.maximise(board, emptyTiles, activePlayer, true, 0);
  };

  maximise = (board, emptyTiles, activePlayer, isTopLevel, depth) => {
    let scores = [];
    for (let i = 0; i < emptyTiles.length; i++) {
      const nextBoard = this.simulateNextBoard(
        board,
        emptyTiles[i],
        activePlayer,
      );
      let nextScore;
      if (nextBoard.isFinished()) {
        nextScore = this.scoreTerminalBoard(nextBoard, activePlayer, depth);
      } else {
        const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
        nextScore = this.minimise(
          nextBoard,
          nextBoardEmptyTiles,
          this.getOtherPlayer(activePlayer),
          depth + 1,
        );
      }
      scores.push(nextScore);
    }
    if (isTopLevel) {
      return this.getTileOfMaxScore(emptyTiles, scores);
    } else {
      return Math.max(...scores);
    }
  };

  minimise = (board, emptyTiles, activePlayer, depth) => {
    let scores = [];
    for (let i = 0; i < emptyTiles.length; i++) {
      const nextBoard = this.simulateNextBoard(
        board,
        emptyTiles[i],
        activePlayer,
      );
      let nextScore;
      if (nextBoard.isFinished()) {
        nextScore = this.scoreTerminalBoard(
          nextBoard,
          this.getOtherPlayer(activePlayer),
          depth,
        );
      } else {
        const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
        nextScore = this.maximise(
          nextBoard,
          nextBoardEmptyTiles,
          this.getOtherPlayer(activePlayer),
          false,
          depth + 1,
        );
      }
      scores.push(nextScore);
    }
    return Math.min(...scores);
  };

  simulateNextBoard = (board, move, player) => {
    const nextBoard = board.copySelf();
    nextBoard.placeMark(player, move);
    return nextBoard;
  };

  scoreTerminalBoard = (board, activePlayer, depth) => {
    if (board.isWon(activePlayer)) {
      return 1000 - depth;
    } else if (board.isWon(this.getOtherPlayer(activePlayer))) {
      return depth - 1000;
    } else {
      return 0;
    }
  };

  getTileOfMaxScore = (tiles, scores) => {
    const maxScore = Math.max(...scores);
    const indexAtMax = score => {
      for (let i = 0; i < scores.length; i++) {
        if (maxScore === scores[i]) {
          return i;
        }
      }
    };
    return tiles[indexAtMax(scores)];
  };

  getOtherPlayer = currentPlayer => {
    return currentPlayer === P1 ? P2 : P1;
  };
}
