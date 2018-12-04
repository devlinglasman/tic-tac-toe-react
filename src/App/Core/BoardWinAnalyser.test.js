//@format

import {BoardWinAnalyser} from './BoardWinAnalyser';
import {EMPTY, P1, P2} from '../Constants';

describe('analyse board for a win', () => {
  it('returns true if line indices match to a full line of player symbols', () => {
    const bWA = new BoardWinAnalyser(topRowWonBoard, P1);

    const winningLine = [0, 1, 2];

    expect(bWA.lineIsWinning(winningLine)).toBe(true);
  });

  it('returns false if line indices do not match to full line of player symbols', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const losingLine = [0, 1, 2];

    expect(bWA.lineIsWinning(losingLine)).toBe(false);
  });

  it('generates the indices of one row', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const firstRowIndices = [0, 1, 2];
    const secondRowIndices = [3, 4, 5];
    const thirdRowIndices = [6, 7, 8];

    expect(bWA.getOneRowIndices(0)).toEqual(firstRowIndices);
    expect(bWA.getOneRowIndices(3)).toEqual(secondRowIndices);
    expect(bWA.getOneRowIndices(6)).toEqual(thirdRowIndices);
  });

  it('generates the all row indices', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const allRowIndices = [[0, 1, 2], [3, 4, 5], [6, 7, 8]];

    expect(bWA.getAllRowIndices()).toEqual(allRowIndices);
  });

  it('returns false if none of the generated indices lists contain a winning line', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(false);
  });

  it('returns true if top row won', () => {
    const bWA = new BoardWinAnalyser(topRowWonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('returns true if mid row won', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, P1, P1, P1, EMPTY, EMPTY, EMPTY];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('returns true if bot row won', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, P1, P1, P1];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('generates the indices of one column', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const firstColIndices = [0, 3, 6];
    const secondColIndices = [1, 4, 7];
    const thirdColIndices = [2, 5, 8];

    expect(bWA.getOneColIndices(0)).toEqual(firstColIndices);
    expect(bWA.getOneColIndices(1)).toEqual(secondColIndices);
    expect(bWA.getOneColIndices(2)).toEqual(thirdColIndices);
  });

  it('generates all col indices', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const allColIndices = [[0, 3, 6], [1, 4, 7], [2, 5, 8]];

    expect(bWA.getAllColIndices()).toEqual(allColIndices);
  });

  it('returns true if left col won', () => {
    const wonBoard = [P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('returns true if mid col won', () => {
    const wonBoard = [EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('returns true if right col won', () => {
    const wonBoard = [EMPTY, EMPTY, P1, EMPTY, EMPTY, P1, EMPTY, EMPTY, P1];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('generates the indices of the first diagonal', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const firstDiagIndices = [0, 4, 8];

    expect(bWA.getFirstDiagIndices()).toEqual(firstDiagIndices);
  });

  it('generates the indices of the second diagonal', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const secondDiagIndices = [2, 4, 6];

    expect(bWA.getSecondDiagIndices()).toEqual(secondDiagIndices);
  });

  it('generates the indices of both diagonals', () => {
    const bWA = new BoardWinAnalyser(emptyBoard, P1);

    const bothDiagsIndices = [[0, 4, 8], [2, 4, 6]];

    expect(bWA.getBothDiagIndices()).toEqual(bothDiagsIndices);
  });

  it('returns true if first diag won', () => {
    const wonBoard = [P1, EMPTY, EMPTY, EMPTY, P1, EMPTY, EMPTY, EMPTY, P1];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
  });

  it('returns true if second diag won', () => {
    const wonBoard = [EMPTY, EMPTY, P1, EMPTY, P1, EMPTY, P1, EMPTY, EMPTY];
    const bWA = new BoardWinAnalyser(wonBoard, P1);

    expect(bWA.anyLineIsWinning()).toBe(true);
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
