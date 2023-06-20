import React from 'react'

function SneakersItem({ id, title, price, imageUrl}) {
  return (
    <div className='card'>
    <div className='favorite'>
      <img src='/img/unliked.jpg' alt='unliked' />
    </div>
    <img width={133} height={112} src={imageUrl} alt='sneakers' />
    <h5>{title}</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className='button'>
        <img width={11} height={11} src='/img/plus.svg' alt='plus' />
      </button>
    </div>
  </div>
  )
}

export default SneakersItem