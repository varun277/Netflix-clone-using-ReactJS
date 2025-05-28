import { useState } from 'react'
import React from 'react'
import { useNavigate } from 'react-router-dom';
import  './Mylist.css';

const Mylist = () => {
    const [clicked,onClicked]=useState(false);
    const navigate=useNavigate();
    const HandleLogout=()=>{
      localStorage.clear()
      navigate('/')
      // window.location.reload();
    }
  return (
    <div className='my-list-wrapper'>
    <div className="plain-navbar">
    <div className='plain-navbar-left-icon'>
      <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix" />
    </div>
    <div className='plain-navbar-right-icon'>
      <img src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"  alt="avatar" onClick={()=>onClicked(!clicked)}/>
      <ul className={clicked ? "opened" :"closed"}>
        <li><a href=''>My Profile</a></li>
        <li><a href='' onClick={()=>navigate('/my-list')}>My List</a></li>
        <li><a href='' onClick={()=>navigate('/settings')}>Settings</a></li>
        <li><a href='' onClick={HandleLogout}>Logout</a></li>
      </ul>
    </div>
    </div>
    </div>
  )
}

export default Mylist