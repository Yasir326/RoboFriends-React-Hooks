import React from 'react';
import { useEffect } from 'react';
import { setSearchField, requestRobots } from '../../state/actions';
import { useDispatch, useSelector } from 'react-redux';
import CardList from '../Card/CardList';
import SearchBox from '../Search/SearchBox';
import Scroll from '../Search/Scroll';
import Error from '../Error/Error';
import Header from '../Header/Header';
import 'tachyons';
import '../../styles/Main.css';

const MainPage = () => {
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
    <div className='tc'>
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

export default MainPage;
