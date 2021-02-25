import React from 'react';

interface ISearchChange {
  searchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ searchChange }: ISearchChange) => {
  return (
    <div className='pa2'>
      <input
        aria-label='Search Robots'
        className='pa3 ba b--green bg-lightest-blue tc'
        type='search'
        placeholder='Search Robots'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
