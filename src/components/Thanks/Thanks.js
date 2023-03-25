import { NavLink } from 'react-router-dom'

import thanksLogo from '../../assets/thanks.png'

import styles from './styles.css'

export default function Thanks() {
  return (
    <div className='thanks'>
        <img src={thanksLogo}></img>
        <h1>Your message have been sent !</h1>
        <NavLink to='/' id='navlink' >Come back to Home</NavLink>
    </div>
  )
}
