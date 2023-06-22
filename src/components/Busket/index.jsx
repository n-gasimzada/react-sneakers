import React from 'react'

import styles from "./Busket.module.scss"
import { useSelector } from 'react-redux'

function Busket({ open, setOpen }) {
    const [empty, SetEmpty] = React.useState(true)
    const items = useSelector((state) => state.sneakers.items)

    React.useEffect (() => {

    }, [items])

    console.log(items)


    return (
        <div>
            {open && <div className={styles.cover}>
                <div className={styles.box}>
                    <h2 className='mb-30 d-flex justify-between'>Корзина <img onClick={() => setOpen(false)} className='cu-p' src='/img/remove.svg' alt='remove' /></h2>

                    {empty ? <div className={styles.cartWrapper}>
                        <div className={styles.items}>
                            {items.map((obj) =>
                                <div className={styles.cartItem} >
                                    <div style={{ backgroundImage: `url(${obj.imageUrl})` }} className={styles.cartItemImg}></div>
                                    <div className='mr-20 flex'>
                                        <p className='mb-5'>{obj.title}</p>
                                        <b>{obj.price}</b>
                                    </div>
                                    <img className={styles.removeBtn} src='/img/remove.svg' alt='remove' />
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



