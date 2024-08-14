import './footer.css' ;

export default function Footer(){
    return (
     <>
        <footer>
            <div>
             <h3>Why Choose Us?</h3>
               <ul>
                <li>
                   Expert Trainers
                </li>
                <li>Modern Facilities</li>
                 <li>Community Spirit</li>
                 <li>Holistic Wellness</li>
               </ul>
            </div>
           <div>
            <h3>Features</h3>
              <ul>
                  <li>Weight Lifting</li>
                  <li>Specific Muscle</li>
                  <li>Flex Your Muscle</li>
                  <li>Cardio Exercise</li>
              </ul>
           </div>
           <div className='sections'>
             <ul>
                <li><a href='#FEATURES'>FEATURES</a></li>
                <li><a href='#OFFER'>OFFER</a></li>
                <li><a href='#ABOUT'>ABOUT</a></li>
                <li><a href='#CONTACT'>CONTACT</a></li>
             </ul>
           </div>
           <div className='media'>
              <ul>
                <li><a href=''><i class="fa-brands fa-facebook"></i></a></li>
                <li><a href=''><i class="fa-brands fa-instagram"></i></a></li>
                <li><a href=''><i class="fa-brands fa-x-twitter"></i></a></li>
                <li><a href=''><i class="fa-brands fa-threads"></i></a></li>
                <li><a href=''> <i class="fa-brands fa-linkedin"></i></a></li>
               
              </ul>
           </div>
        </footer>
        <div className='copyright'>
            <p>2024 &copy; GYM ,[Your Gym Name]</p> 
        </div>
        </>
    )
}