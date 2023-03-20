import React from 'react'
import DialogItems from './DialogItems/DialogItems'
import MessageItems from './MessageItems/MessageItems'
import styles from './Dialogs.module.css'
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialog_reducer'
import Dialogs from './Dialogs'
import { connect } from 'react-redux'




let mapStateToProps = (state) => {
    return {
       dialogPage: state.dialogPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageCreator());
        },
        senMessage: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;