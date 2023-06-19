import React from 'react';
import SneakersItem from './components/SneakersItem';
import Box from './components/Box';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper clear">
      <Box />
      <Header />
      <div className='content p-40'>
        <div className='mb-40 d-flex justify-between align-center'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='search' />
            <input placeholder='Поиск...' />
          </div>
        </div>

        <div className='sneakers d-flex'>
          <SneakersItem />
        </div>

      </div>
    </div>
  );
}

export default App;
