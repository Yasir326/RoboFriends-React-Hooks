import { useState, useMemo, useEffect, useCallback } from 'react';
import axios from 'axios';
import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import 'tachyons';
import './styles/App.css';

const App = () => {
  const [state, setState] = useState({
    robots: [],
    searchField: '',
  });

  const fetchUsers = useCallback(async () => {
    try {
      const result = await axios('http://jsonplaceholder.typicode.com/users');
      setState({ ...state, robots: result.data });
    } catch (error) {
      console.log(error);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const filteredRobots = useMemo(
    () =>
      state.robots.filter((robot) => {
        return robot.name
          .toLowerCase()
          .includes(state.searchField.toLowerCase());
      }),
    [state]
  );

  const onSearchChange = (e) => {
    setState({ ...state, searchField: e.target.value });
  };

  return !state.robots.length ? (
    <h1 className='f1 tc'>Loading...</h1>
  ) : (
    <div className='App tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
