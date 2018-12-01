//@format

import React from 'react';
import {Grid} from './Grid';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({adapter: new Adapter()});

it('should render a formatted grid', () => {
  const wrapper = Enzyme.shallow(<Grid />);

  expect(wrapper.find('.tile')).toHaveLength(9);
});
