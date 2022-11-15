import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import  About  from './pages/About/About'
import Navbar   from './components/navbar/navbar'
import Home  from './pages/Home/Home';
//import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext';
import { Auth } from './hooks/Auth';
import { onAuthStateChanged } from 'firebase/auth';

export const Router=()=>{

  const [user,setUser]=useState(undefined)
   const {auth}=Auth()

   const loadingUSer=user===undefined
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
   }, [auth])

   if(loadingUSer){
    return <p>Carregando</p>
   }

    return(
    <AuthProvider value={{user}}>
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
        </AuthProvider>
    )
}