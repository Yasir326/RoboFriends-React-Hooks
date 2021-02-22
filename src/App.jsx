import { useEffect } from 'react';
import { setSearchField, requestRobots } from './state/actions';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import MainPage from './components/MainPage/MainPage';

const App = () => {
  const stateProps = useSelector((state) => ({
    searchField: state.searchRobots.searchField,
    isPending: state.requestRobots.isPending,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestRobots);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  return (
    <MainPage
      onSearchChange={onSearchChange}
      isPending={stateProps.isPending}
    />
  );
};

export default App;
