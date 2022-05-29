import React from 'react';
import styles from "./Nav.module.css"
import Logo from "../UI/Images/Logo.png"

const Nav = (props) => {
    return(
        <div className={`${styles['nav-container']} bg-light`}>
            <img onClick={()=> props.handlePageChange('Home')} className={styles['logo']} src={Logo} alt=""/>

        <ul className={'flex fs-400 letter-spacing-2'}>

            <li onClick={()=>props.handlePageChange('About Me')}
                className={`${styles['nav-item']} gradient-yellow-pink`}>
                About Me</li>

            <li onClick={()=>props.handlePageChange('Portfolio')}
                className={`${styles['nav-item']} gradient-pink-dark-blue`}>
                Portfolio</li>

            <li onClick={()=>props.handlePageChange('Shopping')}
                className={`${styles['nav-item']} gradient-green-light-blue`}>
            Shopping
            </li>



        </ul>
        </div>
    )
}

export default Nav;