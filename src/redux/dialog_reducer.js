const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Were you go?'},
        {id: 4, message: 'You can help me?'},
        {id: 5, message: 'This good time for choose....'}, 
    ],
    dialogs: [
        {id: 1, name: 'Pavel'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Peter'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Helen'}
    ], 
}

const dialogReducer = (state = initialState, action) => {

    let stateCopy;
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        
        case  SEND_MESSAGE:
            let body = stateCopy.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
           
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogReducer;