import React, { useState,useEffect } from 'react'
import Navbar from './Navbar'
import './HomeScreen.css'
import Banner from './Banner'
import Movielisting from './Movielisting'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const HomeScreen = () => {
  const [fetchtext,getFetchText]=useState("")
  console.log(fetchtext)
  const navigate=useNavigate()

  const [result,getResult]=useState()
  useEffect(()=>{
    const Moremovies = async()=>{
      await axios.get(`https://api.themoviedb.org/3/search/movie?query=${fetchtext}&include_adult=false&language=en-US&page=1&api_key=1cb6580aac9b4340ffee91099c995aad`)
      .then((res)=>getResult(res.data.results))
  }
  Moremovies();
  },[fetchtext])
  const Handledata2=(event)=>{
    // setData(e.target.id);
    console.log("hii");
    console.log(event.target.id)
    navigate("/details",{state : event.target.id})
  }
  return (
    <div>
    <Navbar value={getFetchText}/>
    {
      fetchtext?
      <div className='search-results'>
      <div className='results'>
       
        { result.length!==0 ?
          result.map(obj=>
            <div className='movie-list-from-search'>
            <img id={obj.id} src={`https://image.tmdb.org/t/p/original${obj.backdrop_path}`} onError={(e)=>{e.target.src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Image_not_available.png/640px-Image_not_available.png'} } onClick={Handledata2} alt="img" />
            <p>{obj?.title|| obj?.name}</p>
            </div>
          ):
          <div className='no-img-found'>
          <h1 className='mov-not-found'>Oops ! Movies not found</h1>
          <Movielisting title="You may like" Url="/movie/top_rated?api_key=1cb6580aac9b4340ffee91099c995aad&language=en-US"  />
          <Movielisting title="Action " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=28`"  />
          <Movielisting title="Comedy " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=35"  />
          <Movielisting title="Horror " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=27"  />
          <Movielisting title="Romance " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=10749"  />
          <Movielisting title="Documentaries" Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=99"  />
          </div>
        } 
      </div>
      </div>:
    <div>
    <Banner />

    <Movielisting title="NETFLIX ORGINALS" Url="/discover/tv?api_key=1cb6580aac9b4340ffee91099c995aad&with_networks=213"  />
    <Movielisting title="Top Movies in India" Url="/movie/top_rated?api_key=1cb6580aac9b4340ffee91099c995aad&language=en-US"  />
    <Movielisting title="Action " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=28`"  />
    <Movielisting title="Comedy " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=35"  />
    <Movielisting title="Horror " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=27"  />
    <Movielisting title="Romance " Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=10749"  />
    <Movielisting title="Documentaries" Url="/discover/movie?api_key=1cb6580aac9b4340ffee91099c995aad&with_genres=99"  />
    
    </div>
    }</div>
  )
}

export default HomeScreen