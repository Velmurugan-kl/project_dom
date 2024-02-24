import React from 'react';
import "./Drums.css"
import img9 from './images/crash.png'
import img99 from './images/kick.png'
import img88 from './images/snare.png'
import img77 from './images/Tom.png'
import img56 from './images/Crash_1.png'
import crash from './sounds/crash.mp3';
import kick from './sounds/bass.mp3';
import snare from './sounds/snare.mp3';
import tom from './sounds/tom.mp3';
import hi from './sounds/hihat.mp3';

const Drums = () => {
  function toggleZoom(event) {
    const img = event.target;
    img.classList.toggle("zoomed");
  }
  

    function playc(){
        new Audio(crash).play()
      }
    function playk(){
        new Audio(kick).play()
      }
    function plays(){
        new Audio(snare).play()
      }
    function playt(){
        new Audio(tom).play()
      }
    function playh(){
        new Audio(hi).play()
      }
  

  return (
    <body className='bcs'>
      <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Splash&display=swap" rel="stylesheet" />
      </head>
    <form className='drum'> 
      <center><h1 className='popi'>Drumming up a storm</h1></center>
      
      <img src={img56} className='crs' onClick={(event) => { toggleZoom(event); playh(); }} />
      <img src={img99} className='kck' onClick={(event) => { toggleZoom(event); playk(); }} />
      <img src={img88} className='snr' onClick={(event) => { toggleZoom(event); plays(); }} />
      <img src={img77} className='tm' onClick={(event) => { toggleZoom(event); playt(); }} />
      <img src={img9}  className='cs' onClick={(event) => { toggleZoom(event); playc(); }} />
    </form><br></br><br></br>
    <center>
    <iframe width="400" height="230" src="https://www.youtube.com/embed/6l8vQYhnbxA?si=7LQS_gYfaWK6SG4T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="400" height="230" src="https://www.youtube-nocookie.com/embed/Ssz69tFTS7Y?si=M6aMnsX0D5rfZmXD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="400" height="230" src="https://www.youtube-nocookie.com/embed/lql92_54KrQ?si=2nzCLHGMIjrwbKhZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </center>
    </body>
  )
  }

export default Drums
