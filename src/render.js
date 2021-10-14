import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addMessageDialog, addPost, updateNewMessage, updateNewPostText} from './redux/state';
import { BrowserRouter } from 'react-router-dom';



export let rerenderEntireTree = (state) => {
 ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App state={state} addMessageDialog={addMessageDialog} addPost={addPost} updateNewPostText={updateNewPostText}
    updateNewMessage={updateNewMessage} />
    </React.StrictMode>
    </BrowserRouter>,document.getElementById('root')
  ); 
  }