//@format

import {Board} from './Board';

describe('Board', () => {
  describe('makeBoard', () => {
    it('generates list of 4 empty tiles for 2x2 grid', () => {
      const board = new Board(2);

      const expectedBoard = ['', '', '', ''];
      expect(board.tiles).toEqual(expectedBoard);
    });

    it('generates list of 9 empty tiles for 3x3 grid', () => {
      const board = new Board(3);

      const expectedBoard = ['', '', '', '', '', '', '', '', ''];
      expect(board.tiles).toEqual(expectedBoard);
    });
  });

  describe('placeMark', () => {
    it('places given mark in given spot', () => {
      const board = new Board(3);

      board.placeMark('X', 0);

      const expectedBoard = ['X', '', '', '', '', '', '', '', ''];
      expect(board.tiles).toEqual(expectedBoard);
    });
  });
});
