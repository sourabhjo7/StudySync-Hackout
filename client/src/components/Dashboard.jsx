import React from 'react'
import {Navbar} from "./Uicomponents/Navbar"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import DashCard from './Uicomponents/DashCard'
import './Dashboard.css'
const Dashboard = () => {
  const [playlists, setplaylists] = useState([])
  console.log(playlists);
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
     setplaylists(data.user.subscribedplaylists);
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
    <div className='dashboard2'>
      <Navbar />
      <div className="container">
      <div className="box">
        <div className="text">
            Enrolled Courses
        </div>
        <div className='DashListcontainer'>
          { playlists&&(playlists?.map((result)=>{
            return <DashCard key ={result?._id} result={result}/>
          }))}
        </div>
      </div>
      <div className="box">
        <div className='text'>
          Progress
        </div>
      </div>
      <div className="box">
        <div className='text'>
          Profile
        </div>
      </div>
    </div>
    </div>

  )
}

export default Dashboard