import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';
import '../../setUpTest';

it('expect to render Card component', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
