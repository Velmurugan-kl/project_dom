import React, { useContext,useEffect,useState } from 'react'
import Context from './Context'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import LoadingOverlay from '../Pages/Loaging';
import Mycontext from '../Pages/Mycontext';
const CompA = () => {
  const nav=useNavigate()
    const[color,setColor]=useState('white');
    const {isLoading} = useContext(Mycontext);
    const [loged,setLoged]=useState(false);
    useEffect(() => {
      setLoged(localStorage.getItem('loged'));
    }, [])
    

    
    const changefun = () =>{
        setColor('gold');
    }

    console.log(loged," home----------")

    const{myValue}=useContext(Context);
    return (
        
      <div>
        {isLoading && <LoadingOverlay/>}
        <div class="container">
        
        <div class="row">
          <div class="col">
           
            <h1 class="head">Popz Tune</h1>
             <p style={{color:color, marginLeft:'5%'}}>"Welcome to Poz Tune Music Tutorial App, your gateway to mastering the art of music creation!
              Dive into a world of comprehensive tutorials, expert guidance, and interactive lessons designed to unleash your musical potential.
               Whether you're a beginner or a seasoned musician, embark on an enriching journey of learning and creativity with Poz Tune."{myValue}</p>
         

        
        {/* <button onClick={changefun}>Begin Learning</button> */}
          
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
    </div>
  )
}

export default CompA