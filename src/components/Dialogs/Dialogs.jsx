import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state'



const Dialogs = (props) => {

    let state = props.store.getState().dialogPage;

    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)

    let messageElements = state.messages.map(m => <MessageItems message={m.message} id={m.id} />) 

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {dialogElements}
            </div>
            <div className={styles.messageItems}>
                <div>{messageElements}</div>
            </div>
            <div className={styles.blockMessages}>
                <div>
                    <textarea 
                        value={newMessageBody}
                        onChange={onNewMessageChange}
                        placeholder='Введите текст сообщения'></textarea>
                </div>
                <div>
                    <button
                        onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;