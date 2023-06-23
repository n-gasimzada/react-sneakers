import React from 'react'
import Header from '../Header'
import SneakersItem from '../SneakersItem'
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../../redux/slices/searchSlice';
import debounce from 'lodash.debounce';

function Home() {
    const [getSneakers, setGetSneakers] = React.useState([]);
    const search = useSelector(state => state.search.search)
    const [inputValue, setInputValue] = React.useState('')
    const dispatch = useDispatch()

    const updateInputValue = React.useCallback(
      debounce((str) => {
        dispatch(setSearch(str))
      }, 250),
      [],
    )

    const onChangeInput = (event) => {
      setInputValue(event.target.value)
      updateInputValue(event.target.value)
    }

    React.useEffect(() => {
        axios.get("http://localhost:3000/sneakers.json")
        .then(({data}) => {
            setGetSneakers(data)
        })
    }, [])
  return (
    <div className="wrapper clear">
      <Header />
      <div className='content p-40'>
        <div className='mb-40 d-flex justify-between align-center'>
          <h1>Все кроссовки</h1>
          <div className='search-block d-flex'>
            <img src='/img/search.svg' alt='search' />
            <input placeholder='Поиск...' value={inputValue} onChange={(event) => onChangeInput(event)} />
            {search && <img width={20} height={20} className='remove' onClick={() => dispatch(setSearch(''))} src='/img/remove.svg' alt='remove' />}
          </div>
        </div>

        <div className='sneakers'>
          {getSneakers.filter(obj => {
            if(obj.title.toLowerCase().includes(search.toLowerCase())) {
              return true
            }
          }).map((obj) => 
            <SneakersItem key={obj.id} {...obj} />
          )}
        </div>

      </div>
    </div>
  )
}

export default Home