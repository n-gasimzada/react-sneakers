import React from 'react'

import styles from "./Busket.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { addOrder, clearCart, removeSneakers } from '../../redux/slices/sneakersSlice'
import OrderProcess from '../OrderProcess'

function Busket({ open, setOpen }) {
    const items = useSelector((state) => state.sneakers.items)
    const totalPrice = items.reduce((sum, obj) => sum + obj.price, 0)
    const tax = (totalPrice * 5 / 100)
    const order = useSelector((state) => state.sneakers.order)
    const dispatch = useDispatch()

    const onClickChange = () => {
        setOpen(false)
    }

    const onClickSendOrder = () => {
        dispatch(addOrder(items))
        dispatch(clearCart())
    }

    return (
        <div>
            {open && <div className={styles.cover}>
                <div className={styles.box}>
                    <h2 className='mb-30 d-flex justify-between'>Корзина <img onClick={onClickChange} className='cu-p' src='/img/remove.svg' alt='remove' /></h2>

                    {items.length > 0 ? <div className={styles.cartWrapper}>
                        <div className={styles.items}>
                            {items.map((obj) =>
                                <div key={obj.id} className={styles.cartItem} >
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
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
                                    <b>{totalPrice} руб.</b>
                                </li>
                                <li>
                                    <span>Налог 5%:</span>
                                    <div></div>
                                    <b>{tax} руб.</b>
                                </li>
                            </ul>

                            <button onClick={onClickSendOrder} className={styles.greenButton}>Оформить заказ <img src='/img/arrow.svg' alt='arrow' /></button>
                        </div>
                    </div>
                        :
                        <OrderProcess 
                        title={order.length > 0 ? "Заказ оформлен!" : "Корзина пустая"}
                        description={order.length > 0 ? "Ваш заказ #18 скоро будет передан курьерской доставке" : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."}
                        image={order.length > 0 ? "/img/order.png" : "/img/empty-cart.png"}
                        onClickChange={onClickChange}
                        />
                    }

                </div>
            </div>}
        </div>
    )
}

export default Busket



