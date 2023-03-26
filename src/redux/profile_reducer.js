const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
   
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 50},
            {id: 2, message: 'Hello!!', likesCount: 19},
            {id: 3, message: 'What you doing?', likesCount: 28},
            {id: 4, message: 'Help me please', likesCount: 32},
            {id: 5, message: 'This is very interesting themes...', likesCount: 46},
        ],
        newPostText: 'IT-Kamasutra.com'
    }

const profileReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 3
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
          
        default: 
            return state;
    };
};

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}


export default profileReducer;