import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


// передает данные из state в пропсах
const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

// передает callback функции
const  mapDispatchtoProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts);

export default MyPostsContainer;