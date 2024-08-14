import { useState } from 'react';
import './offer.css' ;
import Join from '../2-join/join';

export default function Offer(){
  const [showJoin,setShowJoin]=useState(false)
    return (
        <div className='offer' id='OFFER'>
           <div className='content'>
             <h1>A BIG <span>OFFER</span>  FOR THIS SUMMER</h1>
             <p>
             Experience top-tier fitness at [Your Gym Name]—where cutting-edge equipment,
              expert trainers, and a motivating atmosphere drive your success.
             </p>
           </div>
           <button onClick={()=>{
                  setShowJoin(true)
               }} className='btnOffer'>JOIN NOW</button>

                 {  showJoin && ( <Join  showJoin={showJoin} setShowJoin={setShowJoin} /> )    }
        </div>
    )
}