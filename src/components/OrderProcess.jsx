import React from 'react'

import styles from "../components/Busket/Busket.module.scss"

function OrderProcess({ title, description, image, onClickChange}) {
    return (
        <div div className={styles.cartEmpty} >
            <img className='mb-20' src={image} alt='EmptyCart' />
            <h2>{title}</h2>
            <p className='opacity-6'>{description}</p>
            <button onClick={onClickChange} className={styles.greenButton}>
                <img src="/img/arrow.svg"  alt='Arrow' /> Вернуться назад
            </button>
        </div>
    )
}

export default OrderProcess