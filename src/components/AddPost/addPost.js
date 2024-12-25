import React from 'react'
import "../AddPost/addPost.css"
import ImageIcon from '@mui/icons-material/Image';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function addPost() {
  return (
    <div className='addpost'>
      <div className='addPostContainer'>
        <div className='addPostTop'>
            <img src='images/profile.jpeg' alt='profile'  className='addPostPic'/>
            <input type='text' placeholder='what in your mind?' className='addPostText'/>
        </div>
        <hr className='postHr'/>
        <div className='addPostBottom'>
          <div className='addPostOptions'>
            <div className='addPostOption'>
              <ImageIcon htmlColor='orange' className='addPhoto'/>
              <span className='addOptionText'>Photo/Video</span>
            </div>
            <div className='addPostOption'>
              <AddLocationAltIcon htmlColor='red'  className='addloaction'/>
              <span className='addOptionText'>Location</span>
            </div>
            <div className='addPostOption'>
              <LocalOfferIcon htmlColor='blue'  className='tag'/>
              <span className='addOptionText'>tag</span>
            </div>
            <div className='addPostOption'>
              <LiveTvIcon htmlColor='red'  className='live'/>
              <span className='addOptionText'>Live</span>
            </div>
          </div>
            <button className='btn'>post</button>
        </div>

      </div>
    </div>
  )
}
