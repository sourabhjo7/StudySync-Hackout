import React from 'react'
import "./navbar.css"
export const Navbar = () => {
  return (
    <div className='outer-div'>
      <div className="sitename">StudySync<br/></div>
      <div className="content-outer">
      <div className='contents'>
      <div className="dashboard">Dashboard<br/></div>
      <div className="courses">Courses<br/></div>
      <div className="explore">Explore<br/></div>
      </div>
      </div>
    </div>
  )
}
