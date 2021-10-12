import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {


  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />)


  return (
    <div className={s.postsBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="10"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default Posts;
