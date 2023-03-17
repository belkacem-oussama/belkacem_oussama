import { NavLink } from 'react-router-dom';

import styles from './styles.css'

function Header() {
  return (
    <div className='header'>
      <div className='navbar'>
        <NavLink to="/" className={'navLink'} >Welcome !</NavLink>
        <NavLink to="/presentation" className={'navLink'} >Présentation</NavLink>
        <NavLink to="#" className={'navLink'} >Stack</NavLink>
        <NavLink to="#" className={'navLink'} >Projects</NavLink>
        <NavLink to="/contact" className={'navLink'} >Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;