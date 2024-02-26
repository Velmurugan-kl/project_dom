import React, { useContext,useState } from 'react'
import Context from './Context'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
const CompA = () => {
  const nav=useNavigate()
    const[color,setColor]=useState('white');
    
    const changefun = () =>{
        setColor('gold');
    }
    const{myValue,setMyValue}=useContext(Context);
  return (
    <div>
        <div class="container">
        
        <div class="row">
          <div class="col">
           
            <h1 class="head">Popz Tune</h1>
             <p style={{color:color}}>"Welcome to Poz Tune Music Tutorial App, your gateway to mastering the art of music creation!
              Dive into a world of comprehensive tutorials, expert guidance, and interactive lessons designed to unleash your musical potential.
               Whether you're a beginner or a seasoned musician, embark on an enriching journey of learning and creativity with Poz Tune."{myValue}</p>
         

        
        <button onClick={changefun}>Begin Learning</button>
          
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
        
    
  



        {/* <p style={{color:color}}>Value from Context:{myValue}</p>
        <button onClick={()=>setMyValue("New")}>Change</button>
        <button onClick={changefun}>Change Value</button> */}
    </div>
  )
}

export default CompA