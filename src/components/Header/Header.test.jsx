import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import '../../setUpTest';

it('expect to render Card component', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});