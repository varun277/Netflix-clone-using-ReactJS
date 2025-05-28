import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Detailbanner.css'
import { ThumbsUp, Star, Clock, CalendarBlank } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';


const Detailbanner = (props) => {
    const datadetails1 = props.value;
    const setMovdetail = props.data;
    const truncate1 = (string, n) => {
        return string.length > n ? string.substr(0, n - 1) + " " + "...." : string;
    }
    const [vote, setvote] = useState("")
    const [date, setdate] = useState("")
    const [trending1, setTrending1] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const Trendingdata1 = async () => {
            axios.get(`https://api.themoviedb.org/3/movie/${datadetails1}?api_key=1cb6580aac9b4340ffee91099c995aad`)
                .then((res) => {
                    setTrending1(res.data)
                    setdate(res.data.release_date)
                    setvote(res.data.vote_average)
                    setMovdetail(res.data.genres.map((obj) => {
                        return obj.id;
                    }))
                })
                .catch((err) => {
                    console.error(err);
                })
        }
        Trendingdata1();
    }, [datadetails1])
    // console.log(trending1)
    var date1 = date.slice(0, 4)
    let vote1 = parseFloat(vote)

    if (trending1.length != 0) {
        return (
            <div className='header-bg1'
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${trending1.backdrop_path}")`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                }}>
                <div className="close1">
                    <button className='closing-btn' onClick={() => navigate('/home')}>x</button>
                </div>
                <div className='banner-content1'>
                    <h1 className="banner-title1">{trending1?.name || trending1?.title}</h1>
                    <div className="banner-buttons1">
                        <button className="play-btn1">
                            Play
                        </button>
                        <button className="my-list-btn1">+</button>
                        <button className="like-btn1"><ThumbsUp size={14} /></button>
                    </div>
                    <p className='banner-para1'>
                        {truncate1(`${trending1.overview}`, 150)
                        }
                    </p>

                </div>
                <div className="banner-blur1" />
                <div className="movie-details">
                    <div className='left'>
                        <div className='icons'>
                            <div className='rating'>
                                <p className='box'><Star size={20} /> </p>
                                {
                                    vote1.toFixed(1) > '8.5' ? <p className='IMDB-RED'>&nbsp;{vote1.toFixed(1)}&nbsp;</p> : <p className='IMDB-GREEN'>&nbsp;{vote1.toFixed(1)}&nbsp;</p>
                                }
                                / 10</div>

                            <Clock size={20} /><p className='run'>{trending1.runtime} min</p>
                            <CalendarBlank size={20} /><p className='yearr'>{date1}</p>
                        </div>
                        <div className="overview">
                            {trending1.overview}
                        </div>
                    </div>
                    <div className="right">
                        <div className='genre'> Genre:&nbsp;{
                            trending1.genres.map((obj1) => {
                                return (
                                    <p>{obj1.name}&nbsp;</p>)
                            })
                        }
                        </div>
                        <div className="lan">
                            <p>Languages :&nbsp;</p>
                            {
                                trending1.spoken_languages.map((obj) => {
                                    return (<p>{obj.english_name}&nbsp;</p>)
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Detailbanner