//@format

import {P1, P2} from '../Constants';

export function pickCompTile(board, activePlayer) {
  return maximise(board, board.getEmptyTiles(), activePlayer, true, 0);
}

export function maximise(board, emptyTiles, activePlayer, isTopLevel, depth) {
  let scores = [];
  for (let i = 0; i < emptyTiles.length; i++) {
    const nextBoard = simulateNextBoard(board, emptyTiles[i], activePlayer);
    let nextScore;
    if (nextBoard.isFinished()) {
      nextScore = scoreTerminalBoard(nextBoard, activePlayer, depth);
    } else {
      const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
      nextScore = minimise(
        nextBoard,
        nextBoardEmptyTiles,
        getOtherPlayer(activePlayer),
        depth + 1,
      );
    }
    scores.push(nextScore);
  }
  if (isTopLevel) {
    return getTileOfMaxScore(emptyTiles, scores);
  } else {
    return Math.max(...scores);
  }
}

export function minimise(board, emptyTiles, activePlayer, depth) {
  let scores = [];
  for (let i = 0; i < emptyTiles.length; i++) {
    const nextBoard = simulateNextBoard(board, emptyTiles[i], activePlayer);
    let nextScore;
    if (nextBoard.isFinished()) {
      nextScore = scoreTerminalBoard(
        nextBoard,
        getOtherPlayer(activePlayer),
        depth,
      );
    } else {
      const nextBoardEmptyTiles = nextBoard.getEmptyTiles();
      nextScore = maximise(
        nextBoard,
        nextBoardEmptyTiles,
        getOtherPlayer(activePlayer),
        false,
        depth + 1,
      );
    }
    scores.push(nextScore);
  }
  return Math.min(...scores);
}

export function simulateNextBoard(board, move, player) {
  const nextBoard = board.copySelf();
  nextBoard.placeMark(player, move);
  return nextBoard;
}

export function scoreTerminalBoard(board, activePlayer, depth) {
  if (board.isWon(activePlayer)) {
    return 1000 - depth;
  } else if (board.isWon(getOtherPlayer(activePlayer))) {
    return depth - 1000;
  } else {
    return 0;
  }
}

export function getTileOfMaxScore(tiles, scores) {
  const maxScore = Math.max(...scores);
  const indexAtMax = score => {
    for (let i = 0; i < scores.length; i++) {
      if (maxScore === scores[i]) {
        return i;
      }
    }
  };
  return tiles[indexAtMax(scores)];
}

export function getOtherPlayer(currentPlayer) {
  return currentPlayer === P1 ? P2 : P1;
}
