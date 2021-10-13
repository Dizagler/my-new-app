import React from 'react';
import s from './Navbar.module.css';

const FriendsBlock = (props) => {
  console.log(props.friends);
  return (
    <div className={s.friendsBlock}>
      <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" />
      <div className={s.friendsItem}>
      {props.name}
      </div>
    </div>
  )
}


export default FriendsBlock;