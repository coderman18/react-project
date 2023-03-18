const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 50},
                {id: 2, message: 'Hello!!', likesCount: 19},
                {id: 3, message: 'What you doing?', likesCount: 28},
                {id: 4, message: 'Help me please', likesCount: 32},
                {id: 5, message: 'This is very interesting themes...', likesCount: 46},
            ],
            newPostText: ''
           
        },
    
        dialogPage: {
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
            newMessageBody: ''
        },
        sidebar: {}
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    getState() {
        return this._state;
    },

    _callSubscriber() {
        console.log('state is changed');
    },

  
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 3
            };
            this._state.profilePage.posts.push(newPost);
           
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogPage.newMessageBody;
            this._state.dialogPage.newMessageBody = '';
            this._state.dialogPage.messages.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})


export default store;
window.store = store;