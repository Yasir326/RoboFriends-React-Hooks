import { useState, useEffect, useCallback } from 'react';
import { setSearchField } from './state/actions';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Error from './components/Error';
import 'tachyons';
import './styles/App.css';


const App = () => {
  const searchField  = useSelector((state) => state.searchField)
  const dispatch = useDispatch();
  const [robots, setRobots] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const result = await axios.get('//jsonplaceholder.typicode.com/users');
      setRobots(result.data);
    } catch (error) {
      console.error(error);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    fetchUsers();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchField.toLowerCase());
  });

  const onSearchChange = (e) => {
    dispatch(setSearchField(e.target.value));
  };

  return !robots.length ? (
    <h1 className='f1 tc'>Loading...</h1>
  ) : (
    <div className='App tc'>
      <h1 className='f1'>RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <Error>
          <CardList robots={filteredRobots} />
        </Error>
      </Scroll>
    </div>
  );
};


export default App;
