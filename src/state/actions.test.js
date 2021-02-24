import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  SEARCH_EVENT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as actions from './actions';

const mock = new MockAdapter(axios);
const mockStore = configureMockStore([thunk]);
const payload = [
  {
    id: 1,
    name: 'Dave',
    email: 'dave@gmail.com',
    key: 1,
  },
];

describe('setSearchField', () => {
  it('should create an action to search robots', () => {
    expect(actions.setSearchField('mr Boombastic')).toEqual({
      type: SEARCH_EVENT,
      payload: 'mr Boombastic',
    });
  });
});

describe('handles requestRobots', () => {
  const store = mockStore();
  store.dispatch(actions.requestRobots());
  const action = store.getActions();
  beforeEach(() => {
    store.clearActions();
  });

  afterEach(() => {
    mock.reset();
  });

  const pendingAction = {
    type: REQUEST_ROBOTS_PENDING,
  };

  it('Should return REQUEST_ROBOTS_PENDING action', () => {
    expect(action[0]).toEqual(pendingAction);
  });

  it('Should return REQUEST_ROBOTS_SUCCESS action', () => {
    mock.onGet('//jsonplaceholder.typicode.com/users').reply(200, {
      data: payload,
    });

    return store.dispatch(actions.requestRobots()).then(() => {
      const expectedActions = [
        pendingAction,
        {
          type: REQUEST_ROBOTS_SUCCESS,
          payload: {
            data: payload,
          },
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('Should return REQUEST_ROBOTS_FAILED action', () => {
    mock.onGet('//jsonplaceholder.typ.com/users').reply(404, {
      data: payload,
    });

    return store.dispatch(actions.requestRobots()).then(() => {
      const expectedActions = [
        pendingAction,
        {
          type: REQUEST_ROBOTS_FAILED,
          payload: 'Request failed with status code 404',
        },
      ];
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
