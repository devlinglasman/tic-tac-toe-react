//@format

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {GridFormatter} from './GridFormatter';
import {Game} from '../Core/Game';
import {EMPTY, P1, P2} from '../Constants';

it('should render a formatted grid', () => {
  const wrapper = Enzyme.shallow(
    <GridFormatter
      gridSize={gridSize}
      tiles={emptyGrid}
      handleClick={handleClick()}
    />,
  );

  expect(wrapper.find('.tile')).toHaveLength(9);
});

it('should render an empty grid', () => {
  const wrapper = Enzyme.shallow(
    <GridFormatter
      gridSize={gridSize}
      tiles={emptyGrid}
      handleClick={handleClick()}
    />,
  );

  expect(
    wrapper
      .find('.tile')
      .first()
      .html(),
  ).toContain('1');
});

const gridSize = 3;
const handleClick = () => {};
const emptyGrid = [
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
  EMPTY,
];
