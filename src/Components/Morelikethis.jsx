import React,{ useEffect, useState }from 'react'
import axios from 'axios'; 
import './Morelikethis.css'
import { useNavigate } from 'react-router-dom';


const Morelikethis = (props) => {
    const movdetail=props.data;
    const [data,getdata]=useState([])
    const navigate=useNavigate();
    // console.log(movdetail[0])
    const Moremovies = async()=>{
        await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=${movdetail[0]}`)
        .then((res)=>getdata(res.data.results))
    }
    useEffect(()=>{
        Moremovies();
    },[movdetail])
    // console.log(data);
    const passdata=(evt)=>{
        navigate("/details" ,{state: evt.target.id})
        
    }
    
    
  return (
    <div className='like-this-container'>
        <h3>More like this </h3>
        <div className='rail-detail'>
        {
            data.map((obj2)=>
                <div className='movie-rail-card'>
                <img id={obj2.id}  src={`https://image.tmdb.org/t/p/original${obj2.backdrop_path}`} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'} } onClick={passdata} alt="img" />
                <p>{obj2?.title || obj2?.name}</p>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default Morelikethis