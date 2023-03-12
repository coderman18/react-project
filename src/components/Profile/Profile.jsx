import React from 'react'
import MyPosts from './MyPosts/MyPosts';
// import main from '../../img/bg/bg-1.jpg'
import styles from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={styles.content}>
          {/* <img src={main}></img> */}
          <div className={styles.profileTitle}>Profile</div>
          <MyPosts title='my post'/>
        </div>
    )
}

export default Profile;