import React from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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
  const Tutorial = () => {
    const navigate=useNavigate()
    const handleclick = () => {
      navigate("/guitar/basic")
    }
    const [value, setValue] = React.useState(3);
  
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
        <Typography component="legend"> Congrats!! Third Star Unlocked! </Typography>
        <br></br>
        <Rating name="read-only" value={value} readOnly size="large" />
        </center>
        <button style={{ marginLeft: "120px", backgroundColor:"goldenrod" }} onClick={handleclick}>Next</button>

        </Box>
      </Modal>
    <div style={{  background: 'radial-gradient(circle, rgba(60,107,144,1) 0%, rgba(140,133,133,1) 100%)', fontFamily: "serif", padding: "20px",margin:"30px 30px",border:"5px solid black"}}>
      <center><h1><u>Learn how to play guitar(For beginners)</u></h1></center>
      <h1>#1 Know the parts of the instrument </h1>
      <h2>You do not need to learn the names of all the components, but learning at least the most important parts is very important, so that you will be able to follow a guitar lesson.</h2>
      <center><img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/classic-guitar-labelled-1536x1024.jpg" width="500" height="300"></img></center>
<h1>#2 Choosing the right guitar</h1>
<h2>There are basically two types of guitar: that made of nylon and that made of steel. For beginners, we recommend starting to play with a nylon guitar, as nylon is softer and makes execution easier (you do not need to press the strings with so much strength). This choice shall make your studies much easier.

It is possible to buy a good nylon guitar for beginners in the price range between US$ 50,00 and US$ 100,00 (you do not need to invest too much in the beginning. First, learn to play simple pieces of music with a study guitar and then, when you are more experienced, choose a guitar that better meets your new musical desires).</h2>
<h1>#3 Learn to hold the guitar before you play it</h1>
<h2>You can hold the guitar on either your right or left leg. Placing your guitar on your left leg is more recommended for those who wish to play classical music; however, most guitarists, especially those playing pop music, will hold the guitar on the right leg, slightly inclined to allow a satisfactory posture of both hands.

For this reason, we advise you to start by placing the guitar on your right leg.

Try to keep your chest straight, to allow good breathing and free movement of your arms, as shown in the picture below:</h2>
<center><img src="https://www.taylorguitars.com/sites/default/files/2022-02-08/AD27eFlametop-Gallery%2016.jpg" width="500" height="300"></img></center>
<h1>#4 Look at the numbering of the fingers</h1>
<img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/guitar-finger.png"></img>
<h2>Notice that the fingers are numbered from 1 to 4, starting with the index finger (number 1) out to finger number 4. This numbering system is very useful to show the formation of chords, showing which finger should press each string in each fret. This will soon be much clearer, when we set up the chords with the left hand.</h2>
<h1>#5 Play with the left hand for the first time</h1>
<h2>The left hand (for right-handed people) is responsible for establishing the chords and the notes. The definition of a chord is different from that of a note, as a chord is the union or blend of many notes played at the same time (while a note is the minimum element of sound). A chord can be represented as follows:

</h2>
<center><img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/chords-fingering.jpg"></img></center>
<h2>Here, the numbers on the strings represent the fingers of the left hand, based on the numbering system we have already seen in step #4. These fingers should press the respective strings in the respective frets shown in the figure. The number to the left of the drawing (highlighted in green below) informs where, or which fret of the instrument, that particular chord should be executed:

</h2>
<center><img src="https://www.simplifyingtheory.com/wp-content/uploads/2020/08/guitar-fret-notation.jpg"></img></center>
<h2>Regarding the numbering of the strings of the guitar, the correct way is to count from the bottom up (the string with the highest pitch is the first, while the lowest-pitched string is the 6th). The note for each string is shown in the table below.
<ul>
<li>1st string: E</li>
<li>2nd string: B</li>
<li>3rd string: G</li>
<li>4th string: D</li>
<li>5th string: A</li>
<li>6th string: E</li>
</ul></h2>

    <Button class="btn7" onClick={handleOpen}>Continue</Button>
    </div>
    </>
  )
}

export default Tutorial
    


  