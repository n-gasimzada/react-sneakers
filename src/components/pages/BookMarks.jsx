import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../SneakersItem/SneakersItem.module.scss"
import { removeFavorites } from '../../redux/slices/sneakersSlice'
import "../../index.scss"

function Bookmarks() {
  const myFavorites = useSelector(state => state.sneakers.favorites)
  const dispatch = useDispatch()



  return (
    <div className="wrapper clear">
      <Header />
      <div className='content p-40'>

        {myFavorites.length > 0 ? <><div className='mb-40 d-flex justify-between align-center'>
          <h1 className='headerTitle'><Link to="/"><img src='/img/left-vector.svg' alt='left-vector' /></Link>Мои закладки</h1>
        </div>

          <div className='sneakers'>

            {myFavorites.filter((obj) => obj.id).map((obj) =>
              <div className={styles.card}>
                <div className={styles.favorite}>
                  <img onClick={() => dispatch(removeFavorites(obj.id))} src='/img/hliked.svg' alt='liked' />
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

          </div></> :

          <div className='empty'>
            <h1>&#128557;</h1>
            <h3>Закладок нет</h3>
            <p>Вы ничего не добавляли в закладки</p>
            <Link to="/">
              <button className='greenButton'><img className='arrow__left' src='/img/arrow.svg' alt='Arrow' />Вернуться назад</button>
            </Link>
          </div>

        }


      </div>
    </div>
  )
}

export default Bookmarks


