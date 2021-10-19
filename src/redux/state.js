const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {
  _state: {
profilePage: {
    posts: [ 
    { id: 1, message: 'Hi its my firs post =)', likesCount: 12 },
    { id: 2, message: 'Whats up bro ', likesCount: 11 },
    { id: 3, message: 'Whats up bro ', likesCount: 15 },
    { id: 4, message: 'Whats up bro ', likesCount: 19 },
  ],
  newPostText: "",
},
dialogsPage: {
   dialogs: [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Ira' },
    { id: 4, name: 'Sveta' },
    { id: 5, name: 'Uliya' },
    { id: 6, name: 'Ivan' },
  ],
  messages: [
    { id: 1, message: 'hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Im fine, and you?' },
    { id: 4, message: 'Fine, what will you do tomorrow?' },
    { id: 5, message: 'IDK' },
    { id: 6, message: 'Go to the cinema.' },
  ],
  newMessageBody: "",
},
friendsNav: {
  friends: [
      { id: 1, name: 'Andrey'},
      { id: 2, name: 'Dima'},
      { id: 3, name: 'Ira' },
]
},
},
getState() {
  return this._state;
},
_callSubscriber() {
  console.log('state changed');
},
subscribe(observer){
  this._callSubscriber = observer;
},

// addMessageDialog() {
//     let newMessageDialog = {
//     id: 7,
//     message: this._state.dialogsPage.newMessageText,
//   }
//   this._state.dialogsPage.messages.push(newMessageDialog);
//   this._state.dialogsPage.newMessageText = '';
//   this._callSubscriber(this.state);
// },
// updateNewMessage (newDialogMessage) {
//     this._state.dialogsPage.newMessageText = newDialogMessage;
//     this._callSubscriber(this._state);
// },
// addPost() {
//     let newPost = {
//       id: 5,
//       message: this._state.profilePage.newPostText,
//       likesCount: 0,
//     };
//     this._state.profilePage.posts.push(newPost);
//     this._state.profilePage.newPostText = '';
//     this._callSubscriber(this._state);
// },
// updateNewPostText(newText) {
//   this._state.profilePage.newPostText = newText;
//   this._callSubscriber(this._state);
// },
dispatch(action)   {// { type: 'ADD-POST' }
    if (action.type === ADD_POST) {
   let newPost = {
     id: 5,
     message: this._state.profilePage.newPostText,
     likesCount: 0,
   };
   this._state.profilePage.posts.push(newPost);
   this._state.profilePage.newPostText = '';
   this._callSubscriber(this._state);
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(this._state);
  } else if (action.type === SEND_MESSAGE) {
    let body = this._state.dialogsPage.newMessageBody;
    this._state.dialogsPage.newMessageBody = '';
    this._state.dialogsPage.messages.push({id:7, message: body});
        this._callSubscriber(this.state);
  } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
     this._state.dialogsPage.newMessageBody = action.body;
     this._callSubscriber(this._state);
  }

}

}

export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
}
export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export const addMessageDialogActionCreator = () => {
  debugger;
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageActionCreator = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    newDialogMessage: text
  }
}


export default store;