import React, { useState } from 'react'
import Seachbar from '../Uicomponents/Seachbar'
import  CardComponent from '../Uicomponents/CardComponent';
import { Navbar } from '../Uicomponents/Navbar';
import "./Explore.css"

const Explore = () => {
  const [searchResults, setSearchResults] = useState({});
  return (
    <div className='explorePage'>
      <Navbar />
      <div className="searchbar">
        <Seachbar  setSearchResults={setSearchResults}/>
      </div>  
      <div className='cardContainer'>
        {searchResults&&(searchResults?.items?.map((result)=>{
          return <CardComponent key ={result?.etag} playlistID={result?.id?.playlistId} result={result} buttonData="Add to courses"/>
        }))}
      </div>
    </div>
  )
}

export default Explore