import React, { Component, useState } from 'react';
import "./Pchase.css";
import img30 from "../purschase/piabook.png";
import img31 from "../purschase/drumbook.png";
import ava from "../purschase/pro.png";
import ava1 from "../purschase/close.png";
import gs from "../purschase/boi.jpg";
import soc from "../purschase/social.png";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import VerifiedIcon from '@mui/icons-material/Verified';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Pchase = () => {
  const [val,setVal]=useState(0);
  const [add1,setAdd1]=useState(false);
  const [add2,setAdd2]=useState(false);
  const [add3,setAdd3]=useState(false);

  const handlebut1=() =>{
    setVal(val+499);
    setAdd1(true);
  }
  const handlebut2=() =>{
    setVal(val+1999);
    setAdd2(true);
  }
  const handlebut3=() =>{
    setVal(val+499);
    setAdd3(true);
  }
  const but1=()=>{
    setVal(val-499);
    setAdd1(false);
  }
  const but2=()=>{
    setVal(val-1999);
    setAdd2(false);
  }
  const but3=()=>{
    setVal(val-499);
    setAdd3(false);
  }
  

    return (
      <div className='pas'>
        <center><h2 className="pt">Popz Tune</h2></center>
        <Box sx={{ display: 'flex', justifyContent: 'center', ml: 'auto', mr: 'auto',marginTop:'3%' }}>
        <Box sx={{ flexGrow: 1,maxWidth:800,padding:'10px'}}>
          <Grid container spacing={{ xs: 2, md: 1 }} columns={{xs:4 ,sm:12}}>
                <Grid item xs={3} sm={4} >
                  <Card sx={{
                    backgroundColor:'rgba(249,249,249,0.85)',
                      borderRadius:5,
                      mx: 1,
                      my: 2,
                      height:390,
                      width:220,
                      '&:hover': {
                        transition: 'transform 0.1s ease-in-out',
                        transform: 'scale(1.1)',
                      },
                    }}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Piano
              </Typography>
              <Typography variant="body2" color="text.secondary" >
              Popz Tune London Piano Exam Pieces Plus Exercises
                    from 2023: Grade 5(Single Edition)
              </Typography>
              <Typography sx={{height:180}}>
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Categorize lessons:
                  </Box>
                  Beginner, intermediate, advanced.
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Lesson focus:
                  </Box>
                  Technique, music theory, sight-reading, 
                  improvisation, specific genres.
              </Typography>
            </CardContent>                  
            <CardActions sx={{justifyContent:'center'}}>
              {add1 ? <Button size="small" variant="contained" onClick={but1}>
                      Remove
                </Button>: <Button size="small" variant="contained" onClick={handlebut1}>
                      Add
                </Button>}
                  
              </CardActions>
          </Card>
                </Grid>

                
                <Grid item xs={3} sm={4}  >
                  <Card sx={{
                    backgroundColor:'rgba(249,249,249,0.85)',
                      mx: 1,
                      my: 2,
                      borderRadius:5,
                      height:390,
                      width:220,
                      '&:hover': {
                        transition: 'transform 0.1s ease-in-out',
                        transform: 'scale(1.1)',
                      },
                    }}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Drums
              </Typography>
              <Typography variant="body2" color="text.secondary">
              Kadence Acoustic Beginners Drum Kit (5 Piece Complete)
                    Full -Size Drumset (Wine Red)
                      (Single Edition)
              </Typography>
              <Typography sx={{height:180}}>
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Categorize lessons:
                  </Box>
                  Beginner, intermediate, advanced.
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Lesson focus:
                  </Box>
                  Stick technique, 
                  different drumming styles (rock, jazz, etc.).
              </Typography>
            </CardContent>                  
            <CardActions sx={{justifyContent:'center'}}>
            {add2 ? <Button size="small" variant="contained" onClick={but2}>
                      Remove
                </Button>: <Button size="small" variant="contained" onClick={handlebut2}>
                      Add
                </Button>}
              </CardActions>
          </Card>
                </Grid>


                <Grid item xs={3} sm={4} >
                  <Card sx={{
                     backgroundColor:'rgba(249,249,249,0.85)',
                      mx: 1,
                      my: 2,
                      borderRadius:5,
                      height:390,
                      width:220,
                      '&:hover': {
                        transition: 'transform 0.1s ease-in-out',
                        transform: 'scale(1.1)',
                      },
                    }}>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Drums
              </Typography>
              <Typography variant="body2" color="text.secondary" >
              Popz Tune London Piano Exam Pieces Plus Exercises
                    from 2023: Grade 5(Single Edition)
              </Typography>
              <Typography sx={{height:180}}>
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Categorize lessons:
                  </Box>
                  Beginner, intermediate, advanced.
                  <Box display="flex" alignItems="center">
                  <VerifiedIcon color='success' fontSize='15px' />
                  &nbsp; Lesson focus:
                  </Box>
                  Chords, strumming patterns, music theory for guitarists, specific genres.
              </Typography>
            </CardContent>                  
            <CardActions sx={{justifyContent:'center'}}>
            {add3 ? <Button size="small" variant="contained" onClick={but3}>
                      Remove
                </Button>: <Button size="small" variant="contained" onClick={handlebut3}>
                      Add
                </Button>}
              </CardActions>
          </Card>
                </Grid>
                
            </Grid>
    </Box>
        </Box>
    <h1>{val}</h1>
      </div>
    );
}

export default Pchase;
