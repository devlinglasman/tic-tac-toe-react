//@format

import {UnbeatableComp} from './UnbeatableComp';
import {Board} from './Board';
import {EMPTY, P1, P2} from '../Constants';

describe('pickCompTile', () => {
  it('getTileOfMaxScore - 1', () => {
    const uComp = new UnbeatableComp();
    const emptyTiles = [0, 3, 8];
    const scores = [2, 8, 5];

    expect(uComp.getTileOfMaxScore(emptyTiles, scores)).toBe(3);
  });

  it('getTileOfMaxScore - 2', () => {
    const uComp = new UnbeatableComp();
    const emptyTiles = [1, 2, 7];
    const scores = [7, 2, 5];

    expect(uComp.getTileOfMaxScore(emptyTiles, scores)).toBe(1);
  });

  it('scores board - P1 win', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(2);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    expect(uComp.scoreBoard(board, P1, P2)).toBe(10);
  });

  it('scores board - P1 win 3x3', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);
    board.placeMark(P1, 2);

    expect(uComp.scoreBoard(board, P1, P2)).toBe(10);
  });

  it('scores board - P2 win', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(2);

    board.placeMark(P2, 0);
    board.placeMark(P2, 1);

    expect(uComp.scoreBoard(board, P2, P1)).toBe(10);
  });

  it('scores board - P1 loss', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(2);

    board.placeMark(P2, 0);
    board.placeMark(P2, 1);

    expect(uComp.scoreBoard(board, P1, P2)).toBe(-10);
  });

  it('scores board - draw', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(2);

    expect(uComp.scoreBoard(board, P1, P2)).toBe(0);
  });

  it('maximise - find top score', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    const expectedScore = 10;

    expect(uComp.maximise(board, [2], P1, P2, false)).toEqual(expectedScore);
  });

  it('maximise - find top-scoring tile', () => {
    const uComp = new UnbeatableComp();
    const board = new Board(3);

    board.placeMark(P1, 0);
    board.placeMark(P1, 1);

    const expectedTile = 2;

    expect(uComp.maximise(board, [2], P1, P2, true)).toEqual(expectedTile);
  });
});