import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Music from './components/Music/Music';
import {Route} from "react-router-dom";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import Friends from './components/Friends/Friends';




const App = (props) => {
  return (
     <div className="app-wrapper">
     <Header />
     <Navbar state={props.state.friendsNav} />
     <div class='app-wrapper-content'>
        <Route path='/dialogs' render = { () => <Dialogs dialogsPage={props.state.dialogsPage} addMessageDialog={props.addMessageDialog} updateNewMessage={props.updateNewMessage}  /> } />
       <Route path='/profile' render = { () => <Profile profilePage={props.state.profilePage} addPost={props.addPost} updateNewPostText={props.updateNewPostText} /> } />
       <Route path='/music' render = { () => <Music /> } />
       <Route path='/news' render = { () => <News /> } />
       <Route path='/settings' render = { () => <Settings /> } />
       <Route path='/friends' render = { () => <Friends /> } />
     </div>
    </div>
  )
}

export default App;
