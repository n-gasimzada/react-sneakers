import React from 'react'

import styles from "./Busket.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { removeSneakers } from '../../redux/slices/sneakersSlice'

function Busket({ open, setOpen }) {
    const items = useSelector((state) => state.sneakers.items)
    const dispatch = useDispatch()

    const onClickChange = () => {
        setOpen(false)
    }

    return (
        <div>
            {open && <div className={styles.cover}>
                <div className={styles.box}>
                    <h2 className='mb-30 d-flex justify-between'>Корзина <img onClick={onClickChange} className='cu-p' src='/img/remove.svg' alt='remove' /></h2>

                    {items.length > 0 ? <div className={styles.cartWrapper}>
                        <div className={styles.items}>
                            {items.map((obj) =>
                                <div className={styles.cartItem} >
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img onClick={() => dispatch(removeSneakers(obj.id))} className={styles.removeBtn} src='/img/remove.svg' alt='remove' />
                                </div>
                            )}
                        </div>
                        <div className={styles.cartTotalBlock}>
                            <ul>
                                <li>
                                    <span>Итого:</span>
                                    <div></div>
                                    <b>21 498 руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>1074 руб.</b>
                                </li>
                            </ul>

                            <button className={styles.greenButton}>Оформить заказ <img src='/img/arrow.svg' alt='arrow' /></button>
                        </div>
                    </div>
                        :
                        <div div className={styles.cartEmpty} >
                            <img className='mb-20' width={120} height={120} src='/img/empty-cart.png' alt='EmptyCart' />
                            <h2>Корзина пустая</h2>
                            <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
                            <button className={styles.greenButton}>
                                <img src='/img/arrow.svg' alt='Arrow' /> Вернуться назад
                            </button>
                        </div>


                    }

                </div>
            </div>}
        </div>
    )
}

export default Busket



