import dialogReducer from "./dialog_reducer";
import profileReducer from "./profile_reducer";


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

//   reducers
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogPage = dialogReducer( this._state.dialogPage, action);
        this._callSubscriber(this._state);

    }
}


export default store;
window.store = store;