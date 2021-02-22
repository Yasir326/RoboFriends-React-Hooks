import React from 'react';
import CardList from '../Card/CardList';
import SearchBox from '../Search/SearchBox';
import Scroll from '../Search/Scroll';
import Error from '../Error/Error';
import Header from '../Header/Header';
import 'tachyons';
import '../../styles/Main.css';

const MainPage = ({ onSearchChange, isPending }) => {

  return (
    <div className='tc'>
      <Header />
      <SearchBox searchChange={onSearchChange} />
      {isPending ? (
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
