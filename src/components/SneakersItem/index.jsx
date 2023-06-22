import React from 'react'

import styles from "./SneakersItem.module.scss"
import { useDispatch } from 'react-redux'
import { addFavorites, addSneakers } from '../../redux/slices/sneakersSlice'

function SneakersItem({ id, title, price, imageUrl }) {
  const [select, setSelect] = React.useState(0)
  const [liked, setLiked] = React.useState(false)
  const dispatch = useDispatch()

  const onClickAdd = () => {
    setSelect(select + 1)
    dispatch(addSneakers({
      id,
      title,
      price,
      imageUrl,
    }))
  }

  const myLikedSneakers = () => {
    setLiked(!liked)
    dispatch(addFavorites({
      id,
      title,
      price,
      imageUrl,
    }))
  }

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={myLikedSneakers} src={liked ? '/img/hliked.svg' : '/img/unliked.jpg'} alt='unliked' />
      </div>
      <img width={133} height={112} src={imageUrl} alt='sneakers' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <div className={styles.cartAdd}>
          <img onClick={onClickAdd} width={20} height={20} src='/img/plus.svg' alt='plus' />
          <span>{select}</span>
        </div>
      </div>
    </div>
  )
}

export default SneakersItem