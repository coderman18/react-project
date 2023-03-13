import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 50},
        {id: 2, message: 'Hello!!', likesCount: 19},
        {id: 3, message: 'What you doing?', likesCount: 28},
        {id: 4, message: 'Help me please', likesCount: 32},
        {id: 5, message: 'This is very interesting themes...', likesCount: 46},
    ]

    let postsElements = postData
        .map(p => <Post 
            message={p.message} 
            likesCount={p.likesCount}/>)

    return (
        <div className={styles.post}>
            <div className={styles.title}>
                <h5>{props.title}</h5>
            </div>
            <div className={styles.blockPosts}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;