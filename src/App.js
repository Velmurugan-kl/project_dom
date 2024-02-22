import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
// import Home from './Pages/Home';
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

function App() {
  const [email,setEmail]=useState("aa");
  const [password,setPassword]=useState("");
  const [loged,setLoged]=useState(false);
  return (
    <Mycontext.Provider value={{email,setEmail,password,setPassword,loged,setLoged}}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navilayout />} >
        <Route index element={<ResponsiveGrid />}/>
        <Route path='/piano' element={<Piano/>}/>
        <Route path='/pchase' element={<Pchase/>}/>
        <Route path='/cfront' element={<Frontpage/>}/>
        <Route path='/carnatic' element={<Carnatic/>}/>
        </Route>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup1" element={<SignUp1 />} />
      </Routes>
    </BrowserRouter>
    </Mycontext.Provider>
  );
}

export default App;
