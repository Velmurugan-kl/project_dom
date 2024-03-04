import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';

import SignUp from './Pages/Signup';
import SignUp1 from './Pages/Signup1';
import Navilayout from './Pages/Navilayout';
import Piano from './Piano/Piano';

import Profile from './profile/Profile';
import ResponsiveGrid from './Pages/Home';
import Mycontext from './Pages/Mycontext';
import { useState } from 'react';
import Drums from './drums/Drums';


import WrappedComp from './Home/WrappedComp';
import Userdelete from './Pages/Userdelete';

import Pchase from './Pchase/Pchase';
import Courses from './Sureka/Courses';
import Gittut from './Sureka/Gittut';
import Lessons from './Sureka/Lessons';
import Tutorial from './Sureka/Tutorial';
import BasicChords from './Sureka/BasicChords';
import Tut from './Sureka/Tut';

function App() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [next,setNext]=useState(false);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div>
      
    <Mycontext.Provider value={{email,setEmail,password,setPassword,next,setNext,isLoading, setIsLoading}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navilayout />} >
        <Route index element={<WrappedComp/>}/>
        <Route path='/home' element={<ResponsiveGrid />}/>
        <Route path='/piano' element={<Piano/>}/>
        <Route path='/pchase' element={<Pchase/>}/>
        <Route path='/drums' element={<Drums/>}/>
        <Route path='/guitar' element={<Courses/>}/>
        <Route path='/guitar/video' element={<Lessons/>}/>
        <Route path='/guitar/tutorial' element={<Gittut/>}/>
        <Route path='/guitar/tutorial1' element={<Tutorial/>}/>
        <Route path='/guitar/basic' element={<BasicChords/>}/>
        <Route path='/guitar/tut' element={<Tut/>}/>
        </Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup1" element={<SignUp1 />} />
        <Route path='/delete' element={<Userdelete/>}/>
      </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
    {/* <Footer/> */}
    </div>
  );
}

export default App;
