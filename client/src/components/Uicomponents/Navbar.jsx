import React from 'react'
import "./navbar.css"
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className='outer-div'>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="sitename">StudySync<br/></div>
      </Link>
      <div className="content-outer">
      <div className='contents'>
      <Link to="/" style={{ textDecoration: 'none',color: '#0F0F0F',fontFamily: 'Segoe UI', fontStyle: 'bold', fontSize: 'large' }}>
        <div className="dashboard">Dashboard<br/></div>
      </Link>
      <Link style={{ textDecoration: 'none',color: '#0F0F0F',fontFamily: 'Segoe UI', fontStyle: 'bold', fontSize: 'large' }}>
        <div className="courses">Courses<br/></div>
      </Link>
      <Link to="/explore" style={{ textDecoration: 'none',color: '#0F0F0F',fontFamily: 'Segoe UI', fontStyle: 'bold', fontSize: 'large' }}>
        <div className="explore">Explore<br/></div>
      </Link>
      </div>
      </div>
    </div>
  )
}
