import React from 'react';
import s from './Profile.module.css';
import Posts from './Posts/Posts';

const Profile = () => {
  return (
  <div>
    <div>
    <img src="https://media.publit.io/file/Snow-background-night.png" alt="" />
     </div>
       <div>
     ava+description
   </div>
   <Posts/>
   </div>
  ) 
}

export default Profile;