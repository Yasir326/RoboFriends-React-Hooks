import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import MainPage from './MainPage';
import '../../setUpTest';

let wrapper;
let store;

beforeEach(() => {
  const mockStore = configureStore();
  const initialState = {
    onSearchChange: jest.fn(),
    requestRobots: jest.fn(),
    searchField: '',
    isPending: false,
  };

  store = mockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <MainPage {...initialState} />
    </Provider>
  );
});

it('Renders MainPage without crashing', () => {
  expect(wrapper).toMatchSnapshot();
});
