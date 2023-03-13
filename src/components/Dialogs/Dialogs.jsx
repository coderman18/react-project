import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css'



const DialogItem = (props) => {

    let path = '/dialog/' + props.id;

    return (
        <NavLink to={path}>{props.name}</NavLink>
    )
}

const Messages = (props) => {
    return (
        <div className={styles.messageItems}>{props.message}</div>
    )
}

const Dialog = (props) => {

    let dialogData = [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Helen'}
    ]

    let dialogElements = dialogData
        .map(d => <DialogItem 
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
        .map(m => <Messages 
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