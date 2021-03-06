//@format

import * as bwa from './BoardWinAnalyser';
import {EMPTY, P1, P2} from '../Constants';

describe('analyse board for a win', () => {
  it('returns true if line indices match to a full line of player symbols', () => {
    const winningLine = [0, 1, 2];

    expect(bwa.isLineWinning(topRowWonBoard, winningLine, P1)).toBe(true);
  });

  it('returns false if line indices do not match to full line of player symbols', () => {
    const losingLine = [0, 1, 2];

    expect(bwa.isLineWinning(emptyBoard, losingLine, P1)).toBe(false);
  });

  it('generates the indices of one row', () => {
    const firstRowIndices = [0, 1, 2];
    const secondRowIndices = [3, 4, 5];
    const thirdRowIndices = [6, 7, 8];

    expect(bwa.getOneRowIndices(3, 0)).toEqual(firstRowIndices);
    expect(bwa.getOneRowIndices(3, 3)).toEqual(secondRowIndices);
    expect(bwa.getOneRowIndices(3, 6)).toEqual(thirdRowIndices);
  });

  it('generates the all row indices', () => {
    const allRowIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    expect(bwa.getAllRowIndices(emptyBoard, 3)).toEqual(allRowIndices);
  });

  it('returns false if none of the generated indices lists contain a winning line', () => {
    expect(bwa.hasPlayerWon(emptyBoard, P1)).toBe(false);
  });

  it('returns true if top row won', () => {
    expect(bwa.hasPlayerWon(topRowWonBoard, P1)).toBe(true);
  });

  it('returns true if mid row won', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, P1, P1, P1, EMPTY, EMPTY, EMPTY];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('returns true if bot row won', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, P1, P1, P1];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('generates the indices of one column', () => {
    const firstColIndices = [0, 3, 6];
    const secondColIndices = [1, 4, 7];
    const thirdColIndices = [2, 5, 8];

    expect(bwa.getOneColIndices(3, 0)).toEqual(firstColIndices);
    expect(bwa.getOneColIndices(3, 1)).toEqual(secondColIndices);
    expect(bwa.getOneColIndices(3, 2)).toEqual(thirdColIndices);
  });

  it('generates all col indices', () => {
    const allColIndices = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];

    expect(bwa.getAllColIndices(3)).toEqual(allColIndices);
  });

  it('returns true if left col won', () => {
    const wonBoard = [P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('returns true if mid col won', () => {
    const wonBoard = [EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('returns true if right col won', () => {
    const wonBoard = [EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('generates the indices of the first diagonal', () => {
    const firstDiagIndices = [0, 4, 8];

    expect(bwa.getFirstDiagIndices(3)).toEqual(firstDiagIndices);
  });

  it('generates the indices of the second diagonal', () => {
    const secondDiagIndices = [2, 4, 6];

    expect(bwa.getSecondDiagIndices(3)).toEqual(secondDiagIndices);
  });

  it('generates the indices of both diagonals', () => {
    const bothDiagsIndices = [[0, 4, 8], [2, 4, 6]];

    expect(bwa.getBothDiagIndices(3)).toEqual(bothDiagsIndices);
  });

  it('returns true if first diag won', () => {
    const wonBoard = [P1, EMPTY, EMPTY, EMPTY, P1, EMPTY, EMPTY, EMPTY, P1];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });

  it('returns true if second diag won', () => {
    const wonBoard = [EMPTY, EMPTY, P1, EMPTY, P1, EMPTY, P1, EMPTY, EMPTY];

    expect(bwa.hasPlayerWon(wonBoard, P1)).toBe(true);
  });
});

const emptyBoard = [
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
];

const topRowWonBoard = [P1, P1, P1, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];
