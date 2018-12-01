//@format

import React from 'react';
import * as bv from './BoardView';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render a formatted grid', () => {
  const wrapper = Enzyme.shallow(<bv.BoardView />);

  expect(wrapper.find('.tile')).toHaveLength(9);
});
