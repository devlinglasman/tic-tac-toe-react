//@format

import React from 'react';
import {Grid} from './Grid';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render a formatted grid', () => {
  const wrapper = Enzyme.shallow(<Grid gridSize="3" />);

  expect(wrapper.find('.tile')).toHaveLength(9);
});

it('should render an empty grid', () => {
  const wrapper = Enzyme.shallow(<Grid gridSize="3" />);

  expect(
    wrapper
      .find('.tile')
      .first()
      .html(),
  ).toContain('');
});
