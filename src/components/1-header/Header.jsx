import { useState } from 'react';
import './header.css' ;
import Join from '../2-join/join'

export default function Header(){
    const [staleMenu,setStateMenu]=useState(false)
    return (
       <div className='header'>
        <header>
          <div>
            <h1>Gym</h1>
          </div>
          <NavBar/> 
          <button onClick={()=>{
            setStateMenu(true)
          }} className='btnmenu'><i class="fa-solid fa-bars"></i>
          </button>
          <div/>     
        </header>
        {staleMenu && (
           <div className="container_menu"> 
           <div className='menu'>
              <ul>
                  <li><button onClick={()=>{
                    setStateMenu(false)
                  }}><i class="fa-solid fa-xmark"></i></button></li>
                   <li><a onClick={()=>{ setStateMenu(false) }} href='#FEATURES'>FEATURES</a></li>
                   <li><a onClick={()=>{ setStateMenu(false) }} href='#OFFER'>OFFER</a></li>
                   <li><a onClick={()=>{ setStateMenu(false) }} href='#ABOUT'>ABOUT</a></li>
                   <li><a onClick={()=>{ setStateMenu(false) }} href='#CONTACT'>CONTACT</a></li>
               </ul>
           </div>
          </div>
        )}
       
        <Section />

        </div>

    )
}

function NavBar(){
    return (
        <nav>
            <ul>
                <li><a href='#FEATURES'>FEATURES</a></li>
                <li><a href='#OFFER'>OFFER</a></li>
                <li><a href='#ABOUT'>ABOUT</a></li>
                <li><a href='#CONTACT'>CONTACT</a></li>
            </ul>
        </nav>
    )
}



function Section(){
    const [showJoin,setShowJoin]=useState(false)
    return (
        <section>
            <div>
               <h1>STEP UP YOUR <span>FIRNESS</span><br/>  WITH US </h1>
               <p>Build Your Body And Fitness With professionnal Touch</p>
               <button onClick={()=>{
                  setShowJoin(true)
               }} className='btn'>JOIN US</button>
            </div>
            {
              showJoin && ( <Join showJoin={showJoin} setShowJoin={setShowJoin} /> )   
            }
        </section>
    )
}