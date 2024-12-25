import React from 'react';
import NavBar from "../../components/navgation/navbar"
import LeftPane from '../../components/leftpane/LeftPane'
import Post from '../../components/post/Post';
import RightPane from '../../components/rightpane/RightPane';
import "./home.css";

export default function Home() {
  return (
    <div>  
      <NavBar/>

      <div className='bottemContainer'>
        <LeftPane/>
        <Post/>
        <RightPane/>
      </div>
     
     </div> 
    
  );
}
