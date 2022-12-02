import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'

const Auth = () => {
  return (
    <div className='loginBtn'><Link to='login'>Login</Link></div>
  )
}

export default Auth