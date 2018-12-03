//@format

import {EMPTY, P1, P2} from '../Constants';

export const didItWin = (board, player) => {
  const topRow = [0, 1, 2];
  const midRow = [3, 4, 5];
  const botRow = [6, 7, 8];
  const allRows = [topRow, midRow, botRow];

  const analyseLines = (pos1, pos2, pos3) => {
    return (
      board[pos1] === player && board[pos2] === player && board[pos3] === player
    );
  };

  for (let i = 0; i < 3; i++) {
    if (analyseLines(allRows[i][0], allRows[i][1], allRows[i][2])) {
      return true;
    }
  }

  return false;
};
