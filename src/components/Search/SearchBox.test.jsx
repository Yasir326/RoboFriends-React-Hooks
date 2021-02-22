import React from 'react';
import { shallow } from 'enzyme';
import SearchBox from './SearchBox';
import '../../setUpTest';

it('expect to render Card component', () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});