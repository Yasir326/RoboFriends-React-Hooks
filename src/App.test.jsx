import React from 'react';
import { Provider } from 'react-redux';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store'
import App from './App'
import './setUpTest';

const mockStore = configureStore({
  robots: [],
  searchField: '',
});

it('Expect to render the App Component', () => {
expect(shallow(<App store={mockStore}/>)).toMatchSnapshot()
})