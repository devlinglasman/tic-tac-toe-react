//@format

import {Game} from './Game';
import {EMPTY, P1, P2} from '../Constants';

describe('Game', () => {
  describe('computeMove', () => {
    it('places Player One mark if playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);

      const expectedGrid = [
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
      expect(game.board.tiles).toEqual(expectedGrid);
    });

    it('places Player Two mark if not playerOneTurn', () => {
      const game = new Game(3);

      game.computeMove(0);
      game.computeMove(1);

      const expectedGrid = [
        P1,
        P2,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
        EMPTY,
      ];
      expect(game.board.tiles).toEqual(expectedGrid);
    });
  });
});
