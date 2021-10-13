import React from 'react';
import s from './Navbar.module.css';

const FriendsBlock = (props) => {
   return (
    <div className={s.friendsBlock}>
       <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      {props.friends}
     </div>
  )
}


export default FriendsBlock;