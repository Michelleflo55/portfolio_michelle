import React from 'react'
import resume from '../images/michelleFloresResume.pdf'
export default function Resume() {
  return (
    <div className='resume-container'>
      <h2>Resume</h2>
      <img source={resume} className='resume-image' />

    </div>
  )
}
