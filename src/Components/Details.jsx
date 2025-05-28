import React, { useState } from 'react'
import Navbar from './Navbar'
import { useLocation } from "react-router-dom"
import Detailbanner from './Detailbanner';
import Morelikethis from './Morelikethis';

const Details = () => {
  const location = useLocation();
  const datadetails = location.state ;
  console.log(datadetails)
  const [movdetail,setMovdetail]=useState("")
  console.log('movie-details:',movdetail);
  return (
    <div>
        {/* <Navbar /> */}
        <Detailbanner value={datadetails} data={setMovdetail} />
        <Morelikethis data={movdetail} />
    </div>
  )
}

export default Details