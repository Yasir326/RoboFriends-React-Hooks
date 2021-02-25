import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CardList from './CardList';
import '../../setUpTest';

let store;
let wrapper;

beforeEach(() => {
  const mockStore = configureStore();
  const initialState = {
    robots: [
      {
        id: 1,
        name: 'robocop',
        email: 'robocop@gmail.com',
        key: 1,
      },
      {
        id: 2,
        name: 'bart',
        email: 'bartp@gmail.com',
        key: 2,
      },
    ],
    error: false,
  };

  store = mockStore(initialState);
  wrapper = shallow(
    <Provider store={store}>
      <CardList {...initialState} />
    </Provider>
  );
});

it('expect to render Card component', () => {
  expect(wrapper).toMatchSnapshot();
});
