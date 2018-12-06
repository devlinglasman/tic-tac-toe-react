//@format

import {Board} from './Board';

export class UnbeatableComp {
  pickCompTile = (board, activePlayer, passivePlayer) => {
    const emptyTiles = board.getEmptyTiles();

    return this.maximise(
      board,
      emptyTiles,
      activePlayer,
      passivePlayer,
      true,
      0,
    );
  };

  maximise = (
    board,
    emptyTiles,
    activePlayer,
    passivePlayer,
    isTopLevel,
    depth,
  ) => {
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
          activePlayer,
          passivePlayer,
          depth,
        );
      } else {
        const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
        nextScore = this.minimise(
          nextBoard,
          nextBoardEmptyTiles,
          passivePlayer,
          activePlayer,
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

  minimise = (board, emptyTiles, activePlayer, passivePlayer, depth) => {
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
          passivePlayer,
          activePlayer,
          depth,
        );
      } else {
        const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
        nextScore = this.maximise(
          nextBoard,
          nextBoardEmptyTiles,
          passivePlayer,
          activePlayer,
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

  scoreTerminalBoard = (board, activePlayer, passivePlayer, depth) => {
    if (board.isWon(activePlayer)) {
      return 1000 - depth;
    } else if (board.isWon(passivePlayer)) {
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
}
