import React from 'react'

import styles from "./SneakersItem.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addFavorites, addSneakers } from '../../redux/slices/sneakersSlice'

function SneakersItem({ id, title, price, imageUrl }) {
  const [select, setSelect] = React.useState(0)
  const [liked, setLiked] = React.useState(false)
  const dispatch = useDispatch()
  const favorite = useSelector(state => state.sneakers.favorites)
  const sneakers = useSelector(state => state.sneakers.items)

  const onClickAdd = () => {
    setSelect(select + 1)
    const findSneakers = sneakers.find((obj) => obj.id === id)
    if(!findSneakers) {
      dispatch(addSneakers({
        id,
        title,
        price,
        imageUrl,
      }))
    }
  }

  const myLikedSneakers = () => {
    setLiked(!liked)
    const findItem = favorite.find((obj) => obj.id === id)
    if(!findItem) {
      dispatch(addFavorites({
        id,
        title,
        price,
        imageUrl,
      }))
    }
  }

  React.useEffect(() => {

  }, [liked])

  return (
    <div className={styles.card}>
      <div className={styles.favorite}>
        <img onClick={myLikedSneakers} src={favorite.find((obj) => obj.id === id) ? '/img/hliked.svg' : '/img/unliked.jpg'} alt='unliked' />
      </div>
      <img width={133} height={112} src={imageUrl} alt='sneakers' />
      <h5>{title}</h5>
      <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
          <span>Цена:</span>
          <b>{price}</b>
        </div>
        <div className={styles.cartAdd}>
          <img onClick={onClickAdd} width={20} height={20} src={sneakers.find((obj) => obj.id === id) ? '/img/sucsess.svg' : '/img/plus.svg'} alt='plus' />
        </div>
      </div>
    </div>
  )
}

export default SneakersItem