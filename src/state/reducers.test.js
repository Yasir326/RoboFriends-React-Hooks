import {
  SEARCH_EVENT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

import * as reducers from './reducers';

describe('Search Robots', () => {
  const initialStateSearch = {
    searchField: '',
  };
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: '' });
  });

  it('should handle the SEARCH_EVENT', () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: SEARCH_EVENT,
        payload: 'xyz',
      })
    ).toEqual({ searchField: 'xyz' });
  });
});

describe('requestRobots', () => {
  const initialStateRobots = {
    isPending: false,
    robots: [],
    error: '',
  };

  it('should return the initial state', () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it('should handle REQUEST_ROBOTS_PENDING action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      isPending: true,
      robots: [],
      error: '',
    });
  });

  it('should handle REQUEST_ROBOTS_SUCCESS action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [
          {
            id: 1,
            name: 'robocop',
            email: 'robocop@gmail.com',
            key: 1,
          },
        ],
      })
    ).toEqual({
      isPending: false,
      robots: [
        {
          id: 1,
          name: 'robocop',
          email: 'robocop@gmail.com',
          key: 1,
        },
      ],
      error: '',
    });
  });


  it('should handle REQUEST_ROBOTS_FAILED action', () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: 'Something went wrong'
      })
    ).toEqual({
      isPending: false,
      robots: [],
      error: 'Something went wrong',
    });
  });
});
