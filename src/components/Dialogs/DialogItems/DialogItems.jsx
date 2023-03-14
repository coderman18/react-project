import React from 'react'
import styles from './DialogItems.module.css'

import { NavLink } from 'react-router-dom';


const DialogItems = (props) => {

    let path = '/dialog/' + props.id;

    return (
        
        <div className={styles.dialogItems}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
        
    )
}

export default DialogItems;