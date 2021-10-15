import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (state) => {
 ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <App state={state} addMessageDialog={store.addMessageDialog.bind(store)} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)} updateNewMessage={store.updateNewMessage.bind(store)} />
    </React.StrictMode>
    </BrowserRouter>,document.getElementById('root')
  ); 
  }


rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
