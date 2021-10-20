import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';




const Posts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likes={p.likesCount} />);

  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} className={s.textarea} placeholder="Напишите что у вас нового!" id="" cols="100" rows="5"></textarea>
        </div>
        <div>
          <button onClick={onAddPost}>Опубликовать пост</button>
        </div>

      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )

}

export default Posts;
