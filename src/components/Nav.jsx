import React from 'react'
import { Link } from 'react-router-dom'

export default function nav() {
  return (
  <div className='navContainer'>
  {/* <Link to='/'>Home</Link> */}
    <div className='navLeftColumn'>
      <Link to='aboutMe'> About Me </Link> 
    </div>
    <div className='navMiddleColumn'>
      <Link to='projects'> View Projects</Link>
    </div>
    <div className='navRightColumn'>
      <Link to='resume'>View Resume</Link>
    </div>
    
  </div>
  )
}
