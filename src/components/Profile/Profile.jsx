import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  return (
  <div className={s.profileContent}>
    <ProfileInfo />
    <Posts posts={props.profilePage.posts} 
    newPostText={props.profilePage.newPostText}
    dispatch ={props.dispatch}
    addPost={props.addPost}/>
   </div>
  ) 
}

export default Profile;