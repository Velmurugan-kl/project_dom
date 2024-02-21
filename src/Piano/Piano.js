import React from 'react'
import "../Piano/Piano.css"
import Sound from "./tunes/a.wav";
import Soundw from "./tunes/w.wav";
import Sounds from "./tunes/s.wav";
import Sounde from "./tunes/e.wav";
import Soundd from "./tunes/d.wav";
import Soundf from "./tunes/f.wav";
import Soundt from "./tunes/t.wav";
import Soundg from "./tunes/g.wav";
import Soundy from "./tunes/y.wav";
import Soundh from "./tunes/h.wav";
import Soundu from "./tunes/u.wav";
import Soundj from "./tunes/j.wav";
import Soundk from "./tunes/k.wav";
import Soundo from "./tunes/o.wav";
import Soundl from "./tunes/l.wav";
import Soundp from "./tunes/p.wav";
import Soundm from "./tunes/m.wav";

const Piano=()=> {
  
  function play(){
    new Audio(Sound).play()
  }
  function playw(){
    new Audio(Soundw).play()
  }
  function plays(){
    new Audio(Sounds).play()
  }
  function playe(){
    new Audio(Sounde).play()
  }
  function playd(){
    new Audio(Soundd).play()
  }
  function playf(){
    new Audio(Soundf).play()
  }
  function playt(){
    new Audio(Soundt).play()
  }
  function playg(){
    new Audio(Soundg).play()
  }
  function playy(){
    new Audio(Soundy).play()
  }
  function playh(){
    new Audio(Soundh).play()
  }
  function playu(){
    new Audio(Soundu).play()
  }
  function playj(){
    new Audio(Soundj).play()
  }
  function playk(){
    new Audio(Soundk).play()
  }
  function playo(){
    new Audio(Soundo).play()
  }
  function playl(){
    new Audio(Soundl).play()
  }
  function playp(){
    new Audio(Soundp).play()
  }
  function playm(){
    new Audio(Soundm).play()
  }
  
    
  return (
  <>
    
    <div class="wrapper">
      <header>
        <h2>Playable PIANO</h2></header>
        <ul class="piano-keys">
        <li class="key white" data-key="a"onClick={play}><span>a</span></li>
        <li class="key black" data-key="w"onClick={playw}><span>w</span></li>
        <li class="key white" data-key="s"onClick={plays}><span>s</span></li>
        <li class="key black" data-key="e"onClick={playe}><span>e</span></li>
        <li class="key white" data-key="d"onClick={playd}><span>d</span></li>
        <li class="key white" data-key="f"onClick={playf}><span>f</span></li>
        <li class="key black" data-key="t"onClick={playt}><span>t</span></li>
        <li class="key white" data-key="g"onClick={playg}><span>g</span></li>
        <li class="key black" data-key="y"onClick={playy}><span>y</span></li>
        <li class="key white" data-key="h"onClick={playh}><span>h</span></li>
        <li class="key black" data-key="u"onClick={playu}><span>u</span></li>
        <li class="key white" data-key="j"onClick={playj}><span>j</span></li>
        <li class="key white" data-key="k"onClick={playk}><span>k</span></li>
        <li class="key black" data-key="o"onClick={playo}><span>o</span></li>
        <li class="key white" data-key="l"onClick={playl}><span>l</span></li>
        <li class="key black" data-key="p"onClick={playp}><span>p</span></li>
        <li class="key white" data-key=";"onClick={playm}><span>;</span></li>
      </ul>
     
    </div>
    <div class='no'>Play Repeat Enjoy!!!</div><br></br><br></br><br></br><br></br><br></br><br></br>
   <center><iframe width="700" height="260" src="https://www.youtube.com/embed/bzNKQ2FkEJI?si=wybSqXWcvnPGSFC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    <iframe width="700" height="260" src="https://www.youtube.com/embed/S8TvXhLtLa0?si=3w4J2YB4utf_b2a7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></center>
    
    </>


      
       
  )
}

export default Piano