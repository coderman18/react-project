import React from 'react'
import { updateNewPostText } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';



const Profile = (props) => {
  
    return (
        <div>
          <ProfileInfo />
          <MyPosts 
            // title='my post' 
            posts={props.profilePage.posts}
            newPostText={props.profilePage.newPostText}
            dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;