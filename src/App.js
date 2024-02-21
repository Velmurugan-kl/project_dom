import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import Home from './Pages/Home';
import SignUp from './Pages/Signup';
import SignUp1 from './Pages/Signup1';
import Navilayout from './Pages/Navilayout';
import Piano from './Piano/Piano';
import Pchase from './purschase/Pchase';
import Carnatic from './Home/Carnatic';
import Frontpage from './Home/Frontpage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navilayout />} >
        <Route index element={<Home />}/>
        <Route path='/piano' element={<Piano/>}/>
        <Route path='/pchase' element={<Pchase/>}/>
        <Route path='/cfront' element={<Frontpage/>}/>
        <Route path='/carnatic' element={<Carnatic/>}/>

        </Route>

        <Route path='/login' element={<Login/>}/>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup1" element={<SignUp1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
