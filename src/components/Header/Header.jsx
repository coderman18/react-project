import React from 'react'
import styles from './Header.module.css'
import logo from '../../img/icons/react-logo@3x.svg'

const Header = () => {
    return (
      <header className={styles.header}>
        <img src={logo} alt='img'/>
        {/* <h2>React Project by IT-Kamasutra</h2> */}
      </header>
    )
  }

  export default Header;