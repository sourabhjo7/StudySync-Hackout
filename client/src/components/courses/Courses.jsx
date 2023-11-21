import React, { useEffect, useState } from 'react'
import { Navbar } from '../Uicomponents/Navbar'
import './courses.css'
import axios from "axios";
import CardCourse from '../Uicomponents/CardCourse';
import { Typography } from '@mui/material';
//courses page check
const Courses = () => {
  const [subscribedplaylists, setsubscribedplaylists] = useState([])
  console.log(subscribedplaylists);

  const deleteSubscribedCourse = async (result) => {
    try {
      const { status, data } = await axios.get(
        `http://localhost:3000/delete-course/${result?.playlistID}`,
        {
          validateStatus: false,
          withCredentials: true,
        }
      );
      
      if(data.success){
        await fetchCoursesbyUser();
      }
      alert(data.msg);
    } catch (e) {
      console.log("error --", e);
      alert("try again");
    }
  };

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
        <Typography variant="h2" gutterBottom sx={{ fontFamily: 'Montserrat', fontStyle: 'bold',color: '#F4DFB6',textShadow: '2px 2px 2px rgba(0, 0, 0, 0.25)',
  transform: 'perspective(500px)', }}> Courses</Typography>
      </div>
      <div className='cardContainerCourse'>
        { subscribedplaylists&&(subscribedplaylists?.map((result)=>{
          return <CardCourse key ={result?._id} deleteSubscribedCourse ={deleteSubscribedCourse} result={result} buttonData="Let's Learn"/>
        }))}
      </div>
    </div>
  )
}

export default Courses