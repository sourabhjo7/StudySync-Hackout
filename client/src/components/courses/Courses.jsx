import React, { useEffect, useState } from 'react'
import { Navbar } from '../Uicomponents/Navbar'
import './courses.css'
import axios from "axios";
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
    courses
  <Navbar />

    </div>
  )
}

export default Courses