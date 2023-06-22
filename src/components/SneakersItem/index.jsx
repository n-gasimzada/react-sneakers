import React from 'react'

import styles from "./SneakersItem.module.scss"
import { useDispatch } from 'react-redux'
import { addSneakers } from '../../redux/slices/sneakersSlice'

function SneakersItem({ id, title, price, imageUrl}) {
  const [select, setSelect] = React.useState(false)
  const dispatch = useDispatch()

  const onClickAdd = () => {
    setSelect(!select)
    dispatch(addSneakers({
      id,
      title,
      price,
      imageUrl,
    }))
  }

  return (
    <div className={styles.card}>
    <div className={styles.favorite}>
      <img src='/img/unliked.jpg' alt='unliked' />
    </div>
    <img width={133} height={112} src={imageUrl} alt='sneakers' />
    <h5>{title}</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
        <span>Цена:</span>
        <b>{price}</b>
      </div>
      <div className={styles.cartAdd}>
        <img onClick={onClickAdd} width={20} height={20} src={select ? '/img/sucsess.svg' : '/img/plus.svg'} alt='plus' />
      </div>
    </div>
  </div>
  )
}

export default SneakersItem