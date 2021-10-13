import React from 'react';
import { NavLink } from 'react-router-dom';
import FriendsBlock from './FriendsBlock';
import s from './Navbar.module.css';



const Navbar = (props) => {

  let friendsElements = props.state.friends.map(f => <FriendsBlock friends={f.name} id={f.id} />);

    return <nav className={s.nav}>
    <div className={s.item}>
      <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/news' activeClassName={s.active}>News</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
    </div>
    <div className={s.item}>
      <NavLink to='settings' activeClassName={s.active}>Settings</NavLink>
    </div>
    <br />
    <div className={s.item}>
      <NavLink to='friends' activeClassName={s.active}>Friends</NavLink>
      <div>
        {friendsElements}
      </div>   
    </div>
    </nav>
  
}


export default Navbar;