//@format

import {Game} from './game';

describe('Game', () => {
  describe('makeGrid', () => {
    it('generates list of 4 empty tiles for 2x2 grid', () => {
      const game = new Game(2);

      const expectedGrid2x2 = ['', '', '', ''];
      expect(game.tiles).toEqual(expectedGrid2x2);
    });

    it('generates list of 9 empty tiles for 3x3 grid', () => {
      const game = new Game(3);

      const expectedGrid3x3 = ['', '', '', '', '', '', '', '', ''];
      expect(game.tiles).toEqual(expectedGrid3x3);
    });
  });

  describe('computeMove', () => {
    it('places X mark if playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);

      const expectedGrid3x3 = ['X', '', '', '', '', '', '', '', ''];
      expect(game.tiles).toEqual(expectedGrid3x3);
    });

    it('places O mark if playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);
      game.computeMove(1);

      const expectedGrid3x3 = ['X', 'O', '', '', '', '', '', '', ''];
      expect(game.tiles).toEqual(expectedGrid3x3);
    });
  });
});
