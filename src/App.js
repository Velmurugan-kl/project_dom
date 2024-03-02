import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';

import SignUp from './Pages/Signup';
import SignUp1 from './Pages/Signup1';
import Navilayout from './Pages/Navilayout';
import Piano from './Piano/Piano';
import Pchase from './purschase/Pchase';
import Carnatic from './Home/Carnatic';
import Frontpage from './Home/Frontpage';
import Profile from './profile/Profile';
import ResponsiveGrid from './Pages/Home';
import Mycontext from './Pages/Mycontext';
import { useState } from 'react';
import Drums from './drums/Drums';
import Footer from './Pages/Footer';
import Gittut from './Home/Gittut';
import Video from './Home/Video';
import Tut from './Home/Tut';
import WrappedComp from './Home/WrappedComp';
import Userdelete from './Pages/Userdelete';
import Courses from './Home/Courses';

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
        <Route path='/cfront' element={<Frontpage/>}/>
        <Route path='/carnatic' element={<Carnatic/>}/>
        <Route path='/drums' element={<Drums/>}/>
        <Route path='/guitar' element={<Gittut/>}/>
        <Route path='/guitar/video' element={<Video/>}/>
        <Route path='/guitar/tutorial' element={<Tut/>}/>
        <Route path='/guitar/courses' element={<Courses/>}/>
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
