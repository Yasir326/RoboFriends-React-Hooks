import { SEARCH_EVENT } from './constants';

const initialState = {
  searchField: '',
};

export const searchRobots = (state = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_EVENT:
      return { ...state, searchField: action.payload };
    default:
      return state;
  }
};
