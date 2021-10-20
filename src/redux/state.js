// import dialogsReducer from "./dialogs-reducer";
// import profileReducer from "./profile-reducer";
// import sidebarReducer from "./sidebar-reducer";


// let store = {
//   _state: {
// profilePage: {
//     posts: [ 
//     { id: 1, message: 'Hi its my firs post =)', likesCount: 12 },
//     { id: 2, message: 'Whats up bro ', likesCount: 11 },
//     { id: 3, message: 'Whats up bro ', likesCount: 15 },
//     { id: 4, message: 'Whats up bro ', likesCount: 19 },
//   ],
//   newPostText: "",
// },
// dialogsPage: {
//    dialogs: [
//     { id: 1, name: 'Dima' },
//     { id: 2, name: 'Andrey' },
//     { id: 3, name: 'Ira' },
//     { id: 4, name: 'Sveta' },
//     { id: 5, name: 'Uliya' },
//     { id: 6, name: 'Ivan' },
//   ],
//   messages: [
//     { id: 1, message: 'hi' },
//     { id: 2, message: 'How are you?' },
//     { id: 3, message: 'Im fine, and you?' },
//     { id: 4, message: 'Fine, what will you do tomorrow?' },
//     { id: 5, message: 'IDK' },
//     { id: 6, message: 'Go to the cinema.' },
//   ],
//   newMessageBody: "",
// },
// friendsNav: {
//   friends: [
//       { id: 1, name: 'Andrey'},
//       { id: 2, name: 'Dima'},
//       { id: 3, name: 'Ira' },
// ]
// },
// },
// getState() {
//   return this._state;
// },
// _callSubscriber() {
//   console.log('state changed');
// },
// subscribe(observer){
//   this._callSubscriber = observer;
// },


// dispatch(action)   {// { type: 'ADD-POST' }
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._state.friendsNav = sidebarReducer(this._state.friendsNav, action);
//     this._callSubscriber(this._state);
//   }

// }






// export default store;