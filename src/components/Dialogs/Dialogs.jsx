import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'
import styles from './Dialogs.module.css'



const Dialog = (props) => {

    let dialogData = [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Helen'}
    ]

    let dialogElements = dialogData
        .map(d => <DialogItems 
            name={d.name} 
            id={d.id} />)

    let messageData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Were you go?'},
        {id: 4, message: 'You can help me?'},
        {id: 5, message: 'This good time for choose....'}, 
    ]

    let messageElements = messageData
        .map(m => <MessageItems 
            message={m.message} 
            id={m.id} />) 


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogElements}
            </div>
            <div className={styles.messageItems}>
                {messageElements}
            </div>
        </div>
    )
}

export default Dialog;