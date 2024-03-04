import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


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
const BasicChords = () => {
  const navigate=useNavigate()
  const handleclick = () => {
    navigate("/guitar/tut")
  }
  const [value, setValue] = React.useState(4);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const page = useNavigate();

  
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
        <Typography component="legend"> Congratulations!!! Fourth Star Badge Unlocked! </Typography>
        <br></br>
        <Rating name="read-only" value={value} readOnly size="large" />
        </center>
        <button style={{ marginLeft: "170px", backgroundColor:"goldenrod" ,borderRadius:"70px",height:"40px",width:"70px"}} onClick={handleclick}>Next</button>

        </Box>
      </Modal>

    <div style={{ background: 'radial-gradient(circle, rgba(60,107,144,1) 0%, rgba(140,133,133,1) 100%)', fontFamily: "serif", padding: "20px",margin:"30px 30px",border:"5px solid black"}}>
      <u><center><h1>Compose your first chords and learn basic chord notation</h1></center></u>
      <h2>Sometimes it may seem difficult to know how to really play the guitar (practical part, free of any theory) but you need to understand that playing the guitar is essentially a matter of making chords with your left hand at the same time when you make rhythm with your right. This means that, in order to play the guitar, you need to memorize some basic chords in the left hand and at least one rhythm (or beat) in your right hand, to be able to play a full song. In this process, the most advisable course of action is to learn the basis with your left hand first, and then slot in your right hand, in a coordinated manner.</h2>
      <h2>Now that we already know how to place our left hand correctly, we now need to get to know the most common chords used with the guitar. With these chords, you shall already be able to play thousands of songs, which means that it is important to try to assemble each one of them and memorize its formation, so be agile when changing from one chord to another. Below, we present other important chords so that you can already memorize them (below each chord we show its name, and its chord letters in brackets):</h2>
      <center>
        <img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/d-major-guitar.jpg" alt="D Major Chord" />
        <h2>D Major Chord</h2>
        
        <img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/a-major-guitar.jpg" alt="A Major Chord" />
        <h2>A Major Chord</h2>
        <img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/g-major-guitar.jpg" alt="G Major Chord" />
        <h2>G Major Chord</h2>
      </center>
      <h2>Notice that each notation of the chords is represented by a letter, as in the list that follows:</h2>
      <ul>
        <li>C-do</li>
        <li>D-re</li>
        <li>E-mi</li>
        <li>F-fa</li>
        <li>G-sl</li>
        <li>A-la</li>
        <li>B-ti</li>
      </ul>
      <h2>This is the notation for the major chords. In the case of the minor chords, these have an additional “m” beside the letter. For example: Em (E minor). Below you will see the difference of chords between E major and E minor:</h2>
      <center>
        <img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/e-chord.jpg" alt="E Major Chord" />
        <h2>E Major Chord</h2>
        <img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/em-chord.jpg" alt="E Minor Chord" />
        <h2>E Minor Chord</h2>
      </center>
    <Button class="btn7" onClick={handleOpen}>Next</Button>
    </div>
    </>
  );
};

export default BasicChords;
