import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { BrowserRouter, Route} from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = (props) => {

  return (
    <BrowserRouter>
    <div className="app-wrapper">
     <Header />
     <Navbar />
     <div class='app-wrapper-content'>
       <Route exact path='/' render = { () => <Profile posts={props.posts}/> } />
       <Route path='/dialogs' render = { () => <Dialogs dialogs={props.dialogs} messages={props.messages}/> } />
       <Route path='/profile' render = { () => <Profile posts={props.posts}/> } />
       <Route path='/music' render = { () => <Music /> } />
       <Route path='/news' render = { () => <News /> } />
       <Route path='/settings' render = { () => <Settings /> } />
     </div>
    </div>
    </BrowserRouter>)
}

export default App;
