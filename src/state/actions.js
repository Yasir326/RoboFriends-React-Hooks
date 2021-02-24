import axios from 'axios';
import {
  SEARCH_EVENT,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from './constants';

export const setSearchField = (payload) => ({ type: SEARCH_EVENT, payload });

export const requestRobots = () => {
  return async (dispatch) => {
    dispatch({
      type: REQUEST_ROBOTS_PENDING,
    });
    try {
      const result = await axios.get('//jsonplaceholder.typicode.com/users');
      dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: result.data });
    } catch (error) {
      dispatch({ type: REQUEST_ROBOTS_FAILED, payload: error.message });
    }
  };
};
