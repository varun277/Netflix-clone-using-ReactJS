import React, { useEffect, useState } from 'react'
import './Movielisting.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




const Movielisting = ({title,Url}) => {
    // console.log(title);
    // console.log(Url);
    const fetch_url="https://api.themoviedb.org/3"+Url;
    const navigate=useNavigate();
    // console.log(fetch_url)
  const [railmovie,setRailmovie]=useState([])
  // const [getdata,setData]=useState(0);
    const Fetchmovie=async()=>{
      await axios.get(fetch_url).then((res)=>setRailmovie(res.data.results)).catch((err)=>{
        console.error(err)
      })
    }
    useEffect(()=>{
      Fetchmovie();
    },[])
    // console.log(railmovie);

    const Handledata=(e)=>{
      // setData(e.target.id);
      
      navigate("/details",{state : e.target.id})
    }

  return (
    <div className='movie-list'>
    <div className="movie-rail">
      <h3 className='category-title'>{title}</h3>  
      <div className="moviecard">
        { 
          railmovie.map((obj)=>
            <div className="movie-poster">
            <img id={obj.id}  src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'} } onClick={Handledata}    alt="img" />
            <p>{obj?.title || obj?.name}</p>
            </div>
          )
        }
      </div>
      </div>
    </div>
  )
}

export default Movielisting