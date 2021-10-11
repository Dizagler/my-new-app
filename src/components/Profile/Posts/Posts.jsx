import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
  <div>
    my posts
    <div>
      <textarea name="" id="" cols="30" rows="10"></textarea>
      <button>Add post</button>
    </div>
    <div className={s.posts}>
      <Post message='hi, how are you?'countLikes='83'/>
      <Post message='its my first post' countLikes='20'/>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  </div>
  )

}

export default Posts;
