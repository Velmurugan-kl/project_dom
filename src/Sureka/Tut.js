import React,{useState} from 'react'
import Sounda from "./Tut/A.mp3"
import Soundb from "./Tut/B.mp3";
import Soundc from "./Tut/C_64kb.mp3";
import Sounde from "./Tut/E_64kb.mp3";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './Tut.css'
import Rating from '@mui/material/Rating';
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  
  const Tut = () => {
  const [value, setValue] = React.useState(5);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    function playa(){
        new Audio(Sounda).play()
      
      }
      function playb(){
        new Audio(Soundb).play()
      }
      function playc(){
        new Audio(Soundc).play()
      }
      function playd(){
        new Audio(Sounde).play()
      }
    
      
  return (
  
    <>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <center>
        <Typography component="legend"> Successfullly Completed Basic-I Tutorial!!! </Typography>
        <br></br>
        <Rating name="read-only" value={value} readOnly size="large" />
        </center>
        

        </Box>
      </Modal>
    
    <div class="chord">
  <center><h1 style={{color:"white"}}>Chords Tutorial</h1></center>
    <div class="image-container">
      
       <h1 class="Chord1">A MAJOR CHORD</h1>
        <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
        
        <button class="button1" onClick={() => playa(Sounda)}>1</button>
        <button class="button2" onClick={playc}>3</button>
        <button class="button3" onClick={playb}>2</button>
        <button class="button4" onClick={playd}>4</button>
</div>
<div class="image-container">
<h1 class="Chord1">D MAJOR CHORD</h1>

  <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
  
  <button class="button1" onClick={playa}>1</button>
  <button class="button3" onClick={playb}>2</button>
  <button class="button2" onClick={playb}>2</button>
        
        </div>
        <div class="image-container">
     
        <h1 class="Chord1">E MAJOR CHORD</h1>
        <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
        
        <button class="button1" onClick={playa}>1</button>
        <button class="button2" onClick={playb}>2</button>
        <button class="button4" onClick={playc}>3</button>
        </div>
        <div class="image-container">
        <h1 class="Chord1">E MINOR CHORD</h1>
      
        <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
        
        <button class="button4" onClick={playb}>1</button>
        <button class="button1" onClick={playa}>2</button>
        <button class="button2" onClick={playc}>3</button>
        </div>
        <div class="image-container">
     
        <h1 class="Chord1">D MINOR CHORD</h1>
        <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
        
        <button class="button1" onClick={playd}>1</button>
        <button class="button3" onClick={playa}>2</button>
        <button class="button4" onClick={playc}>3</button>
        </div>
        <div class="image-container">
        <h1 class="Chord1">B MAJOR CHORD</h1>
      
        <img src="https://etc.usf.edu/clipart/42600/42669/grid_42669_sm.gif" width="350" height="400"></img>
        
        <button class="button2" onClick={playa}>1</button>
        <button class="button1" onClick={playb}>2</button>
        <button class="button3" onClick={playb}>2</button>
        
        </div>
        <Button class="btn7" onClick={handleOpen}>Continue</Button>
        </div>
    
  </>
  )
}

export default Tut