import React from 'react'
import "../rightpane/RightPane.css";


export default function RightPane() {
  return (
    <div className=' rightPaneBox'>
      <div className='rightPaneContainer'>
        <div className='addContainer'>
          <span className='sponserd'>Sponserd</span>
          <img src='/images/addverties.png'alt='addverties' className='addverties'/>
          <span className='text'>
          fruit juice, their nutritional value, and their health benefits and risks. Find out how much fruit juice to drink per day and how to choose the best juice for your needs.
          </span>
        </div>
      <div className='birthDayCountainer'>
        <img src='/images/birth.png' alt=' birthDay' className='birthimage'/>
        <span className='birthDayText'><b>Sadeepa gayanath</b><b> and 2 Others</b> having birthday today..!</span>
      </div>
      <div className='active'>
        <li className='activeFriends'>
        <div className='activeFriendList'>
          <img src='/images/f1.jpeg' alt='activefriend' className='friend'/>
          <span className='onlineStatus'></span>
        </div>
          <span className='friendName'>Sadeepa gayanath</span>
        </li>
        <li className='activeFriends'>
        <div className='activeFriendList'>
          <img src='/images/f2.jpeg' alt='activefriend' className='friend'/>
          <span className='onlineStatus'></span>
        </div>
          <span className='friendName'>Haritha Pawan </span>
        </li>
        <li className='activeFriends'>
        <div className='activeFriendList'>
          <img src='/images/f3.jpeg' alt='activefriend' className='friend'/>
          <span className='onlineStatus'></span>
        </div>
          <span className='friendName'>Shenal Rajapaksha</span>
        </li>
        <li className='activeFriends'>
        <div className='activeFriendList'>
          <img src='/images/f1.jpeg' alt='activefriend' className='friend'/>
          <span className='onlineStatus'></span>
        </div>
          <span className='friendName'>Sadeepa gayanath</span>
        </li>
      </div>
      </div>
    </div>
  )
}
