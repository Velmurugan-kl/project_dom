import React from 'react';
import './Video.css'
const Video = () => {
  return (
    <div>
      <center><h1 style={{ backgroundColor: 'lightblue', padding: '10px' }}>Start Learning with some videos!!!</h1></center>
      <div className="video-container">
        <div className="video-box">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eX1HZgHMvB8?si=kk0NJrGLz9sno2fL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Lesson1"></iframe>
        </div>
        <div className="video-box">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/rTMN8rCBWkw?si=BEQdHJzgKnilanep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Lesson2"></iframe>
        </div>
        <div className="video-box">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/a9vxbhli45k?si=g1xxQLUPB7RNBd_T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Les3"></iframe>
        </div>
        <div className="video-box">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/0ZzLivXMEss?si=qe0P1V6HIPEd_LsA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen alt="Les4"></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
