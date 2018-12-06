//@format

import {Game} from './Game';
import {EMPTY, P1, P2} from '../Constants';

describe('Game', () => {
  describe('switchPlayer', () => {
    it('switches active player', () => {
      const game = new Game(2);

      game.switchPlayer();

      expect(game.isP1Turn).toBe(false);
    });
  });

  describe('isFinished', () => {
    it('is isFinished if board isWon', () => {
      const game = new Game(2);

      game.makeHumanMove(0);
      game.makeHumanMove(1);

      expect(game.isFinished(P1)).toBe(true);
    });
  });

  describe('isTileFree', () => {
    it('returns true if tile free', () => {
      const game = new Game(3);

      expect(game.isTileFree(0)).toBe(true);
    });

    it('returns false if tile not free', () => {
      const game = new Game(3);

      game.makeHumanMove(0);

      expect(game.isTileFree(0)).toBe(false);
    });
  });

  describe('isWon', () => {
    it('returns true if board isWon by P1', () => {
      const game = new Game(2);

      game.makeHumanMove(0);
      game.makeHumanMove(1);

      expect(game.isWon(P1)).toBe(true);
    });

    it('returns true if board isWon by P2', () => {
      const game = new Game(2);

      game.switchPlayer();
      game.makeHumanMove(0);
      game.makeHumanMove(1);

      expect(game.isWon(P2)).toBe(true);
    });
  });

  describe('getActivePlayer', () => {
    it('returns P1 if P1 active', () => {
      const game = new Game(2);

      expect(game.getActivePlayer()).toEqual(P1);
    });

    it('returns P2 if P2 active', () => {
      const game = new Game(2);

      game.switchPlayer();

      expect(game.getActivePlayer()).toEqual(P2);
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
