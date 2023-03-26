import React from 'react'
import styles from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post 
            message={p.message} 
            likesCount={p.likesCount}
            key={p.id}/>)

    let newPostElement = React.createRef();

    let onAddPost = () =>  {
        props.addPost();
        
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
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
                        onClick={onAddPost}
                    >Add post</button>
                </div>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;