import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import styles from "../SneakersItem/SneakersItem.module.scss"

function Bookmarks() {
  const myFavorites = useSelector(state => state.sneakers.favorites)
  return (
    <div className="wrapper clear">
      <Header />
      <div className='content p-40'>
        <div className='mb-40 d-flex justify-between align-center'>
          <h1 className='headerTitle'><Link to="/"><img src='/img/left-vector.svg' alt='left-vector' /></Link>Мои закладки</h1>
        </div>

        <div className='sneakers'>

          {myFavorites.map((obj) => 
            <div className={styles.card}>
              <div className={styles.favorite}>
                <img src='/img/hliked.svg' alt='liked' />
              </div>
              <img width={133} height={112} src={obj.imageUrl} alt='sneakers' />
              <h5>{obj.title}</h5>
              <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column'>
                  <span>Цена:</span>
                  <b>{obj.price}</b>
                </div>
                <div className={styles.cartAdd}>
                  <img width={20} height={20} src='/img/plus.svg' alt='plus' />
                  <span></span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Bookmarks