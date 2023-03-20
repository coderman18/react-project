import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog_reducer'



const Dialogs = (props) => {

    let state = props.dialogPage;

    let dialogElements = state.dialogs.map(d => <DialogItems name={d.name} id={d.id} />)

    let messageElements = state.messages.map(m => <MessageItems message={m.message} id={m.id} />) 

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
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