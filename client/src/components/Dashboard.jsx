import React from 'react'
import {Navbar} from "./Uicomponents/Navbar"
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import DashCard from './Uicomponents/DashCard'
import './Dashboard.css'
import ProfileCard from './Uicomponents/ProfileCard'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
const Dashboard = () => {
  const [playlists, setplaylists] = useState([])
  const [user, setuser] = useState({});
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
     setuser(data.user);
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
  ChartJS.register(ArcElement, Tooltip, Legend);
  const example = {
    labels: ["progress"],
    datasets: [
      {
        label: "progress",
        data: [12, 50],
        backgroundColor: ["rgba(54, 162, 235, 0.2)", "rgba(247, 239, 229, 1)"],
        borderColor: ["rgba(31, 23, 23, 1.0)", "rgba(0, 0, 0, 1)"],
        borderWidth: 1
      }
    ]
  };
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
        <div>
        <Doughnut data={example} />
        </div>
      </div>
      <div className="box">
        <div className='text'>
          Profile
        </div>
        <div className='profileWrapper'>
            <ProfileCard user={user} />
        </div>
      </div>
    </div>
    </div>

  )
}

export default Dashboard