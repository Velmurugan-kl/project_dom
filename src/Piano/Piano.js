import React, { useEffect } from 'react';
import "../Piano/Piano.css";
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

const Piano = () => {
  useEffect(() => {
    const keyDownHandler = (event) => {
      switch (event.key) {
        case 'a':
          play(Sound);
          break;
        case 'w':
          play(Soundw);
          break;
        case 's':
          play(Sounds);
          break;
        case 'e':
          play(Sounde);
          break;
        case 'd':
          play(Soundd);
          break;
        case 'f':
          play(Soundf);
          break;
        case 't':
          play(Soundt);
          break;
        case 'g':
          play(Soundg);
          break;
        case 'y':
          play(Soundy);
          break;
        case 'h':
          play(Soundh);
          break;
        case 'u':
          play(Soundu);
          break;
        case 'j':
          play(Soundj);
          break;
        case 'k':
          play(Soundk);
          break;
        case 'o':
          play(Soundo);
          break;
        case 'l':
          play(Soundl);
          break;
        case 'p':
          play(Soundp);
          break;
        case ';':
          play(Soundm);
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  function play(sound) {
    new Audio(sound).play();
  }

  function playKey(sound) {
    return () => play(sound);
  }

  return (
  
    <div className='ca'>
      <center><h1 class='var'>Piano</h1></center>
      <div className="wrapper">
        <header>
          <h2 className='pp'>Playable PIANO</h2>
        </header>
        <ul className="piano-keys">
          <li className="key white" onClick={playKey(Sound)}><span>a</span></li>
          <li className="key black" onClick={playKey(Soundw)}><span>w</span></li>
          <li className="key white" onClick={playKey(Sounds)}><span>s</span></li>
          <li className="key black" onClick={playKey(Sounde)}><span>e</span></li>
          <li className="key white" onClick={playKey(Soundd)}><span>d</span></li>
          <li className="key white" onClick={playKey(Soundf)}><span>f</span></li>
          <li className="key black" onClick={playKey(Soundt)}><span>t</span></li>
          <li className="key white" onClick={playKey(Soundg)}><span>g</span></li>
          <li className="key black" onClick={playKey(Soundy)}><span>y</span></li>
          <li className="key white" onClick={playKey(Soundh)}><span>h</span></li>
          <li className="key black" onClick={playKey(Soundu)}><span>u</span></li>
          <li className="key white" onClick={playKey(Soundj)}><span>j</span></li>
          <li className="key white" onClick={playKey(Soundk)}><span>k</span></li>
          <li className="key black" onClick={playKey(Soundo)}><span>o</span></li>
          <li className="key white" onClick={playKey(Soundl)}><span>l</span></li>
          <li className="key black" onClick={playKey(Soundp)}><span>p</span></li>
          <li className="key white" onClick={playKey(Soundm)}><span>;</span></li>
        </ul>
      </div>
      <div className='non'>Play Repeat Enjoy!!!</div>
      <br/><br/><br/><br/><br/>
      <center>
        <iframe width="600" height="260" src="https://www.youtube.com/embed/bzNKQ2FkEJI?si=wybSqXWcvnPGSFC8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="600" height="260" src="https://www.youtube.com/embed/S8TvXhLtLa0?si=3w4J2YB4utf_b2a7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </center>
    </div>
  );
}

export default Piano;
