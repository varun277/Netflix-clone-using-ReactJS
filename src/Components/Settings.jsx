import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Settings.css'
import { Password, UserCircle,Warning,CreditCard } from 'phosphor-react';

const Settings = () => {
    const [clicked,onClicked]=useState(false);
    const navigate=useNavigate();
    const HandleLogout=()=>{
      localStorage.clear()
      navigate('/')
      // window.location.reload();
    }
    let test="";
    const userName=localStorage.getItem("emailData");
    const passWord=localStorage.getItem("passwordData")
    for(let i=0;i<passWord.length;i++)
    {
         let star=passWord.replace(/[\w\d]+/,"*");
         test=test.concat(star);
    }
  return (
    <div className='settings-wrapper'>
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
        <div className='settings-container'>
            <h1>Account&nbsp;<UserCircle size={22} className='user-icon' /> <p className='user-descriptions' >Member Since March 2020</p></h1>
            <div className='verification'>
                <Warning className='warning-logo'/>
                <div className='verification-description'>
                    <h4>Verify your mobile number</h4>
                    <p style={{marginTop: "5px",fontSize: "16px",}}>Verifying your phone number enhances security and can help you access and recover your account. Verify now.</p>
                </div>
            </div>
            <hr style={{marginTop: "20px"}} />
            <div className='user-billing-info'>
                <div className='membership-billing'>
                <h3 style={{color: "grey"}}>MEMBERSHIP & BILLING</h3>
                <button className='cancel-membership-btn'>Cancel Membership</button>
                </div>
                <div className='user-detail-section'>
                    <p style={{fontWeight: "bold"}}>{userName}</p>
                    <p>Password : <span style={{fontWeight: "bold"}}>{test}</span></p>
                    <p>Phone : <span style={{fontWeight: "bold"}}>********51</span></p>
                    <br/>
                    <CreditCard size={30} color="#0a0a0a" weight="thin" style={{paddingTop :"5px"}}/><h4>•••• •••• •••• 2003</h4>
                    <p>Your next billing date is <span style={{fontWeight: "bold"}}>31 December 2023</span>.</p>
                </div>
                <div className='change-settings'>
                    <p><a href=''>Change account email</a></p>
                    <p><a href=''>Change password</a></p>
                    <p><a href=''>Change phone number</a></p>
                    <p><a href=''>Manage payment info</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings