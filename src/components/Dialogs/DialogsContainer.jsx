
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
        senMessage: (body) => {
            dispatch(sendMessageCreator(body));
        },
        updateNewMessageBody: (body) => {
            dispatch(updateNewMessageBodyCreator(body));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;