import React from 'react'
import {Navbar} from "./Uicomponents/Navbar"
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div className='dashboard2'>
      <Navbar />
      <div className="container">
      <div className="box">
        <div className="text">
            Enrolled Courses
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