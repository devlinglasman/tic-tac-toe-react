//@format

import {Game} from './Game';
import {EMPTY, P1, P2} from '../Constants';

describe('Game', () => {
  describe('playTurn', () => {
    it('places Player One mark if playerOneTurn', () => {
      const game = new Game(3);

      game.playTurn(0);

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

      game.playTurn(0);
      game.playTurn(1);

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

    it('is no longer ongoing if board is full', () => {
      const game = new Game(2);

      game.playTurn(0);
      game.playTurn(1);
      game.playTurn(2);
      game.playTurn(3);

      expect(game.ongoing).toBe(false);
    });
  });
});
