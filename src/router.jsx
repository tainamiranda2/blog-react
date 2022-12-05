import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';

import  About  from './pages/About/About'
import Navbar   from './components/navbar/navbar'
import Home  from './pages/Home/Home';
import Post from './pages/gerenciamento/create/post';
import Dashboard from './pages/dashboard/Dashboard';
//import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { AuthProvider } from './context/AuthContext';
import { Auth } from './hooks/Auth';
import { onAuthStateChanged } from 'firebase/auth';
import Search from './pages/gerenciamento/search/search';
import { Postindividual } from './pages/gerenciamento/post/PostIndividual';


export const Router=()=>{

  const [user,setUser]=useState(undefined)
   const {auth}=Auth()


   const loadingUSer=user===undefined
   
   useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
   }, [auth])

  /* if(loadingUSer){
    return <p>Carregando ...</p>
   }
*/
    return(
    <AuthProvider value={{user}}>
        <BrowserRouter>
        <Navbar/>
            <div className='container'>
            
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/About" element={<About />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/post/:id" element={<Postindividual />} />
            <Route 
            path="/Login" 
            element={!user?<Login/>:<Navigate to="/"/>} 
            />
            <Route 
            path="/Register" 
            element={!user? <Register/>:<Navigate to="/"/>} 
            />
            <Route
             path="/Posts/Create" 
            element={user?<Post/>:<Navigate to="/login"/>} 
            />
            <Route 
            path="/Dashboard" 
            element={user?<Dashboard/>:<Navigate to="/login"/>}
             />
          </Routes>
          </div>
        </BrowserRouter>
        </AuthProvider>
    )
}