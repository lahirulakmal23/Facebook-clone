import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';
import "./navbar.css";


export default function navbar() {
  return (
    <div className='Navbarbox'> 
        <div className='navbar-left'>
            <span className='logo'>facebook</span>
        </div>

        <div className='navbar-center'>
            <div className='serchBox'>
                <SearchIcon className='serchicon'/>
                <input placeholder='search your friend' className='searchtext'></input>
            </div>

        </div>
        <div className='navbar-right'>
          <div className='navbarlinks'>
            <span className='navbarlink'>HomePage</span>
            <span className='navbarlink'>Profile</span>
           
          </div>
          <div className='navbaricons'>
           <div className='navbaricon'>
              <PersonIcon/>
              <span className='icontag>'>3</span>
           </div>
           <div className='navbaricon'>
            <MessageIcon/>
            <span className='icontag>'>4</span>
           </div>
           <div className='navbaricon'>
              <SettingsIcon/>
              <span className='icontag>'>5</span>
           </div>


          </div>
          <div className='propic'>
            <img src='./images/profile.jpeg' alt=' ' className='profileimage'/>
          </div>
        </div>
    </div>
  )
}
