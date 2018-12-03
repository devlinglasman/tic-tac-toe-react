//@format

import {Game} from './ttt';

describe('makeGrid', () => {
  it('generates list of 4 empty tiles for 2x2 grid', () => {
    const game = new Game(2);
    const expectedGrid2x2 = ['', '', '', ''];

    expect(game.getGrid()).toEqual(expectedGrid2x2);
  });

  it('generates list of 9 empty tiles for 3x3 grid', () => {
    const game = new Game(3);
    const expectedGrid3x3 = ['', '', '', '', '', '', '', '', ''];

    expect(game.getGrid()).toEqual(expectedGrid3x3);
  });
});
