import React from 'react';
import './Courses.css'; 
import {useNavigate} from 'react-router-dom'
const Courses = () => {
  const navigate=useNavigate()
  const handleclick = () => {
navigate("/guitar")
  }
   return (
    <>
    <h1 style={{fontFamily:"serif",textAlign:"center"}}>COURSES</h1>
    <div className="course-container"> 
      <div className="course-item">
        <h1 style={{color:"white"}}>Basics-I</h1>
        <img src="https://fydn.imgix.net/m%2Fgen%2Fart-print-square-p1%2F8f00ba15-8ed4-4459-9da7-96bf099e3533.jpg?auto=format%2Ccompress&q=75" alt="Course 1" height="400px" width="500px" />
        <button class="unlock1" onClick={handleclick}>Unlock</button>
      </div>
      <div className="course-item">
      <h1 style={{color:"white"}}>Basics-II</h1>
        <img src="https://fydn.imgix.net/m%2Fgen%2Fart-print-square-p1%2F9a5308b6-4b44-4404-ab12-66af6f3a9602.jpg?auto=format%2Ccompress&q=75" alt="Course 2" height="400px" width="500px" />
        <button class="unlock1">Unlock</button>
      </div>
      <div className="course-item">
      <h1 style={{color:"white"}}>Basics-III</h1>
        <img src="https://fydn.imgix.net/m%2Fgen%2Fart-print-square-p1%2F438e2425-677d-4e27-904a-01771aaa796e.jpg?auto=format%2Ccompress&q=75"alt="Course 3" height="400px" width="500px" />
        <button class="unlock1">Unlock</button>
      </div>
      <div className="course-item">
      <h1 style={{color:"white"}}>Basics-IV</h1>
        <img src="https://fydn.imgix.net/m%2Fgen%2Fart-print-square-p1%2F3217aa3e-1691-456c-ab2d-48d229ce9752.jpg?auto=format%2Ccompress&q=75" alt="Course 4" height="400px" width="500px" />
        <button class="unlock1">Unlock</button>
      </div>
    </div>
    </>
  );
};

export default Courses;
