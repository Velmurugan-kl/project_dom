import React,{useState} from 'react'
import Sounda from "./Music/A.mp3"
import Soundb from "./Music/B.mp3"
import Soundc from "./Music/C_64kb.mp3";
import Sounde from "./Music/E_64kb.mp3";

import './Tut.css'
const Tut = () => {
  const [timeoutId, setTimeoutId] = useState(null);



    function playa(){
        new Audio(Sounda).play()
        if (timeoutId) {
          clearTimeout(timeoutId); // Clear previous timeout
        }
        setTimeoutId(setTimeout(() => {
          alert('Free trial over!');
        }, 10000)); // Set new timeout
      
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
    
    <div class="chord">
  <center><h1 >Chords Tutorial</h1></center>
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
        </div>
    
  
  )
}

export default Tut