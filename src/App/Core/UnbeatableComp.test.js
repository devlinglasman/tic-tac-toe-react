//@format

import * as comp from './UnbeatableComp';
import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

describe('pickCompTile', () => {
  it('getOtherPlayer - gets P2 if P1 active', () => {
    expect(comp.getOtherPlayer(P1)).toEqual(P2);
  });

  it('getOtherPlayer - gets P1 if P2 active', () => {
    expect(comp.getOtherPlayer(P2)).toEqual(P1);
  });

  it('getTileOfMaxScore - 1', () => {
    const emptyTiles = [0, 3, 8];
    const scores = [2, 8, 5];

    expect(comp.getTileOfMaxScore(emptyTiles, scores)).toBe(3);
  });

  it('getTileOfMaxScore - 2', () => {
    const emptyTiles = [1, 2, 7];
    const scores = [7, 2, 5];

    expect(comp.getTileOfMaxScore(emptyTiles, scores)).toBe(1);
  });

  it('scores board - P1 win', () => {
    const board = new Board(2);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    expect(comp.scoreTerminalBoard(board, P1, 0)).toBe(1000);
  });

  it('scores board - P1 win 3x3', () => {
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);
    board.placeMark(P1, 2);

    expect(comp.scoreTerminalBoard(board, P1, 0)).toBe(1000);
  });

  it('scores board - P2 win', () => {
    const board = new Board(2);

    board.placeMark(P2, 0);
    board.placeMark(P2, 1);

    expect(comp.scoreTerminalBoard(board, P2, 0)).toBe(1000);
  });

  it('scores board - P1 loss', () => {
    const board = new Board(2);

    board.placeMark(P2, 0);
    board.placeMark(P2, 1);

    expect(comp.scoreTerminalBoard(board, P1, 0)).toBe(-1000);
  });

  it('scores board - draw', () => {
    const board = new Board(2);

    expect(comp.scoreTerminalBoard(board, P1, 0)).toBe(0);
  });

  it('maximise - find top score', () => {
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    const expectedScore = 1000;

    expect(comp.maximise(board, [2], P1, false, 0)).toEqual(expectedScore);
  });

  it('maximise - find top-scoring tile', () => {
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    const expectedTile = 2;

    expect(comp.maximise(board, [2], P1, true, 0)).toEqual(expectedTile);
  });

  it('minimise - find lowest score', () => {
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    const expectedScore = -1000;

    expect(comp.minimise(board, [2], P1, 0)).toEqual(expectedScore);
  });

  it('pickCompTile - picks optimum position (not the first one)', () => {
    const board = new Board(3);

    // O O X
    // 4 X 6
    // 7 8 9
    // Optimum move: 7

    board.placeMark(P2, 0);
    board.placeMark(P2, 1);
    board.placeMark(P1, 2);
    board.placeMark(P1, 4);

    expect(comp.pickCompTile(board, P1)).toEqual(6);
  });

  it('pickCompTile - loses in as many turns as possible', () => {
    const board = new Board(3);

    // 1 X 3
    // 4 5 X
    // O O X
    // Optimum move: 3

    board.placeMark(P1, 1);
    board.placeMark(P1, 5);
    board.placeMark(P2, 6);
    board.placeMark(P2, 7);
    board.placeMark(P1, 8);

    expect(comp.pickCompTile(board, P1)).toEqual(2);
  });
});
