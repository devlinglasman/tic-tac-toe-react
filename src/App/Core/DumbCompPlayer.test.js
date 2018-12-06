//@format

import {DumbCompPlayer} from './DumbCompPlayer';
import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

describe('pickCompTile', () => {
  it('1 - returns random number in range, not picked', () => {
    const compPlayer = new DumbCompPlayer();
    const board = new Board(2);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);
    board.placeMark(P1, 2);

    expect(compPlayer.pickCompTile(board)).toBe(3);
  });

  it('2 - returns random number in range, not picked', () => {
    const compPlayer = new DumbCompPlayer();
    const board = new Board(2);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);
    board.placeMark(P1, 3);

    expect(compPlayer.pickCompTile(board)).toBe(2);
  });
});
