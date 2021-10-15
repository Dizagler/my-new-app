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
  newMessageText: "",
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

addMessageDialog() {
    let newMessageDialog = {
    id: 7,
    message: this._state.dialogsPage.newMessageText,
  }
  this._state.dialogsPage.messages.push(newMessageDialog);
  this._state.dialogsPage.newMessageText = '';
  this._callSubscriber(this.state);
},
updateNewMessage (newDialogMessage) {
    this._state.dialogsPage.newMessageText = newDialogMessage;
    this._callSubscriber(this._state);
},
addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
},
updateNewPostText(newText) {
  this._state.profilePage.newPostText = newText;
  this._callSubscriber(this._state);
},
dispatch(action) {   // { type: 'ADD-POST' }
  if (action.type === 'ADD-post') {
   let newPost = {
     id: 5,
     message: this._state.profilePage.newPostText,
     likesCount: 0,
   };
   this._state.profilePage.posts.push(newPost);
   this._state.profilePage.newPostText = '';
   this._callSubscriber(this._state);
  } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  }

}

}





export default store;