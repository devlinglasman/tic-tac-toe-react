//@format

import {Game} from './Game';
import {EMPTY, P1, P2} from '../Constants';

describe('Game', () => {
  describe('playTurn', () => {
    it('places Player One mark if playerOneTurn', () => {
      const game = new Game(3);

      game.playTurn(0);

      expect(game.board.tiles).toEqual(gridWithP1Mark);
    });

    it('places Player Two mark if not playerOneTurn', () => {
      const game = new Game(3);

      game.playTurn(0);
      game.playTurn(1);

      expect(game.board.tiles).toEqual(gridWithP1AndP2Mark);
    });

    it('does not place mark if tile already marked', () => {
      const game = new Game(3);

      game.playTurn(0);
      game.playTurn(0);

      expect(game.board.tiles[0]).toEqual(P1);
    });

    it('switches active player', () => {
      const game = new Game(2);

      game.switchPlayer();

      expect(game.playerOneTurn).toBe(false);
    });

    it('switches active player if game not finished', () => {
      const game = new Game(2);

      game.playTurn(1);

      expect(game.playerOneTurn).toBe(false);
    });

    it('is finished if board is won', () => {
      const game = new Game(2);

      game.playTurn(0);
      game.playTurn(1);
      game.playTurn(2);

      expect(game.finished()).toBe(true);
    });
  });

  describe('won', () => {
    it('returns true if board won by P1', () => {
      const game = new Game(2);

      game.playTurn(0);
      game.playTurn(1);
      game.playTurn(2);

      expect(game.won()).toBe(true);
    });

    it('returns true if board won by P2', () => {
      const game = new Game(3);

      game.playTurn(0);
      game.playTurn(1);
      game.playTurn(2);
      game.playTurn(4);
      game.playTurn(5);
      game.playTurn(7);

      expect(game.won()).toBe(true);
    });
  });
});

const gridWithP1Mark = [
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

const gridWithP1AndP2Mark = [
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
