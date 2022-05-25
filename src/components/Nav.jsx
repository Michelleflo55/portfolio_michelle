import React from 'react'
import { Link } from 'react-router-dom'
import image from '../images/PFP.png'


export default function nav() {
  return (
  <div className='navContainer'>
  <Link to='/'><img src={image} className='pfp' /></Link>
  </div>
  )
}
