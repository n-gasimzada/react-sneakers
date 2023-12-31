import React from 'react'
import "./Header.module.scss"
import Box from '../Busket'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Header() {
  const [open, setOpen] = React.useState(false)
  const items = useSelector(state => state.sneakers.items)
  const totalPrice = items.reduce((sum, obj) => obj.price + sum, 0)
  console.log(items)

  
  return (
    <div>
    <Box open={open} setOpen={setOpen} />
    <header className='d-flex justify-between align-center p-40'>
      <Link to="/">
        <div to="/" className='d-flex align-center'>
          <img width={40} height={40} src='/img/header/head-logo.png' alt='logo' />
          <div>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p className='opacity-5'>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
        <ul className='d-flex'>
          <li className='mr-30'>
            <img onClick={() => setOpen(true)} className='cu-p' width={18} height={18} src='/img/header/cart.svg' alt='cart' />
            <span>{totalPrice}руб.</span>
          </li>
          <Link to='/bookmarks'>
          <li>
            <img src='/img/favorite.svg' alt='unliked'/>
          </li>
          </Link>
          <Link to="/mypurchases">
          <li>
            <img className='cu-p' width={18} height={18} src='/img/header/user.svg' alt='user' />
          </li>
          </Link>
        </ul>
      </header>
    </div>
  )
}

export default Header