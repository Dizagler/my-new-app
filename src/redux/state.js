import { rerenderEntireTree } from "../render";

let state = {
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
}
}

export let addMessageDialog = () => {
  debugger;
   let newMessageDialog = {
     id: 7,
     message: state.dialogsPage.newMessageText,
   }
   state.dialogsPage.messages.push(newMessageDialog);
   rerenderEntireTree(state);
}

export let updateNewMessage = (newDialogMessage) => {
  state.dialogsPage.newMessageText= newDialogMessage;
  rerenderEntireTree(state);
}

export let addPost = () => {
   let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };

  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText= newText;
  rerenderEntireTree(state);
}

export default state;