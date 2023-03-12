import React from 'react'
import styles from './Dialogs.module.css'


const Dialog = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                <div className={styles.item}>
                    Pavel
                </div>
                <div className={styles.item}>
                    Sveta
                </div>
                <div className={styles.item}>
                    Ivan
                </div>
                <div className={styles.item}>
                    Peter
                </div>
                <div className={styles.item}>
                    Helen
                </div>
            </div>
            <div className={styles.messages}>
                <div className={styles.messageItems}>
                    Hello
                </div>
                <div className={styles.messageItems}>
                    How are you?
                </div>
                <div className={styles.messageItems}>
                    Were you go?
                </div>
                <div className={styles.messageItems}>
                    are can help me?
                </div>
                <div className={styles.messageItems}>
                    This good time for choose....
                </div>
            </div>
        </div>
    )
}

export default Dialog;