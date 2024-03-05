import React, { useContext,useEffect,useState } from 'react'
import Context from './Context'
import './Homepage.css'
import { useNavigate } from 'react-router-dom'
import LoadingOverlay from '../Pages/Loaging';
import Mycontext from '../Pages/Mycontext';
import { Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0, // Custom values for your breakpoints
      sm: 450,
      md: 600,
      lg: 900,
      xl: 1200,
    },
  },
});

const CompA = () => {
  const nav=useNavigate()
    const[color,setColor]=useState('white');
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
        <div class="container">
        
        {/* <div class="row"> */}
          <Grid container columns={12}>
            <Grid item md={12} lg={6}>
              {JSON.parse(localStorage.getItem('loged')) && <h1 style={{color:'white', marginLeft:'30%'}}>Welcome {localStorage.getItem('name')}</h1>}
          <div class="col">
            <h1 class="head">Popz Tune</h1>
             <p style={{color:color, marginLeft:'5%'}}>"Welcome to Poz Tune Music Tutorial App, your gateway to mastering the art of music creation!
              Dive into a world of comprehensive tutorials, expert guidance, and interactive lessons designed to unleash your musical potential.
               Whether you're a beginner or a seasoned musician, embark on an enriching journey of learning and creativity with Poz Tune."{myValue}</p>
          </div>
          </Grid>
          <Grid item md={12} lg={6}>
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
</Grid>
</Grid>
          {/* </div> */}
        </div>
    </div>
  )
}

export default CompA