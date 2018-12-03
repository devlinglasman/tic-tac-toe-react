//@format

import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});
import {Grid} from './Grid';
import {Game} from './Core/Game';

it('should render a formatted grid', () => {
  const game = new Game(3);
  const wrapper = Enzyme.shallow(<Grid game={game} />);

  expect(wrapper.find('.tile')).toHaveLength(9);
});

it('should render an empty grid', () => {
  const game = new Game(3);
  const wrapper = Enzyme.shallow(<Grid game={game} />);

  expect(
    wrapper
      .find('.tile')
      .first()
      .html(),
  ).toContain('');
});
