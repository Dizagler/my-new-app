import React from 'react';
import s from './Navbar.module.css';

const FriendsBlock = (props) => {
   return (
    <div className={s.friendsBlock}>
      {props.friends}
     </div>
  )
}


export default FriendsBlock;