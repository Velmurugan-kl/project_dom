import React from 'react'
import './Frontpage.css'

import { useNavigate } from 'react-router-dom'
const Frontpage = () => {

  const navigate=useNavigate()
    const handleClick = () =>{
navigate("/carnatic")

    }
  return (
    <div>
    
      <center>
        <h1>Welcome to Popz tune</h1>
        </center>
      <div className="About">
       <h4> Welcome to our music learning app, where the world of melody, harmony, and rhythm awaits you! Whether you're a budding musician, an aspiring composer, or simply a music enthusiast looking to expand your knowledge, you've come to the right place.
Our app is designed to be your virtual companion on your musical journey, offering a wealth of resources and tools to help you explore, learn, and create music in a fun and interactive way. From comprehensive lessons on music theory and instrument tutorials to ear training exercises and songwriting tips, we've got everything you need to nurture your passion for music.</h4>
</div>
<center>
<button class="button button2" onClick={handleClick}>Begin learning!!!</button>
</center>
        <div class="courses">
          <center>
          <h1>Popular courses videos</h1>
        <button class="button button1" >Hindustani</button>
        <button class="button button2" >Carnatic</button>
        <button class="button button3">Western Classical</button>
          <iframe width="600" height="315" src="https://www.youtube.com/embed/n2z02J4fJwg?si=NaSjNyziL7ZCrDdT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/MNOM7eM8ehk?si=6r0_xg16RvjbmHR6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </center>
        </div>
        

</div>

    
  )
}

export default Frontpage