import React from 'react'
import Header from '../Header'
import { Link } from 'react-router-dom'
import styles from "../SneakersItem/SneakersItem.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { removeFavorites } from '../../redux/slices/sneakersSlice'

function MyPurchases() {
  const dispatch = useDispatch()
  const orders = useSelector((state) => state.sneakers.order)
  console.log(orders)

  return (
    <div className="wrapper clear">
      <Header />
      <div className='content p-40'>
        {orders.length > 0 ? <><div className='mb-40 d-flex justify-between align-center'>
          <h1 className='headerTitle'><Link to="/"><img src='/img/left-vector.svg' alt='left-vector' /></Link>Мои покупки</h1>
        </div>

          <div className='sneakers'>

            {orders.map((obj) =>
              <div className={styles.card}>
                <div className={styles.favorite}>
                  <img onClick={() => dispatch(removeFavorites(obj.id))} src='/img/unliked.jpg' alt='liked' />
                </div>
                <img width={133} height={112} src={obj.imageUrl} alt='sneakers' />
                <h5>{obj.title}</h5>
                <div className='d-flex justify-between align-center'>
                  <div className='d-flex flex-column'>
                    <span>Цена:</span>
                    <b>{obj.price} руб.</b>
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
            <h1>&#128532;</h1>
            <h3>У вас нет заказов</h3>
            <p>Вы нищеброд? <br/> Оформите хотя бы один заказ.</p>
            <Link to="/">
              <button className='greenButton'><img className='arrow__left' src='/img/arrow.svg' alt='Arrow' />Вернуться назад</button>
            </Link>
          </div>

        }


      </div>
    </div>
  )
}

export default MyPurchases