import React from 'react'
import "./Youtubeplayer.css"
const Youtubeplayer = () => {
  return (
    <div className='playerbox'>
      <div className="left-box">
        <div className="top-left-box">Top (60%)</div>
        <div className="bottom-left-box">Bottom (40%)</div>
      </div>
      <div className="right-box">Right Box (30%)</div>
    </div>
  )
}

export default Youtubeplayer