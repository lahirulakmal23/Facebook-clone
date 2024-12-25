import React from 'react'
import './friendPost.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

import FavoriteIcon from '@mui/icons-material/Favorite';

export default function friendPost() {
  return (
    <div className='post1'>
        <div className='postContainer'>
            <div className='postTop'>
                <img src='/images/p1.JPG' alt='friend' className='friendProlie'/>
                <span className='name1'>Shalini Rupasinha</span>
                <span  className='time'>2 mins ago</span>
            </div>
            <div className='postCenter'>
                <div className=' postCaption'> Hi Lamai</div>
                <img src='/images/p1.JPG' alt='proile' className='friend1'/>
            </div>
            <div className='postBottom'>
                <div className='postbttomLeft'>
                    
                    <img src='/images/like.png'alt='like'className='rectionPic'/>
                    <img src='/images/hart.png'alt='hart'className='rectionPic'/>
                    <img src='/images/haha.png'alt='haha'className='rectionPic'/>
                    <span className='likeCount'>lahiru and 10k Others</span>
                </div>
                <div className='PostBottomright'>
                    <div className='CommentCount'>
                        350 Comments
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
