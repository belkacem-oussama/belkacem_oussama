import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import styles from './styles.scss'

export default function NavBar(){

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState(false)

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    const hideMenu = () => {
      setBurgerClass("burger-bar unclicked")
      setMenuClass("menu hidden")
      setIsMenuClicked(false)
    }

    return(
        <div style={{width: '100%'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                    <div className={burger_class} ></div>
                </div>
            </nav>

            <div className={menu_class}>
              <div className="navLink_menu">
              <NavLink to="/" className={'navLink'} onClick={hideMenu}>Home</NavLink>
              <NavLink to="/presentation" className={'navLink'} onClick={hideMenu} >Me !</NavLink>
              <NavLink to="/stack" className={'navLink'} onClick={hideMenu} >Stack</NavLink>
              <NavLink to="/projects" className={'navLink'} onClick={hideMenu} >Projects</NavLink>
              {/* <NavLink to="/contact" className={'navLink'} onClick={hideMenu} >Contact</NavLink> */}
              </div>
            </div>
        </div>
    )
}