import React, { useEffect,useState} from 'react'
import axios from 'axios'
import './Banner.css';



const Banner = () => {
   
    const truncate=(string,n)=>{
        return string.length >n ? string.substr(0,n-1) +" "+ "...." : string ;
    }
    
    const [favouriteList,setFavouriteList] =useState([]);
    const [trending,setTrending]=useState([]);
    const [mylistClicked,setClicked]=useState(false);
    useEffect(()=>{
        const Trendingdata= async()=>{
            axios.get('https://api.themoviedb.org/3/trending/all/week?api_key=1cb6580aac9b4340ffee91099c995aad&language=en-US')
            .then((res)=>setTrending(res.data.results[Math.floor(Math.random() * res.data.results.length-1)]))
            .catch((err)=>{
                console.error(err);
            })
        }
        Trendingdata();
    },[])

    console.log(trending.id)
    console.log(favouriteList);
  return (
    <header className='header-bg'
    style={{
        backgroundImage:`url("https://image.tmdb.org/t/p/original/${trending.backdrop_path}")`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
           }}>
    <div className='banner-content'>
    <h1 className="banner-title">{trending?.name||trending?.title}</h1>
        <div className="banner-buttons">
        <button className="play-btn">
            Play
        </button>
        <button className={`myListBtn ${mylistClicked ? 'Show' : 'Hide'}`} >My List</button>
        </div>
        <p className='banner-para'>
        {truncate(`${trending.overview}`,150)
        }
        </p>
        
    </div>
    <div className="banner-blur"/>
    </header>
  
  )
}

export default Banner