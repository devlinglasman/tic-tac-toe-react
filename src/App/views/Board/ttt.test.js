//@format

import * as ttt from './ttt';

describe('makeGrid', () => {
  it('generates list of 4 empty tiles for 2x2 grid', () => {
    const expectedGrid2x2 = ['', '', '', ''];

    expect(ttt.makeGrid(2)).toEqual(expectedGrid2x2);
  });

  it('generates list of 9 empty tiles for 3x3 grid', () => {
    const expectedGrid3x3 = ['', '', '', '', '', '', '', '', ''];

    expect(ttt.makeGrid(3)).toEqual(expectedGrid3x3);
  });
});

describe('compute', () => {
  it('returns ongoing when game ongoing', () => {
    expect(ttt.compute(1)).toEqual('ongoing');
  });
});
