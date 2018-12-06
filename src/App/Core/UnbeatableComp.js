//@format

import {Board} from './Board';

export class UnbeatableComp {
  pickCompTile = (board, activePlayer, passivePlayer) => {
    const emptyTiles = board.getEmptyTiles();
    const scores = this.generateScores(board, emptyTiles);

    return this.maximise(board, emptyTiles, activePlayer, passivePlayer, true);
  };

  maximise = (board, emptyTiles, activePlayer, passivePlayer, isTopLevel) => {
    let scores = [];
    for (let i = 0; i < emptyTiles.length; i++) {
      const nextBoard = this.simulateNextBoard(
        board,
        emptyTiles[i],
        activePlayer,
      );
      const nextScore = this.scoreBoard(nextBoard, activePlayer, passivePlayer);
      scores.push(nextScore);
    }
    if (isTopLevel) {
      return this.getTileOfMaxScore(emptyTiles, scores);
    } else {
      return Math.max(...scores);
    }
  };

  simulateNextBoard = (board, move, player) => {
    const nextBoard = board.copySelf();
    nextBoard.placeMark(player, move);
    return nextBoard;
  };

  scoreBoard = (board, activePlayer, passivePlayer) => {
    if (board.isWon(activePlayer)) {
      return 10;
    } else if (board.isWon(passivePlayer)) {
      return -10;
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
