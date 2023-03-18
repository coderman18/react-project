import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post';

import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/state';



const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post 
            message={p.posts} 
            likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    let addPost = () =>  {
        props.dispatch(addPostActionCreator());
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    }

    return (
        <div className={styles.post}>
            <div className={styles.title}>
                <h5>{props.title}</h5>
            </div>
            <div className={styles.blockPosts}>
                <div>
                    <textarea 
                        placeholder='оставьте свое сообщение'
                        onChange={onPostChange}
                        ref={newPostElement} 
                        value={props.newPostText} />
                </div>
                <div>
                    <button
                        onClick={addPost}
                    >Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;