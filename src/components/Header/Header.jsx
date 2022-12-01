import React from 'react'
import Auth from './Auth'
import Logo from './Logo'
import Navbar from './Navbar'
import './Header.scss'

const Header = () => {
  return (
    <header className='container'>
      <div className='leftSide'>
        <Logo />
        <Navbar />
      </div>
      <Auth />
    </header>
  )
}

export default Header