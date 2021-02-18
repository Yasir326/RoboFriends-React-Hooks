import { useEffect } from 'react';
import { setSearchField, requestRobots } from './state/actions';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import CardList from './components/CardList';
import SearchBox from './components/SearchBox';
import Scroll from './components/Scroll';
import Error from './components/Error';
import Header from './components/Header';
import 'tachyons';
import './styles/App.css';

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
    <div className='App tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      {stateProps.isPending ? (
        <h1 className='f1 tc'>Loading...</h1>
      ) : (
        <Scroll>
          <Error>
            <CardList />
          </Error>
        </Scroll>
      )}
    </div>
  );
};

export default App;
