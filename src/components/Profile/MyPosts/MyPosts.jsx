import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.title}>{props.title}</div>
            <Post name='Pavel' />
            <Post message='it is my fyrst post' likesCount='0'/>
            <Post message='How are you?' likesCount='20'/>
        </div>
    )
}

export default MyPosts;