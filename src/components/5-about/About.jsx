import React, { useState } from 'react'
import './about.css'
import image from './../../images/about.png'
const About = () => {
  const [learnMore,setLearnMore]=useState(false)
  return (
    <div className='about' id='ABOUT'>
        <div className='section-left'>
          <img src={image}   alt=''/>
        </div>
        <div className='section-right'>
           <h1>LEARN MORE ABOUT US</h1>
           <p>
             At [Your Gym Name], we’re more than just a gym;
              we're your fitness partner. Our mission is to
               empower you to reach your health goals with 
               personalized training, top-notch equipment, 
               and a supportive community. 
              </p>
              <button  onClick={()=>{
                 learnMore? setLearnMore(false)  : setLearnMore(true)
              }}
              
              > { learnMore ? 'LEARN LESS' : 'LEARN MORE'  }  </button>

            {
              learnMore && (
                <div className="learn_more">
                <h3>Why Choose Us?</h3>
                     <ul>
                      <li>
                         Expert Trainers: Certified professionals dedicated to helping you succeed.
                      </li>
                      <li>Modern Facilities: State-of-the-art equipment and a clean, inviting environment.</li>
                       <li>Community Spirit: A welcoming space where fitness enthusiasts of all levels connect.</li>
                       <li>Holistic Wellness: A range of classes, workshops, and nutrition advice to support your overall health.</li>
                     </ul>
              
                     <h3>Get Started</h3>     
                        Ready to transform your fitness journey?
                         Visit us today to experience the difference at 
                         [Your Gym Name]. For more details or to schedule 
                         a free tour, contact us at [Contact Information].
                       </div>
              )
            }
              

          
         </div>
    </div>
  )
}

export default About
