import React from 'react'
import styles from './MessageItems.module.css'


const MessageItems = (props) => {
    return (
        <div className={styles.messages}>
            <div className={styles.messageItems}>{props.message}</div>
        </div>
    )
}

export default MessageItems;