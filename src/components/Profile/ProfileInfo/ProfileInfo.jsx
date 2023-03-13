import React from 'react'
import styles from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
          <div className={styles.profileInfo}>
            <img src='https://yabloremont.ru/wp-content/uploads/2015/04/video-bg.jpg'></img>
          <div className={styles.profileTitle}>Profile</div>
          </div>
    )
}

export default ProfileInfo;