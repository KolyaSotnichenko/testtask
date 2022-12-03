import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

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
    },
    {
        title: "Menu 3",
        url: 'menu3'
    },
    {
        title: "Menu 3",
        url: 'menu3'
    },
    {
        title: "Menu 3",
        url: 'menu3'
    }
]

const Footer = () => {
  return (
    <div className='footer'>
        <ul>
        {navLinks.map((item, index) => (
          <li key={index}><Link className='link' to={item.url}>{item.title}</Link></li>
        ))}
        </ul>
    </div>
  )
}

export default Footer