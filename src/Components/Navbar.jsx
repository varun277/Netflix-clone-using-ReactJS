import React, {useState } from 'react'
import './Navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
  const getFetchText=props.value;
  const navigate=useNavigate();
  const HandleLogout=()=>{
    localStorage.clear()
    navigate('/')
    // window.location.reload();
  }
  const [color, setColor] = useState(false);
  const changeColor= ()=>{
    if(window.scrollY >=100){
      setColor(true)
    }
    else{
      setColor(false)
    }
  }
  const [text,setText]=useState("")
  const HandleText=(e)=>{
    setText(e.target.value);
  }
  getFetchText(text)
  const [clicked,onClicked]=useState(false);

  window.addEventListener('scroll',changeColor);

  return (
    <div className= {color ? 'navbar navbarbg' : 'navbar'}>
      <div className='left-icon'>
        <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix" />
      </div>
      <div className='right-icon'>
      <div className="sg-box">
        <input type="search" className="sg-bar" placeholder='Movies , genres' onChange={HandleText} />
      </div>
        <img src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"  alt="avatar" onClick={()=>onClicked(!clicked)}/>
      
        <ul className={clicked ? "open" :"close"}>
          <li><a href=''>My Profile</a></li>
          <li><a href='' onClick={()=>navigate('/my-list')}>My List</a></li>
          <li><a href='' onClick={()=>navigate('/settings')}>Settings</a></li>
          <li><a href='' onClick={HandleLogout}>Logout</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar