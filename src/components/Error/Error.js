import React from 'react'
import { NavLink } from 'react-router-dom'
import error from '../../assets/404.png'

import styles from './styles.css'

export default function Error() {
  return (
    <div className='error' >
      <img src={error}></img>
      <h1>What are you doing here ?!</h1>
      <NavLink className='home' to="/">Come back with me !</NavLink>
    </div>
  )
}
