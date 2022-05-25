import React from 'react'
import meBoxing from '../images/MeBoxing.png'
import dropdown from '../images/dropdown.png'
import { useState } from 'react'

export default function AboutMe() {
  const [hidden, setHidden] = useState(true);
  const [hide, setHide] = useState(true)
  return (
    <div className='aboutMeContainer boxingPic'>
      <div className='aboutMe-column1'>
        <header className='header'>AboutMe</header>
        <img src={meBoxing} className='landing-images' />
        <h2 className='skills-title'>Skills</h2>
        <div className='aboutMe-ol-container'>
            <span className='skills-button'>Javascript</span>
            <span className='skills-button'>HTML</span> 
            <span className='skills-button'>CSS</span> 
            <span className='skills-button'>React</span> 
            <span className='skills-button'>Vue</span> 
            <span className='skills-button'>Redux</span> 
            <span className='skills-button'>MongoDB</span> 
            <span className='skills-button'>Mongoose</span> 
            <span className='skills-button'>Express</span> 
            <span className='skills-button'>PostgreSQL</span> 
            <span className='skills-button'>Django</span> 
            <span className='skills-button'>Visual Studio Code</span> 
            <span className='skills-button'> Python</span> 
            <span className='skills-button'>Insomnia</span> 
            <span className='skills-button'>Heroku</span> 
            <span className='skills-button'>Surge</span> 
            <span className='skills-button'>Github</span> 
            <span  className='skills-button'>Loading...</span>
        </div>
      </div>
     
      <div className='aboutMe-column2'>
        <header className='header2'>
          Description 
          <img className='dropdown-image' src={dropdown} onClick={() => setHidden(s => !s)} /> 
        </header>
        <div>
        
        {!hidden ?
        <p className='description-paragraph'>  	A fun fact about me is that I am an Amateur Boxer for  the U.S. 
          I qualified for the Olympic Trials in 2019 and I carry the same determination and drive in the developing industry. 
          What sets me apart is that I am able to stay composed under challenging situations, from learning to hit while not getting hit, to debugging pesky errors.  
          I enjoy solving problems that involve deep analyzation. By having a growth-mindset, I am able to accept lessons and continue striving for better. 
          Because of my background, I embrace challenges and face fear head-on. I don't break on failure. Instead, I live by: I may not know this yet... but I will learn it.
	      </p> : null }
        </div>
        <br />
        <div>
          <header className='header3-myStyle'>
            My Style
            <img className='dropdown-image' src={dropdown} onClick={() => setHide(s => !s)} />
          </header>
          {!hide ?
          <p className='description-paragraph'>
            In 2021 during the pandemic, I dove into the Web 3.0 world by purchasing my first NFT. I didn't know the possibilities nor could I imagine how much of an impact NFT's would have on me.
            Seeing artists create projects revolving around their art made me extremely bullish on becoming a part of the community. I decided to 
          </p>  : null }
        </div>
      </div>
     
      <div>

      </div>

    </div>
  )
}
