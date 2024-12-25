import React from 'react'
import "../leftpane/LeftPane.css";
import ChatIcon from '@mui/icons-material/Chat';
import GroupIcon from '@mui/icons-material/Group';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import FlagIcon from '@mui/icons-material/Flag';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';



export default function LeftPane() {
  return (
    <div className='leftPane'>
        <div className='leftPaneContainer'>
            <div className='leftPaneMenu'>
                <li className='leftPaneMenuItem'>
                    <ChatIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'> Messages</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <GroupIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'>Groups</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <RssFeedIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'> Feed</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <FlagIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'>Pages</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <CalendarMonthIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'>Event</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <SettingsIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'> Settings</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <SportsEsportsIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'> Games</span>
                </li>
                <li className='leftPaneMenuItem'>
                    <AddShoppingCartIcon className='leftPaneIcon'/>
                    <span className='leftPaneText'> Market</span>
                </li>
                <hr/>
                <div className='likePage'>
                    <h>Page You Liked</h>
                </div>
                <div className='pageListItem'>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>
                <li className='pageList'>
                    <img src='./images/p1.JPG' className='page1'/>
                    <span className='pageName'>code with shali</span>
                </li>

                </div>

            </div>

        </div>
    </div>
  )
}
