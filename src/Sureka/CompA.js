import React, { useContext,useState } from 'react'
import Context from './Context'
import '../Homepage/Homepage.css'
const CompA = () => {
    const[color,setColor]=useState('white');
    const cardClasses = ['card1', 'card2', 'card3', 'card4'];
    const changefun = () =>{
        setColor('lightblue');
    }
    const{myValue,setMyValue}=useContext(Context);
  return (
    <div className="container">
    <div className="row">
      <div className="col">
        <h1 className="head">Popz Tune</h1>
        <p style={{color:color}}>"Welcome to Poz Tune Music Tutorial App, your gateway to mastering the art of music creation! Dive into a world
         of comprehensive tutorials, expert guidance, and interactive lessons designed to unleash your musical potential. Whether you're a 
         beginner or a seasoned musician, embark on an enriching journey of learning and creativity with Poz Tune."{myValue}</p>
        <button onClick={changefun}>Begin Learning!!!!</button>
      </div>

      <div className="col">
        
        {cardClasses.map((className, index) => (
          <div key={index} className={`card ${className}`}>
            
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default CompA