import React, { useEffect, useState } from 'react'
import { Navbar } from '../Uicomponents/Navbar'
import './courses.css'
import axios from "axios";
import CardCourse from '../Uicomponents/CardCourse';
import { Typography } from '@mui/material';
const Courses = () => {
  const [subscribedplaylists, setsubscribedplaylists] = useState([])
  console.log(subscribedplaylists);
  const fetchCoursesbyUser = async (e) => {
    try{
      const { status, data } = await axios.get(
        "http://localhost:3000/subscribed-courses",
        {
          validateStatus: false,
          withCredentials: true,
        }
      );
     console.log(status,data);
     setsubscribedplaylists(data.user.subscribedplaylists);
    }
    catch(e){
      console.log("error --",e);
      alert("data not Updated, Reload");

    }
    
  };

  useEffect(() => {
    fetchCoursesbyUser();
  }, [])
  
  return (
    <div className='coursesPage'>
      <Navbar />
      <div className='headingDiv'>
        <Typography variant="h3" gutterBottom sx={{ fontFamily: 'Segoe UI', fontStyle: 'bold',textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
  transform: 'perspective(500px)',
   }}> Courses</Typography>
      </div>
      <div className='cardContainerCourse'>
        { subscribedplaylists&&(subscribedplaylists?.map((result)=>{
          return <CardCourse key ={result?.playlistID} result={result} buttonData="Let's Learn"/>
        }))}
      </div>
    </div>
  )
}

export default Courses