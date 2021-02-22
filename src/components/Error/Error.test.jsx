import React from 'react';
import { shallow } from 'enzyme';
import Error from './Error';
import '../../setUpTest';

it('expect to render Card component', () => {
  expect(shallow(<Error />)).toMatchSnapshot();
});