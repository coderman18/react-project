import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.nav}>
          <div className={styles.item}><NavLink to='/profile' className={navData => navData.isActive ? styles.active : styles.item }>Profile</NavLink></div>
          <div className={styles.item}><NavLink to='/dialog'  className={navData => navData.isActive ? styles.active : styles.item }>Messages</NavLink></div>
          <div className={styles.item}><NavLink to='/news'  className={navData => navData.isActive ? styles.active : styles.item }>News</NavLink></div>
          <div className={styles.item}><NavLink to='/music'  className={navData => navData.isActive ? styles.active : styles.item }>Music</NavLink></div>
          <div className={styles.item}><NavLink to='/settings' className={navData => navData.isActive ? styles.active : styles.item }>Settings</NavLink></div>
        </nav>
    )
}

export default Nav;