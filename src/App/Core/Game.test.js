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

    it('switches active player', () => {
      const game = new Game(2);

      game.switchPlayer();

      expect(game.playerOneTurn).toBe(false);
    });

    it('switches active player if game not isFinished', () => {
      const game = new Game(2);

      game.playTurn(1);

      expect(game.playerOneTurn).toBe(false);
    });

    it('is isFinished if board is won', () => {
      const game = new Game(2);

      game.playTurn(0);
      game.playTurn(1);
      game.playTurn(2);

      expect(game.isFinished()).toBe(true);
    });
  });

  describe('isTileFree', () => {
    it('returns true if tile free', () => {
      const game = new Game(3);

      expect(game.isTileFree(0)).toBe(true);
    });

    it('returns false if tile not free', () => {
      const game = new Game(3);

      game.playTurn(0);

      expect(game.isTileFree(0)).toBe(false);
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
