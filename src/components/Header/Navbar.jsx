import React from 'react'
import { Link } from 'react-router-dom'
import './Header.jsx'

const navLinks = [
  {
    title: "Menu 1",
    url: 'menu1'
  },
  {
    title: "Menu 2",
    url: 'menu2'
  },
  {
    title: "Menu 3",
    url: 'menu3'
  }
]

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        {navLinks.map((item, index) => (
          <li key={index}><Link className='link' to={item.url}>{item.title}</Link></li>
        ))}
      </ul>
    </div>
  )
}

export default Navbar