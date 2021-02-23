import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
  SEARCH_EVENT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';
import * as actions from './actions';

const mockStore = configureMockStore([thunk]);

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
  it('Should return REQUEST_ROBOTS_PENDING action', () => {
    store.dispatch(actions.requestRobots());
    const action = store.getActions();
    expect(action[0]).toEqual({
      type: REQUEST_ROBOTS_PENDING,
    });
  });
});
