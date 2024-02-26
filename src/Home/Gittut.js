import React from 'react';
import './Gittut.css';
import Sounda from "./Music/A.mp3"
import Soundb from "./Music/B.mp3"
import Soundc from "./Music/C_64kb.mp3";
import Sounde from "./Music/E_64kb.mp3";
import Soundd from "./Music/D.mp3"
const Gittut = () => { 
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
    new Audio(Soundd).play()
  }
  function playe(){
    new Audio(Sounde).play()
  }
  return (
    <div className="cont">
      <center>
        <h1 class="title">Guitar Tutorials</h1>
        <h2>E A D G B E Eddie Ate Dynamite Good Bye Eddie</h2>
      </center>
      <div className="img-container">
        <div className="tuto">
          <img
            className="tut"
            src="https://cdn.dribbble.com/users/1230266/screenshots/5446543/ado_4.gif"
            alt="tutorial"
          />
        </div>
        <div>
          <img
            className="img"
            src="https://appliedguitartheory.com/wp-content/uploads/2024/01/chord-diagram-explanation.png"
            alt="chords" width="500" height="500"
          />
          <button class="btn" onClick={playa}>A</button>
          <button class="btn1" onClick={playb}>D</button>
          <button class="btn2" onClick={playc}>G</button>
          <button class="btn3" onClick={playd}>B</button>
          <button class="btn4" onClick={playe}>E</button>
        </div>
      </div>
      
    </div>
  );
};

export default Gittut;
