//@format

import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

describe('Board', () => {
  describe('makeBoard', () => {
    it('generates list of 4 empty tiles for 2x2 grid', () => {
      const board = new Board(2);

      expect(board.tiles).toEqual(emptyBoard2x2);
    });

    it('generates list of 9 empty tiles for 3x3 grid', () => {
      const board = new Board(3);

      expect(board.tiles).toEqual(emptyBoard3x3);
    });
  });

  describe('placeMark', () => {
    it('places given mark in given spot', () => {
      const board = new Board(3);

      board.placeMark(P1, 0);

      expect(board.tiles).toEqual(P1MarkedBoard);
    });
  });

  describe('isFull', () => {
    it('returns false if board not full', () => {
      const board = new Board(2);

      expect(board.isFull()).toBe(false);
    });

    it('returns true if board isFull', () => {
      const board = new Board(2);

      board.placeMark(P1, 0);
      board.placeMark(P1, 1);
      board.placeMark(P1, 2);
      board.placeMark(P1, 3);

      expect(board.isFull()).toBe(true);
    });
  });

  describe('isWon', () => {
    it('returns false if board not isWon', () => {
      const board = new Board(3);

      expect(board.isWon(P1)).toBe(false);
    });

    it('returns true if board isWon by P1', () => {
      const board = new Board(3);

      board.placeMark(P1, 0);
      board.placeMark(P1, 1);
      board.placeMark(P1, 2);

      expect(board.isWon(P1)).toBe(true);
    });

    it('returns false if board isWon by P1 but P2 is asked', () => {
      const board = new Board(3);

      board.placeMark(P1, 0);
      board.placeMark(P1, 1);
      board.placeMark(P1, 2);

      expect(board.isWon(P2)).toBe(false);
    });

    it('returns true if board isWon by P2', () => {
      const board = new Board(3);

      board.placeMark(P2, 2);
      board.placeMark(P2, 4);
      board.placeMark(P2, 6);

      expect(board.isWon(P2)).toBe(true);
    });
  });

  describe('freeTile', () => {
    it('returns true if tile free', () => {
      const board = new Board(3);

      expect(board.freeTile(0)).toBe(true);
    });

    it('returns false if tile occupied', () => {
      const board = new Board(3);

      board.placeMark(P1, 0);

      expect(board.freeTile(0)).toBe(false);
    });
  });

  describe('getEmptyTiles', () => {
    it('returns empty tile indices from 2x2', () => {
      const board = new Board(2);

      board.placeMark(P1, 2);

      const emptyTiles = [0, 1, 3];
      expect(board.getEmptyTiles()).toEqual(emptyTiles);
    });

    it('returns empty tile indices from 3x3', () => {
      const board = new Board(3);

      board.placeMark(P1, 1);
      board.placeMark(P1, 2);
      board.placeMark(P1, 4);
      board.placeMark(P1, 5);

      const emptyTiles = [0, 3, 6, 7, 8];
      expect(board.getEmptyTiles()).toEqual(emptyTiles);
    });
  });

  describe('copySelf', () => {
    it('returns board with same tiles as itself', () => {
      const board = new Board(2);
      board.placeMark(P1, 2);

      const copiedBoard = board.copySelf();

      expect(copiedBoard.tiles).toEqual(board.tiles);
    });
  });

  describe('isFinished', () => {
    it('returns true if finished game', () => {
      const board = new Board(2);
      board.placeMark(P1, 0);
      board.placeMark(P1, 1);

      expect(board.isFinished()).toBe(true);
    });

    it('returns false if not finished game', () => {
      const board = new Board(2);

      expect(board.isFinished()).toBe(false);
    });
  });
});

const emptyBoard2x2 = [EMPTY, EMPTY, EMPTY, EMPTY];
const emptyBoard3x3 = [
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
const P1MarkedBoard = [
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
