//@format

import {Game} from './Game';

describe('Game', () => {
  describe('computeMove', () => {
    it('places Player One mark if playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);

      const expectedGrid3x3 = ['X', '', '', '', '', '', '', '', ''];
      expect(game.board.tiles).toEqual(expectedGrid3x3);
    });

    it('places Player Two mark if not playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);
      game.computeMove(1);

      const expectedGrid3x3 = ['X', 'O', '', '', '', '', '', '', ''];
      expect(game.board.tiles).toEqual(expectedGrid3x3);
    });
  });
});
