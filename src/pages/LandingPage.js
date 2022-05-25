import React from 'react' 

import { Link } from 'react-router-dom'
import creature from '../images/Creature.png'
import shonen from '../images/Shonen.png'
import ocm from '../images/OC.png'


 function LandingPage() {

  return (

      <div className='landingContainer'>
        <div className='links-flex'>
          <Link to='projects'> 
            <img className='landing-images' src={creature}/>
          </Link> 
          <Link to='aboutMe'> 
            <img className='landing-images' src={shonen} /> 
          </Link>          
          <Link to='resume'> 
            <img className='landing-images' src={ocm} /> 
          </Link>     
        </div>
      </div>
   
  )
}

export default LandingPage




