import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import  About  from './pages/About/About'
import Navbar   from './components/navbar/navbar'
import Home  from './pages/Home/Home';
//import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'


export const Router=()=>{

   
    return(
        <BrowserRouter>
        <Navbar/>
            <div className='container'>
            
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />


          </Routes>
          </div>
        </BrowserRouter>
    )
}