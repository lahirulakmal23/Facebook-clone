import React from 'react'
import AddPost from "../AddPost/addPost"
import FriendPost from "../FriendPost/friendPost"

import "../post/Post.css"


export default function Post() {
  return (
    <div className='post'>
      <AddPost/>
      <FriendPost/>
      <FriendPost/>
      <FriendPost/>

    </div>
   
  )
}
