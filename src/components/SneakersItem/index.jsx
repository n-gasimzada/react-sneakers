import React from 'react'

import styles from "./SneakersItem.module.scss"

function SneakersItem({ title, price, imageUrl}) {
  const [select, setSelect] = React.useState(false)

  const onClickSelect = () => {
    setSelect(!select)
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
      <div>
        <img onClick={onClickSelect} width={20} height={20} src={select ? '/img/sucsess.svg' : '/img/plus.svg'} alt='plus' />
      </div>
    </div>
  </div>
  )
}

export default SneakersItem