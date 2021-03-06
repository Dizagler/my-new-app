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
import DialogsContainer from './components/Dialogs/DialogsContainer';




const App = (props) => {
  debugger;
  return (
     <div className="app-wrapper">
     <Header />
     <Navbar state={props.state.friendsNav} />
     <div class='app-wrapper-content'>
       < Route path = '/dialogs'
       render = {
           () => < DialogsContainer store = {
             props.store
           }
           /> } / >
       <Route path='/profile' render = { () => <Profile store={props.store}  /> } />
       <Route path='/music' render = { () => <Music /> } />
       <Route path='/news' render = { () => <News /> } />
       <Route path='/settings' render = { () => <Settings /> } />
       <Route path='/friends' render = { () => <Friends /> } />
     </div>
    </div>
  )
}

export default App;
