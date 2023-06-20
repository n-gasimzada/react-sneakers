import React from 'react'
import Header from './Header'
import Box from './Box'
import SneakersItem from './SneakersItem'
import axios from 'axios';

function Home() {
    const [getSneakers, setGetSneakers] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:3000/sneakers.json")
        .then(({data}) => {
            setGetSneakers(data)
        })
    }, [])
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

        <div className='sneakers'>
          {getSneakers.map((obj) => 
            <SneakersItem key={obj.id} {...obj} />
          )}
        </div>

      </div>
    </div>
  )
}

export default Home