//@format

import {didItWin} from './BoardWinAnalyser';
import {EMPTY, P1, P2} from '../Constants';

describe('didItWin', () => {
  it('returns false when not won', () => {
    const notWonBoard = [
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

    expect(didItWin(notWonBoard, P1)).toBe(false);
  });

  it('win: top row', () => {
    const wonBoard = [P1, P1, P1, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY];

    expect(didItWin(wonBoard, P1)).toBe(true);
  });

  it('win: mid row', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, P1, P1, P1, EMPTY, EMPTY, EMPTY];

    expect(didItWin(wonBoard, P1)).toBe(true);
  });

  it('win: bot row', () => {
    const wonBoard = [EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, EMPTY, P1, P1, P1];

    expect(didItWin(wonBoard, P1)).toBe(true);
  });
});
