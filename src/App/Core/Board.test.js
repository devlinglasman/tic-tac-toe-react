//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

describe('Board', () => {
  describe('makeBoard', () => {
    it('generates list of 4 empty tiles for 2x2 grid', () => {
      const board = new Board(2);

      const expectedBoard = [EMPTY, EMPTY, EMPTY, EMPTY];
      expect(board.tiles).toEqual(expectedBoard);
    });

    it('generates list of 9 empty tiles for 3x3 grid', () => {
      const board = new Board(3);

      const expectedBoard = [
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
      expect(board.tiles).toEqual(expectedBoard);
    });
  });

  describe('placeMark', () => {
    it('places given mark in given spot', () => {
      const board = new Board(3);

      board.placeMark(P1, 0);

      const expectedBoard = [
        P1,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
      ];
      expect(board.tiles).toEqual(expectedBoard);
    });
  });

  describe('full', () => {
    it('returns false if board not full', () => {
      const board = new Board(2);

      expect(board.full()).toBe(false);
    });

    it('returns true if board full', () => {
      const board = new Board(2);

      board.placeMark(P1, 0);
      board.placeMark(P1, 1);
      board.placeMark(P1, 2);
      board.placeMark(P1, 3);

      expect(board.full()).toBe(true);
    });
  });
});
