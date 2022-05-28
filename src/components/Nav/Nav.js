import React from 'react';
import styles from "./Nav.module.css"
import Logo from "../UI/Images/Logo.png"

const Nav = () => {
    return(
        <div className={`${styles['nav-container']} bg-light`}>
            <img className={styles['logo']} src={Logo} alt=""/>

        <ul className={'flex fs-400 letter-spacing-2'}>

            <li className={styles['nav-item']}><a href="">About Me</a></li>
            <li className={styles['nav-item']}><a href="">Portfolio</a></li>
            <li className={styles['nav-item']}><a href="">Shop</a></li>


        </ul>
        </div>
    )
}

export default Nav;