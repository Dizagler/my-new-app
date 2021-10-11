import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  return ( <
    div className = {s.item}>
    <img src = "https://cdn-icons-png.flaticon.com/512/147/147144.png" alt = "" />
    {props.message}
    <div>
    <span> Like {props.countLikes} </span> 
    </div>
    </div>
  )
}

export default Post;