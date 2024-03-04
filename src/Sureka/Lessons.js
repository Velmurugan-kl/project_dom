import React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';

import './Lessons.css'
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
const Lessons = () => {
    
        const navigate=useNavigate()
        const handleclick = () => {
          navigate("/guitar/tutorial1")
        }
        const [value, setValue] = React.useState(2);
        const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
    
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
        <Typography component="legend"> Congratulations!!! Second Star Badge Unlocked! </Typography>
        <br></br>
        <Rating name="read-only" value={value} readOnly size="large" />
        </center>
        <button style={{ marginLeft: "170px", backgroundColor:"goldenrod" ,borderRadius:"70px",height:"40px",width:"70px"}} onClick={handleclick}>Next</button>

        </Box>
      </Modal>
    <div class="bg">
        <center><h1 >Lessons</h1></center>
        <div id="primary-second-section">

<div    id="most-popular-section">
    <div    class="most-popular-items">
        <div class="music-icon-section">
          
            <p>01</p>
            
            <iframe width="500" height="250" src="https://www.youtube.com/embed/a9vxbhli45k?si=g1xxQLUPB7RNBd_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Les3"></iframe>
            <p>Party trick conveys a lot of emotion. Without it you playing will likely sound flat and uninspired. Many people seem to pick it up without 'learning' it, but for the majority of players it will need practice.</p>
        
        </div>
        
        
    </div>
    <div    class="most-popular-items">
        <div class="music-icon-section">
            <p>02</p>
            <iframe width="500" height="250" src="https://www.youtube.com/embed/ZgSdoT_tfJY?si=g0AielWVz9_I0S4S" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
           <p>Correct Thumb Placement On The Neck:
A lot of people worry about where to place their thumb... but there's no set place. Hear where / when in this lesson!</p>
        </div>
        
        
        
    </div>
    <div    class="most-popular-items">
        <div class="music-icon-section">
            <p>03</p>
            <iframe width="500" height="250" src="https://www.youtube.com/embed/rTMN8rCBWkw?si=BEQdHJzgKnilanep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Lesson2"></iframe>
            
            <p>Playing basic guitar chords is the foundation of learning the instrument. These fundamental shapes lay the groundwork for countless songs across various genres</p>
        </div>
        
        
    </div>
    <div    class="most-popular-items">
        <div class="music-icon-section">
            <p>04</p>
            <iframe width="500" height="250" src="https://www.youtube.com/embed/fgDY8k0Gjzc?si=ZwWUDwDc5W1OY9dG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p style={{justifyContent:"center"}}>String Bending Technique
String bending is a basic blues and rock technique. The idea is to "bend" push a string across or over the fingerboard with your left-hand fingers</p>
        </div>
        
        
    </div>
    <div    class="most-popular-items">
        <div class="music-icon-section">
            <p>05</p>
            <iframe width="500" height="250" src="https://www.youtube.com/embed/QvQ6sFfQjuA?si=nXGrhlD7F8O-f6kK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            
            <p>Minimum Movement Exercise:
One of the most powerful and effective exercises you can do to improve your guitar technique!</p>
        </div>

        
    </div>
    
    </div>
</div>
<Button class="btn7" onClick={handleOpen}>Continue</Button>
</div>
</>
   
  )
}

export default Lessons