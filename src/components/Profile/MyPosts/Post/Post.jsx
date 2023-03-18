import React from 'react'
import styles from './Post.module.css'
// import avatar from 'src/img/icons/react-logo@3x.svg'


const Post = (props) => {
   
    return (
        <div className={styles.post}>
            <div>Post</div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIheZCz2ouiweZiqfE4fBH6w_7fgkTFhn6rxLAswXfSw_y_MfyhPSDsu6TqKHF9pZ5&usqp=CAU' alt='avatar'/>
            <p className={styles.postLikes}>{props.posts}{props.name}</p>
            <p>Likes:</p>
        </div>
    )
}

export default Post;