import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import React from 'react';


const Homepage = () => {

  const nav=useNavigate();

    return (
      
      <div class="container">
        
        <div class="row">
          <div class="col">
           
            <h1 class="head">Popz Tune</h1>
            <p className='para'>"Welcome to Poz Tune Music Tutorial App, your gateway to mastering the art of music creation! Dive into a world of comprehensive tutorials, expert guidance, and interactive lessons designed to unleash your musical potential. Whether you're a beginner or a seasoned musician, embark on an enriching journey of learning and creativity with Poz Tune."</p>
          <button className='beg'>Begin Learning!!!!</button>
          
          </div>
          
          <div class="col">
          <div class="card card1" onClick={() => {nav('/guitar')}}>
    
          
          </div>

          <div class="card card2" onClick={() => {nav('/piano')}}>
           
          
          </div>

          <div class="card card3" onClick={() => {nav('/')}}>
          
          
          </div>

          <div class="card card4" onClick={() => {nav('/drums')}}>
           

          </div>


</div>
          </div>
        </div>
        
    
  )
}

export default Homepage