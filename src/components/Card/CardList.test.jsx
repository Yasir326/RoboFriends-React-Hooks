import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store'
import CardList from './CardList.jsx';
import '../../setUpTest';

const mockRobots = [
  {
    id: 1,
    name: 'robocop',
    email: 'robocop@gmail.com',
    key: 1,
  },
];

const mockStore = configureStore()
const initialState = {isPending:true}
let store

it('expect to render Card component', () => {
  store = mockStore(initialState)
  // const cardlist = shallow(<Provider<CardList/></Provider>, mockRobots);
  expect(
      <Provider store={store}>
        <CardList robots={mockRobots}/>
      </Provider>
  ).toMatchSnapshot();
});
